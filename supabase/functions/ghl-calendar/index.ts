const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
import { z } from 'https://esm.sh/zod@3.25.76'

const GHL_API_URL = 'https://services.leadconnectorhq.com'
const CALENDAR_ID = 'GZJr7oldzXIpGnqo0klp'

const GetSlotsSchema = z.object({
  action: z.literal('get-slots'),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  timezone: z.string().optional().default('America/Chicago'),
})

const BookSchema = z.object({
  action: z.literal('book'),
  slot: z.string().min(1),
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().max(100).optional().default(''),
  phone: z.string().trim().min(1).max(30),
  email: z.string().trim().email().max(255),
  address: z.string().trim().max(500).optional().default(''),
  notes: z.string().trim().max(2000).optional().default(''),
  estimateData: z.object({
    fenceType: z.string().optional(),
    length: z.number().optional(),
    gate: z.string().optional(),
    demoHaulOff: z.boolean().optional(),
    lowEstimate: z.number().optional(),
    highEstimate: z.number().optional(),
  }).optional(),
})

const RequestSchema = z.discriminatedUnion('action', [GetSlotsSchema, BookSchema])

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const GHL_PIT_TOKEN = Deno.env.get('GHL_PIT_TOKEN')
    if (!GHL_PIT_TOKEN) throw new Error('GHL_PIT_TOKEN is not configured')

    const GHL_LOCATION_ID = Deno.env.get('GHL_LOCATION_ID')
    if (!GHL_LOCATION_ID) throw new Error('GHL_LOCATION_ID is not configured')

    const body = await req.json()
    const parsed = RequestSchema.safeParse(body)
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const data = parsed.data

    if (data.action === 'get-slots') {
      const url = new URL(`${GHL_API_URL}/calendars/${CALENDAR_ID}/free-slots`)
      url.searchParams.set('startDate', data.startDate)
      url.searchParams.set('endDate', data.endDate)

      const resp = await fetch(url.toString(), {
        headers: {
          'Authorization': `Bearer ${GHL_PIT_TOKEN}`,
          'Version': '2021-04-15',
        },
      })

      const slotsData = await resp.json()
      if (!resp.ok) {
        console.error('GHL slots error:', JSON.stringify(slotsData))
        return new Response(
          JSON.stringify({ success: false, error: 'Failed to fetch available times' }),
          { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      return new Response(
        JSON.stringify({ success: true, slots: slotsData }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // action === 'book'
    // 1. Create or update contact
    const contactResp = await fetch(`${GHL_API_URL}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_PIT_TOKEN}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        address1: data.address,
        source: 'Website - Booking Calendar',
        tags: ['Website Lead', 'Booked Consultation'],
      }),
    })

    const contactData = await contactResp.json()
    const contactId = contactData?.contact?.id
    if (!contactId) {
      console.error('Failed to create contact:', JSON.stringify(contactData))
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to create contact' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Build notes
    let fullNotes = data.notes || ''
    if (data.estimateData) {
      const parts: string[] = []
      if (data.estimateData.fenceType) parts.push(`Fence Type: ${data.estimateData.fenceType}`)
      if (data.estimateData.length) parts.push(`Length: ${data.estimateData.length} ft`)
      if (data.estimateData.gate) parts.push(`Gate: ${data.estimateData.gate}`)
      if (data.estimateData.demoHaulOff) parts.push(`Demo & Haul-off: Yes`)
      if (data.estimateData.lowEstimate && data.estimateData.highEstimate) {
        parts.push(`Estimate: $${data.estimateData.lowEstimate.toLocaleString()} – $${data.estimateData.highEstimate.toLocaleString()}`)
      }
      if (parts.length) fullNotes += `\n\n--- Estimate Details ---\n${parts.join('\n')}`
    }

    // 2. Create appointment
    const apptResp = await fetch(`${GHL_API_URL}/calendars/events/appointments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_PIT_TOKEN}`,
        'Content-Type': 'application/json',
        'Version': '2021-04-15',
      },
      body: JSON.stringify({
        calendarId: CALENDAR_ID,
        locationId: GHL_LOCATION_ID,
        contactId,
        startTime: data.slot,
        endTime: new Date(new Date(data.slot).getTime() + 30 * 60 * 1000).toISOString(),
        title: `Fence Consultation – ${data.firstName} ${data.lastName}`.trim(),
        appointmentStatus: 'new',
        address: data.address || '',
        notes: fullNotes.trim(),
      }),
    })

    const apptData = await apptResp.json()
    if (!apptResp.ok) {
      console.error('GHL appointment error:', JSON.stringify(apptData))
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to book appointment' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, appointmentId: apptData?.id, contactId }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: unknown) {
    console.error('Calendar error:', error)
    const msg = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ success: false, error: msg }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

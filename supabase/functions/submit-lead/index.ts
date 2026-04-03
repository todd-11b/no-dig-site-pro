const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

import { z } from 'https://esm.sh/zod@3.25.76'

const GHL_API_URL = 'https://services.leadconnectorhq.com'

const LeadSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().max(100).optional().default(''),
  phone: z.string().trim().min(1).max(30),
  email: z.string().trim().email().max(255),
  address: z.string().trim().max(500).optional().default(''),
  notes: z.string().trim().max(2000).optional().default(''),
  source: z.string().trim().max(100).optional().default('Website'),
  estimateData: z.object({
    fenceType: z.string().optional(),
    length: z.number().optional(),
    gate: z.string().optional(),
    demoHaulOff: z.boolean().optional(),
    lowEstimate: z.number().optional(),
    highEstimate: z.number().optional(),
  }).optional(),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const GHL_PIT_TOKEN = Deno.env.get('GHL_PIT_TOKEN')
    if (!GHL_PIT_TOKEN) {
      throw new Error('GHL_PIT_TOKEN is not configured')
    }

    const GHL_LOCATION_ID = Deno.env.get('GHL_LOCATION_ID')
    if (!GHL_LOCATION_ID) {
      throw new Error('GHL_LOCATION_ID is not configured')
    }

    const body = await req.json()
    const parsed = LeadSchema.safeParse(body)
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { firstName, lastName, phone, email, address, notes, source, estimateData } = parsed.data

    // Build notes with estimate data if present
    let fullNotes = notes
    if (estimateData) {
      const estimateParts = []
      if (estimateData.fenceType) estimateParts.push(`Fence Type: ${estimateData.fenceType}`)
      if (estimateData.length) estimateParts.push(`Length: ${estimateData.length} ft`)
      if (estimateData.gate) estimateParts.push(`Gate: ${estimateData.gate}`)
      if (estimateData.demoHaulOff) estimateParts.push(`Demo & Haul-off: Yes`)
      if (estimateData.lowEstimate && estimateData.highEstimate) {
        estimateParts.push(`Estimate Range: $${estimateData.lowEstimate.toLocaleString()} – $${estimateData.highEstimate.toLocaleString()}`)
      }
      fullNotes = `${fullNotes}\n\n--- Estimate Details ---\n${estimateParts.join('\n')}`
    }

    // 1. Create contact in GoHighLevel
    const ghlResponse = await fetch(`${GHL_API_URL}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_PIT_TOKEN}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        phone,
        email,
        address1: address,
        source,
        tags: ['Website Lead'],
        customFields: [],
      }),
    })

    const ghlData = await ghlResponse.json()
    if (!ghlResponse.ok) {
      console.error('GHL API error:', JSON.stringify(ghlData))
      // Don't fail the whole request - still send notification
    }

    // 2. Send notification email to Ty via GHL
    const notifyBody = `
New Lead from AbramsFence.com

Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Address: ${address || 'Not provided'}
Source: ${source}

${fullNotes ? `Notes:\n${fullNotes}` : ''}
    `.trim()

    // Use GHL to send an internal notification email
    try {
      await fetch(`${GHL_API_URL}/conversations/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_PIT_TOKEN}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify({
          type: 'Email',
          locationId: GHL_LOCATION_ID,
          contactId: ghlData?.contact?.id,
          subject: `🏗️ New Fence Lead: ${firstName} ${lastName}`,
          message: notifyBody.replace(/\n/g, '<br>'),
          emailTo: 'info@AbramsFence.com',
        }),
      })
    } catch (notifyErr) {
      console.error('Notification email error:', notifyErr)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        contactId: ghlData?.contact?.id,
        message: 'Lead submitted successfully' 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: unknown) {
    console.error('Error submitting lead:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

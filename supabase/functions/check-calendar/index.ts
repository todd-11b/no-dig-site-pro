const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const GHL_API_URL = 'https://services.leadconnectorhq.com'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const GHL_PIT_TOKEN = Deno.env.get('GHL_PIT_TOKEN')
  if (!GHL_PIT_TOKEN) throw new Error('No token')

  // Get calendar details
  const calResp = await fetch(`${GHL_API_URL}/calendars/GZJr7oldzXIpGnqo0klp`, {
    headers: {
      'Authorization': `Bearer ${GHL_PIT_TOKEN}`,
      'Version': '2021-04-15',
    },
  })
  const calData = await calResp.json()

  // Also try fetching slots with timezone param
  const now = Date.now()
  const weekOut = now + 7 * 24 * 60 * 60 * 1000
  const slotsUrl = new URL(`${GHL_API_URL}/calendars/GZJr7oldzXIpGnqo0klp/free-slots`)
  slotsUrl.searchParams.set('startDate', String(now))
  slotsUrl.searchParams.set('endDate', String(weekOut))
  slotsUrl.searchParams.set('timezone', 'America/Chicago')

  const slotsResp = await fetch(slotsUrl.toString(), {
    headers: {
      'Authorization': `Bearer ${GHL_PIT_TOKEN}`,
      'Version': '2021-04-15',
    },
  })
  const slotsData = await slotsResp.json()

  return new Response(JSON.stringify({ calendar: calData, slots: slotsData }, null, 2), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})

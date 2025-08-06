import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { pagePath, referrer, userAgent } = await req.json()
    
    // Get IP address from request headers
    const clientIP = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     '127.0.0.1'

    console.log('Tracking visit for IP:', clientIP)

    // Get geolocation data from IP (using a free service)
    let locationData = {
      country: null,
      city: null,
      region: null,
      latitude: null,
      longitude: null
    }

    try {
      // Using ipapi.co for geolocation (free tier allows 1000 requests/day)
      const geoResponse = await fetch(`https://ipapi.co/${clientIP}/json/`)
      if (geoResponse.ok) {
        const geoData = await geoResponse.json()
        
        if (geoData && !geoData.error) {
          locationData = {
            country: geoData.country_name || null,
            city: geoData.city || null,
            region: geoData.region || null,
            latitude: geoData.latitude ? parseFloat(geoData.latitude) : null,
            longitude: geoData.longitude ? parseFloat(geoData.longitude) : null
          }
        }
      }
    } catch (geoError) {
      console.error('Geolocation lookup failed:', geoError)
    }

    // Create a session ID (simple approach - in production, you might want something more sophisticated)
    const sessionId = `${clientIP}-${Date.now()}`

    // Insert visit data
    const { data, error } = await supabaseClient
      .from('visits')
      .insert({
        ip_address: clientIP,
        country: locationData.country,
        city: locationData.city,
        region: locationData.region,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        user_agent: userAgent,
        referrer: referrer,
        page_path: pagePath,
        session_id: sessionId,
        visit_timestamp: new Date().toISOString()
      })

    if (error) {
      console.error('Database insert error:', error)
      throw error
    }

    console.log('Visit tracked successfully:', data)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Visit tracked successfully',
        location: locationData
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error tracking visit:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to track visit',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
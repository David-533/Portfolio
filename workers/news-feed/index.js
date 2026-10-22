const TOPIC_QUERIES = {
  autonomous: ['voiture autonome', 'véhicule autonome', 'conduite autonome', 'autonomous vehicle'],
  tesla: ['Tesla conduite autonome FSD', 'Tesla FSD'],
  technology: ['lidar', 'robotaxi', 'voiture autonome lidar', 'réglementation voiture autonome'],
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
}

const jsonResponse = (payload, status = 200) => new Response(JSON.stringify(payload), {
  status,
  headers: {
    ...corsHeaders,
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
  },
})

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders })
    }

    if (request.method !== 'GET') {
      return jsonResponse({ error: 'Method not allowed' }, 405)
    }

    const requestUrl = new URL(request.url)
    const queries = TOPIC_QUERIES[requestUrl.searchParams.get('topic')]

    if (!queries) {
      return jsonResponse({ error: 'Unknown news topic' }, 400)
    }

    for (const query of queries) {
      const rssUrl = new URL('https://news.google.com/rss/search')
      rssUrl.search = new URLSearchParams({
        q: query,
        hl: 'fr',
        gl: 'FR',
        ceid: 'FR:fr',
      }).toString()

      try {
        const upstream = await fetch(rssUrl, {
          headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
          cf: { cacheTtl: 300, cacheEverything: true },
        })

        if (!upstream.ok) continue

        const rss = await upstream.text()
        if (!/<item(?:\s|>)/i.test(rss)) continue

        return new Response(rss, {
          status: 200,
          headers: {
            ...corsHeaders,
            'Cache-Control': 'public, max-age=300, s-maxage=300',
            'Content-Type': 'application/rss+xml; charset=utf-8',
          },
        })
      } catch {
        continue
      }
    }

    return jsonResponse({ error: 'No articles available from the news source' }, 502)
  },
}
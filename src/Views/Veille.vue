<template>
  <main class="watch-page">
    <header class="page-header">
      <p class="eyebrow">VEILLE TECHNOLOGIQUE</p>
      <h1>Voiture autonome</h1>
      <p class="page-intro">
        Actualités récentes sur les véhicules autonomes, leurs technologies et leur réglementation.
      </p>
    </header>

    <section class="feed-panel" aria-label="Actualités sur la voiture autonome">
      <div class="feed-toolbar">
        <div class="feed-heading">
          <div class="live-mark" :class="{ loading }" aria-hidden="true"><span></span></div>
          <div>
            <h2>Fil d’actualité</h2>
            <p>{{ lastUpdated ? `Mis à jour ${lastUpdated}` : 'Articles issus de Google Actualités' }}</p>
          </div>
        </div>

        <button class="refresh-button" type="button" :disabled="loading" @click="loadArticles">
          <svg :class="{ spinning: loading }" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 7v5h-5M4 17v-5h5" />
            <path d="M5.6 9a7 7 0 0 1 11.7-2L20 12M4 12l2.7 5a7 7 0 0 0 11.7-2" />
          </svg>
          <span>{{ loading ? 'Actualisation...' : 'Actualiser' }}</span>
        </button>
      </div>

      <div class="feed-controls">
        <div class="topic-switcher" role="group" aria-label="Sujet des actualités">
          <button
            v-for="topic in topics"
            :key="topic.id"
            type="button"
            :class="{ active: activeTopic === topic.id }"
            :aria-pressed="activeTopic === topic.id"
            @click="selectTopic(topic.id)"
          >
            {{ topic.label }}
          </button>
        </div>

        <label class="search-field">
          <span class="sr-only">Rechercher dans les articles chargés</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 4 4" /></svg>
          <input v-model.trim="searchQuery" type="search" placeholder="Rechercher dans les articles...">
        </label>
      </div>

      <p v-if="errorMessage" class="feed-message error-message" role="alert">
        <strong>Le flux est momentanément indisponible.</strong>
        {{ errorMessage }} Tu peux consulter les résultats directement sur Google Actualités.
        <a :href="googleNewsUrl" target="_blank" rel="noopener noreferrer">Voir les résultats du sujet</a>
      </p>
      <p v-else-if="loading && !articles.length" class="feed-message" role="status" aria-live="polite">
        Récupération des derniers articles...
      </p>
      <p v-else-if="!filteredArticles.length" class="feed-message">
        {{ searchQuery ? 'Aucun article ne correspond à cette recherche.' : 'Aucun article trouvé pour ce sujet.' }}
      </p>

      <div v-else class="article-list" aria-live="polite">
        <article v-for="(article, index) in filteredArticles" :key="article.link" class="article-row" :style="{ '--row-index': index }">
          <span class="article-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="article-body">
            <div class="article-meta">
              <span>{{ article.source }}</span>
              <time :datetime="article.isoDate">{{ article.displayDate }}</time>
            </div>
            <h3><a :href="article.link" target="_blank" rel="noopener noreferrer">{{ article.title }}</a></h3>
            <p v-if="article.summary" class="article-summary">{{ article.summary }}</p>
          </div>
          <a class="article-open" :href="article.link" target="_blank" rel="noopener noreferrer" :aria-label="`Lire l’article : ${article.title}`">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
        </article>
      </div>

      <footer class="feed-footer">
        <span>Source : Google Actualités</span>
        <span>Actualisation automatique toutes les 15 min</span>
      </footer>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const topics = [
  { id: 'autonomous', label: 'Voiture autonome', query: 'voiture autonome OR véhicule autonome' },
  { id: 'tesla', label: 'Tesla & conduite assistée', query: 'Tesla conduite autonome FSD' },
  { id: 'technology', label: 'Technologies & réglementation', query: 'voiture autonome lidar réglementation robotaxi' },
]

const activeTopic = ref('autonomous')
const searchQuery = ref('')
const articles = ref([])
const loading = ref(false)
const errorMessage = ref('')
const lastUpdated = ref('')
let refreshInterval
let activeRequest

const filteredArticles = computed(() => {
  const query = searchQuery.value.toLocaleLowerCase('fr')
  if (!query) return articles.value
  return articles.value.filter((article) => `${article.title} ${article.source} ${article.summary}`.toLocaleLowerCase('fr').includes(query))
})

const googleNewsUrl = computed(() => {
  const topic = topics.find((item) => item.id === activeTopic.value) || topics[0]
  return `https://news.google.com/search?q=${encodeURIComponent(topic.query)}&hl=fr&gl=FR&ceid=FR:fr`
})

const toPlainText = (value) => {
  const document = new DOMParser().parseFromString(value, 'text/html')
  return (document.body.textContent || '').replace(/\s+/g, ' ').trim()
}

const loadArticles = async () => {
  const topic = topics.find((item) => item.id === activeTopic.value) || topics[0]
  activeRequest?.abort()
  const controller = new AbortController()
  activeRequest = controller
  let timedOut = false
  const timeout = window.setTimeout(() => {
    timedOut = true
    controller.abort()
  }, 12000)
  loading.value = true
  errorMessage.value = ''

  const feedUrl = new URL('https://news.google.com/rss/search')
  feedUrl.search = new URLSearchParams({ q: topic.query, hl: 'fr', gl: 'FR', ceid: 'FR:fr' }).toString()
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl.toString())}`

  try {
    const response = await fetch(proxyUrl, { signal: controller.signal, cache: 'no-store' })
    if (!response.ok) throw new Error(`Réponse réseau ${response.status}`)

    const xmlText = await response.text()
    const xml = new DOMParser().parseFromString(xmlText, 'application/xml')
    if (xml.querySelector('parsererror')) throw new Error('Le flux reçu est illisible.')

    const items = [...xml.querySelectorAll('item')].map((item) => {
      const title = item.querySelector('title')?.textContent?.trim() || ''
      const rawLink = item.querySelector('link')?.textContent?.trim() || ''
      const description = item.querySelector('description')?.textContent || ''
      const date = new Date(item.querySelector('pubDate')?.textContent || '')
      let link = ''
      let source = item.querySelector('source')?.textContent?.trim() || ''

      try {
        const parsedLink = new URL(rawLink)
        if (parsedLink.protocol === 'https:' || parsedLink.protocol === 'http:') link = parsedLink.toString()
        if (!source && link) source = new URL(link).hostname.replace(/^www\./, '')
      } catch {
        return null
      }

      if (!title || !link) return null
      const summary = toPlainText(description)

      return {
        title,
        link,
        source: source || 'Source non précisée',
        isoDate: Number.isNaN(date.getTime()) ? '' : date.toISOString(),
        displayDate: Number.isNaN(date.getTime()) ? 'Date inconnue' : new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium' }).format(date),
        summary: summary.length > 300 ? `${summary.slice(0, 297).trimEnd()}...` : summary,
      }
    }).filter(Boolean)

    if (!items.length) throw new Error('Aucun article récent reçu pour ce sujet.')
    articles.value = items.slice(0, 12)
    lastUpdated.value = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(new Date())
  } catch (error) {
    if (activeRequest === controller) {
      errorMessage.value = timedOut
        ? 'Le service de lecture RSS ne répond pas actuellement.'
        : 'Le flux RSS ne peut pas être chargé depuis cette connexion.'
    }
  } finally {
    window.clearTimeout(timeout)
    if (activeRequest === controller) loading.value = false
  }
}

const selectTopic = (topicId) => {
  if (activeTopic.value === topicId) return
  activeTopic.value = topicId
  searchQuery.value = ''
  loadArticles()
}

onMounted(() => {
  loadArticles()
  refreshInterval = window.setInterval(loadArticles, 15 * 60 * 1000)
})

onUnmounted(() => {
  window.clearInterval(refreshInterval)
  activeRequest?.abort()
  activeRequest = null
})
</script>

<style scoped>
.watch-page {
  width: min(100%, 1180px);
  min-height: 100vh;
  margin: 0 auto;
  padding: clamp(36px, 5vw, 64px) clamp(16px, 4vw, 48px) 72px;
  color: #f4f5f4;
}

.page-header {
  margin-bottom: 30px;
}

.eyebrow {
  margin: 0 0 10px;
  color: #9ebbb3;
  font: 600 11px 'Roboto Mono', monospace;
  letter-spacing: 1px;
}

.page-header h1 {
  margin: 0;
  color: #fff;
  font: 600 30px/1.25 'Roboto Mono', monospace;
}

.page-intro {
  max-width: 680px;
  margin: 12px 0 0;
  color: #aeb7b3;
  font: 15px/1.6 Arial, sans-serif;
}

.feed-panel {
  border: 1px solid rgba(194, 208, 202, 0.16);
  border-radius: 7px;
  background: rgba(13, 17, 16, 0.76);
  overflow: hidden;
}

.feed-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(194, 208, 202, 0.14);
}

.feed-heading {
  display: flex;
  align-items: center;
  gap: 13px;
}

.live-mark {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(158, 187, 179, 0.24);
  border-radius: 50%;
}

.live-mark span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #9ebbb3;
  box-shadow: 0 0 10px rgba(158, 187, 179, 0.5);
}

.live-mark.loading span {
  animation: pulse 900ms ease-in-out infinite alternate;
}

.feed-heading h2 {
  margin: 0;
  color: #f2f5f3;
  font: 600 15px 'Roboto Mono', monospace;
}

.feed-heading p {
  margin: 5px 0 0;
  color: #8f9a94;
  font: 12px Arial, sans-serif;
}

.refresh-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 12px;
  border: 1px solid rgba(194, 208, 202, 0.22);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.025);
  color: #d3ddd8;
  font: 12px Arial, sans-serif;
  cursor: pointer;
  transition: border-color 160ms ease, background 160ms ease;
}

.refresh-button:hover:not(:disabled) {
  border-color: #9ebbb3;
  background: rgba(158, 187, 179, 0.1);
}

.refresh-button:disabled {
  cursor: wait;
  opacity: 0.65;
}

.refresh-button svg,
.article-open svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

.refresh-button svg.spinning {
  animation: rotate 800ms linear infinite;
}

.feed-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(194, 208, 202, 0.14);
}

.topic-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.topic-switcher button {
  min-height: 34px;
  padding: 0 11px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  color: #aab4af;
  font: 12px Arial, sans-serif;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
}

.topic-switcher button:hover,
.topic-switcher button.active {
  border-color: rgba(158, 187, 179, 0.28);
  background: rgba(158, 187, 179, 0.1);
  color: #e4ece8;
}

.search-field {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 1 260px;
  min-width: 170px;
  height: 36px;
  padding: 0 10px;
  border: 1px solid rgba(194, 208, 202, 0.18);
  border-radius: 4px;
  color: #9ca8a2;
}

.search-field:focus-within {
  border-color: #9ebbb3;
}

.search-field svg {
  width: 15px;
  height: 15px;
  flex: 0 0 auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
}

.search-field input {
  min-width: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #f4f5f4;
  font: 12px Arial, sans-serif;
}

.search-field input::placeholder {
  color: #7f8984;
}

.article-list {
  padding: 0 24px;
}

.article-row {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 34px;
  align-items: start;
  gap: 14px;
  padding: 22px 0;
  border-bottom: 1px solid rgba(194, 208, 202, 0.12);
  animation: row-enter 380ms ease both;
  animation-delay: calc(min(var(--row-index, 0), 7) * 45ms);
}

.article-row:last-child {
  border-bottom: 0;
}

.article-number {
  padding-top: 2px;
  color: #84918a;
  font: 11px 'Roboto Mono', monospace;
}

.article-body {
  min-width: 0;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px 12px;
  color: #9ebbb3;
  font: 10px 'Roboto Mono', monospace;
}

.article-meta time {
  color: #8e9993;
}

.article-body h3 {
  margin: 9px 0 0;
  color: #f5f6f5;
  font: 600 16px/1.5 Arial, sans-serif;
}

.article-body h3 a {
  color: inherit;
  text-decoration: none;
  text-decoration-color: rgba(158, 187, 179, 0.4);
  text-underline-offset: 3px;
}

.article-body h3 a:hover {
  color: #c8d8d0;
  text-decoration: underline;
}

.article-summary {
  margin: 8px 0 0;
  color: #a8b0ac;
  font: 13px/1.6 Arial, sans-serif;
}

.article-open {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(194, 208, 202, 0.18);
  border-radius: 4px;
  color: #aebbb4;
  transition: border-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.article-open:hover {
  transform: translate(1px, -1px);
  border-color: #9ebbb3;
  color: #fff;
}

.feed-message {
  margin: 0;
  padding: 38px 24px;
  color: #aeb7b3;
  font: 14px/1.6 Arial, sans-serif;
  text-align: center;
}

.error-message strong {
  display: block;
  margin-bottom: 6px;
  color: #e2c3b6;
}

.error-message a {
  display: table;
  margin: 12px auto 0;
  color: #d2ded9;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.feed-footer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 24px;
  border-top: 1px solid rgba(194, 208, 202, 0.14);
  color: #7f8984;
  font: 10px 'Roboto Mono', monospace;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes pulse {
  to { opacity: 0.35; transform: scale(0.75); }
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

@keyframes row-enter {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 760px) {
  .watch-page {
    padding: 34px 16px 48px;
  }

  .feed-toolbar,
  .feed-controls {
    align-items: flex-start;
    flex-direction: column;
  }

  .feed-toolbar {
    padding: 18px 16px;
  }

  .feed-controls {
    padding: 14px 16px;
  }

  .topic-switcher {
    width: 100%;
  }

  .topic-switcher button {
    padding: 0 9px;
  }

  .search-field {
    flex: 0 0 auto;
    width: 100%;
  }

  .article-list {
    padding: 0 16px;
  }

  .article-row {
    grid-template-columns: 26px minmax(0, 1fr) 30px;
    gap: 9px;
    padding: 19px 0;
  }

  .article-body h3 {
    font-size: 14px;
  }

  .feed-footer {
    flex-direction: column;
    padding: 13px 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
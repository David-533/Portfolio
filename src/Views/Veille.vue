<template>
  <div class="veille-page">
    <!-- ===== INTRODUCTION ===== -->
    <section class="section" id="veilletechnologique">
      <h2>Veille Technologique</h2>

      <div class="intro-grid">
        <div class="intro-card">
          <h3>🔍 Qu'est-ce que la veille ?</h3>
          <p>
            La veille technologique consiste à surveiller en permanence les évolutions
            d'un domaine professionnel, à collecter les informations pertinentes
            et à les partager pour rester à jour sur les innovations et tendances.
          </p>
        </div>

        <div class="intro-card">
          <h3>🛠️ Mon outil de veille</h3>
          <p>
            J'utilise <strong>Google Alertes</strong>, un service qui envoie des
            notifications selon les sujets choisis et redirige vers les pages
            web correspondantes.
          </p>
        </div>

        <div class="intro-card highlight">
          <h3>🚗 Sujet : Voiture Autonome</h3>
          <p>
            Un véhicule autonome est un véhicule automatisé, capable de se déplacer
            en toute sécurité sans intervention d'un conducteur, grâce à l'intelligence
            artificielle et à de nombreux capteurs embarqués.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== ARTICLES ===== -->
    <section class="section" id="articles-veille">
      <h2>Articles récents</h2>

      <div class="articles-grid">
        <article
          class="article-card"
          v-for="(article, index) in articles"
          :key="article.titre"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="article-image-container">
            <img
              :src="article.image"
              :alt="article.titre"
              loading="lazy"
              class="article-image"
            />
          </div>

          <div class="article-body">
            <div class="article-meta">
              <span class="meta-date">📅 {{ article.date }}</span>
              <span class="meta-source">{{ article.source }}</span>
            </div>

            <h3>{{ article.titre }}</h3>
            <p class="article-resume">{{ article.resume }}</p>

            <a
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-lire"
            >
              Lire l'article →
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "VeilleTechnologique",
  data() {
    return {
      articles: [
        {
          titre: "Même Nvidia est impressionné par la conduite autonome de Tesla",
          date: "4 janvier 2026",
          source: "rouleur-electrique.fr",
          resume: "Un expert de Nvidia affirme que le FSD 14.2.2 de Tesla conduit désormais comme un humain, au point d'être indiscernable, tout en alertant sur la dépendance croissante à ces technologies.",
          image: "https://www.presse-citron.net/app/uploads/2024/04/tesla-unsplash-carter-baran.jpg",
          url: "https://rouleur-electrique.fr/un-expert-nvidia-impressionne-par-la-conduite-autonome-tesla-impossible-de-distinguer-lia-de-lhumain/",
        },
        {
          titre: "Hyundai vise l'autonomie totale pour rattraper Tesla et Waymo",
          date: "2 janvier 2026",
          source: "rouleur-electrique.fr",
          resume: "Hyundai teste une Ioniq 6 entièrement autonome, multiplie les partenariats (Motional, Waymo) et prépare une stratégie IA/robotique pour devenir un acteur majeur du secteur.",
          image: "https://www.presse-citron.net/app/uploads/2024/10/hyundai-wemo.jpg",
          url: "https://rouleur-electrique.fr/hyundai-vise-lautonomie-totale-pour-rattraper-tesla-et-waymo/#google_vignette",
        },
        {
          titre: "La conduite autonome Tesla FSD v14 déçoit les premières attentes",
          date: "17 octobre 2025",
          source: "rouleur-electrique.fr",
          resume: "La mise à jour FSD v14 apporte des progrès dans l'autonomie, mais reste loin des promesses initiales : interventions fréquentes et limites matérielles émergent.",
          image: "https://rouleur-electrique.fr/wp-content/uploads/2025/10/La-conduite-autonome-Tesla-FSD-v14-decoit-les-premieres-a.jpg",
          url: "https://rouleur-electrique.fr/la-conduite-autonome-tesla-fsd-v14-decoit-les-premieres-attentes/",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ============================================
   DESIGN TOKENS
   ============================================ */
:root {
  --accent-cyan: #00ffff;
  --accent-pink: #ff00c8;
  --bg-card: #1a1a1a;
  --bg-page: #000;
  --card-radius: 12px;
}

/* ============================================
   PAGE
   ============================================ */
.veille-page {
  background: var(--bg-page);
  color: #fff;
  font-family: 'Roboto', sans-serif;
}

/* ============================================
   SECTIONS
   ============================================ */
.section {
  padding: 100px 20px 60px;
  max-width: 1100px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  color: var(--accent-cyan);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.67);
  margin-bottom: 40px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  letter-spacing: 1px;
  animation: fadeInDown 1s ease;
}

/* ============================================
   INTRO CARDS (3 blocs explicatifs)
   ============================================ */
.intro-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.intro-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: var(--card-radius);
  padding: 24px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.intro-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  border-color: rgba(0, 255, 255, 0.3);
}

.intro-card.highlight {
  border-color: rgba(0, 255, 255, 0.35);
  background: linear-gradient(145deg, rgba(0, 255, 255, 0.05), var(--bg-card));
}

.intro-card h3 {
  font-size: 16px;
  margin-bottom: 12px;
  color: var(--accent-cyan);
  font-family: 'Segoe UI', sans-serif;
}

.intro-card p {
  color: #bbb;
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}

.intro-card strong {
  color: var(--accent-cyan);
}

/* ============================================
   ARTICLES GRID
   ============================================ */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* ============================================
   ARTICLE CARD
   ============================================ */
.article-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: var(--card-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.08);
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.article-card:hover {
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.25);
  border-color: rgba(0, 255, 255, 0.4);
}

/* ============================================
   IMAGE
   ============================================ */
.article-image-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: #111;
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.article-card:hover .article-image {
  transform: scale(1.06);
}

/* ============================================
   BODY
   ============================================ */
.article-body {
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
}

.meta-date {
  color: #888;
}

.meta-source {
  color: var(--accent-cyan);
  background: rgba(0, 255, 255, 0.08);
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.article-card h3 {
  font-size: 15px;
  font-family: 'Segoe UI', sans-serif;
  margin-bottom: 10px;
  line-height: 1.4;
  color: #fff;
}

.article-resume {
  color: #999;
  font-size: 13px;
  line-height: 1.6;
  margin: 0 0 16px;
  flex: 1;
}

/* ============================================
   BOUTON LIRE
   ============================================ */
.btn-lire {
  display: inline-block;
  padding: 8px 18px;
  border: 1px solid var(--accent-cyan);
  border-radius: 8px;
  color: var(--accent-cyan);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  align-self: flex-start;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-lire:hover {
  background: var(--accent-cyan);
  color: #111;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }

  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .section {
    padding: 80px 15px 40px;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .article-card,
  h2 {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .article-card,
  .article-image,
  .intro-card,
  .btn-lire {
    transition: none;
  }
}
</style>

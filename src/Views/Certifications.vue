<template>
  <section id="mescertifications" class="section">
    <header class="page-header">
      <p class="eyebrow">FORMATION CONTINUE</p>
      <h2>Mes Certifications</h2>
      <p class="intro">Les formations et compétences validées au fil de mon parcours.</p>
    </header>

    <div class="toolbar" role="search" aria-label="Rechercher une certification">
      <label class="search-field">
        <span class="sr-only">Rechercher par nom, organisme ou année</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>
        <input v-model.trim="query" type="search" placeholder="Rechercher une certification...">
        <button v-if="query" class="clear-search" type="button" aria-label="Effacer la recherche" @click="query = ''">
          &times;
        </button>
      </label>

      <label class="sort-field">
        <span>Trier</span>
        <select v-model="sortOrder" aria-label="Trier les certifications">
          <option value="newest">Plus récentes</option>
          <option value="oldest">Plus anciennes</option>
          <option value="name">Nom A à Z</option>
        </select>
      </label>
    </div>

    <div class="filter-row" aria-label="Filtrer par organisme">
      <button
        v-for="source in sources"
        :key="source"
        class="filter-button"
        :class="{ active: activeSource === source }"
        type="button"
        :aria-pressed="activeSource === source"
        @click="activeSource = source"
      >
        {{ source }}
        <span>{{ source === 'Toutes' ? certifications.length : certifications.filter(certif => certif.source === source).length }}</span>
      </button>
    </div>

    <p class="result-count" aria-live="polite">
      {{ filteredCertifications.length }} certification{{ filteredCertifications.length > 1 ? 's' : '' }}
      <span v-if="activeSource !== 'Toutes'">chez {{ activeSource }}</span>
      <span v-if="query">pour « {{ query }} »</span>
    </p>

    <div v-if="filteredCertifications.length" class="certif-grid">
      <article
        v-for="(certif, index) in filteredCertifications"
        :key="certif.nom"
        class="certif-card"
        :style="{ '--card-index': index }"
      >
        <span class="card-mark" aria-hidden="true">✓</span>
        <h3>{{ certif.nom }}</h3>
        <p class="source">{{ certif.source }} • {{ certif.annee }}</p>
      </article>
    </div>
    <div v-else class="empty-state">
      <span class="empty-mark" aria-hidden="true">⌕</span>
      <h3>Aucun résultat</h3>
      <p>Essaie un autre terme ou réinitialise les filtres.</p>
      <button type="button" class="reset-button" @click="resetFilters">Réinitialiser</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Certifications",
  data() {
    return {
      query: "",
      activeSource: "Toutes",
      sortOrder: "newest",
      certifications: [
        { nom: "Requêtez une base de donnée avec SQL", source: "OpenClassrooms", annee: "2025" },
        { nom: "Apprenez les bases du langage Python", source: "OpenClassrooms", annee: "2025" },
        { nom: "Créez votre site web avec HTML5 et CSS3", source: "OpenClassrooms", annee: "2025" },
        { nom: "Utiliser ChatGPT pour améliorer votre productivité", source: "OpenClassrooms", annee: "2025" },
        { nom: "PIX", source: "PIX", annee: "2023" },
        { nom: "Certification ANSSI", source: "ANSSI", annee: "2025" },
        { nom: "Apprenez à programmer avec JavaScript", source: "OpenClassrooms", annee: "2025" },
        { nom: "Débutez avec React", source: "OpenClassrooms", annee: "2025" },
        { nom: "Objectif IA : initiez-vous à l'intelligence artificielle", source: "OpenClassrooms", annee: "2025" },
        { nom: "Decouvrez l'univers de la cybersécurité", source: "OpenClassrooms", annee: "2025" },
        { nom: "Apprenez à utiliser la ligne de commande dans un terminal", source: "OpenClassrooms", annee: "2025" },
      ]
    };
  },
  computed: {
    sources() {
      return ["Toutes", ...new Set(this.certifications.map((certif) => certif.source))];
    },
    filteredCertifications() {
      const term = this.query.toLocaleLowerCase("fr");

      return this.certifications
        .filter((certif) => this.activeSource === "Toutes" || certif.source === this.activeSource)
        .filter((certif) => `${certif.nom} ${certif.source} ${certif.annee}`.toLocaleLowerCase("fr").includes(term))
        .sort((first, second) => {
          if (this.sortOrder === "name") return first.nom.localeCompare(second.nom, "fr");
          const yearDifference = Number(first.annee) - Number(second.annee);
          return this.sortOrder === "oldest" ? yearDifference : -yearDifference;
        });
    },
  },
  methods: {
    resetFilters() {
      this.query = "";
      this.activeSource = "Toutes";
      this.sortOrder = "newest";
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');

/* --- Section principale --- */
.section {
  position: relative;
  isolation: isolate;
  text-align: left;
  padding: clamp(32px, 5vw, 56px) clamp(16px, 4vw, 48px) 60px;
  background-color: #050708;
  color: white;
  font-family: 'Roboto Mono', monospace;
  min-height: 100vh;
  min-height: 100svh;
}

.section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 15% 20%, rgba(91, 153, 137, 0.22), transparent 42%),
    radial-gradient(ellipse at 88% 48%, rgba(143, 105, 133, 0.15), transparent 43%),
    radial-gradient(ellipse at 48% 100%, rgba(91, 110, 151, 0.15), transparent 45%),
    #050708;
  background-size: 160% 160%;
  animation: neonBackground 12s ease-in-out infinite alternate;
}

.page-header,
.toolbar,
.filter-row,
.result-count,
.certif-grid,
.empty-state {
  width: min(100%, 1100px);
  margin-right: auto;
  margin-left: auto;
}

.page-header {
  margin-bottom: 30px;
}

.eyebrow {
  margin: 0 0 10px;
  color: #9ebbb3;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
}

.page-header h2 {
  font-size: 30px;
  color: #f4f4f4;
  margin: 0;
  animation: fadeInDown 1s ease;
}

.intro {
  margin: 12px 0 0;
  color: #a5a5a5;
  font-family: Arial, sans-serif;
  font-size: 15px;
  line-height: 1.6;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.search-field {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  flex: 1;
  height: 46px;
  padding: 0 14px;
  border: 1px solid #363b3a;
  border-radius: 6px;
  background: #111413;
  color: #a5b0ad;
  transition: border-color 180ms ease, box-shadow 180ms ease;
}

.search-field:focus-within {
  border-color: #9ebbb3;
  box-shadow: 0 0 0 3px #9ebbb31a;
}

.search-field svg {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
}

.search-field input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 13px;
}

.search-field input::placeholder {
  color: #818985;
}

.clear-search {
  border: 0;
  background: transparent;
  color: #b8c2bf;
  font-size: 22px;
  cursor: pointer;
}

.sort-field {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #a5a5a5;
  font-family: Arial, sans-serif;
  font-size: 13px;
}

.sort-field select {
  min-height: 42px;
  padding: 0 28px 0 10px;
  border: 1px solid #363b3a;
  border-radius: 6px;
  background: #111413;
  color: #f4f4f4;
  font: inherit;
  cursor: pointer;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 2px 0 8px;
}

.filter-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  flex: 0 0 auto;
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid #343a38;
  border-radius: 5px;
  background: #101211;
  color: #c5cbc8;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease, color 160ms ease;
}

.filter-button span {
  color: #8e9894;
  font-size: 11px;
}

.filter-button:hover,
.filter-button.active {
  border-color: #9ebbb3;
  background: #9ebbb316;
  color: #d2ded9;
}

.result-count {
  margin-top: 10px;
  margin-bottom: 16px;
  color: #929b97;
  font-family: Arial, sans-serif;
  font-size: 12px;
}

.result-count span::before {
  content: " — ";
}

.result-count span + span::before {
  content: " · ";
}

/* --- Grille des certifications --- */
.certif-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 25px;

  justify-content: start;
  justify-items: stretch;
  align-items: start;

  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

/* Tablettes */
@media (max-width: 1024px) {
  .certif-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Mobiles */
@media (max-width: 600px) {
  .certif-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0;
  }
}

/* --- Carte de certification --- */
.certif-card {
  min-height: 170px;
  background: #111413;
  border: 1px solid #303735;
  border-radius: 6px;
  padding: 20px;
  width: 100%;
  max-width: none;
  color: white;
  text-align: left;
  position: relative;
  transition: transform 200ms ease, border-color 200ms ease, background 200ms ease;
  opacity: 0;
  animation: fadeInUp 450ms both;
  animation-delay: calc(var(--card-index, 0) * 45ms);
}

.card-mark {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  margin-bottom: 18px;
  border: 1px solid #9ebbb155;
  border-radius: 50%;
  color: #9ebbb3;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.certif-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: #9ebbb3;
  opacity: 0.5;
  transition: opacity 200ms ease;
}

/* Effet au survol */
.certif-card:hover {
  transform: translateY(-4px);
  border-color: #9ebbb3aa;
  background: #151a18;
}

.certif-card:hover::before {
  opacity: 1;
}

/* --- Texte des cartes --- */
.certif-card h3 {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 12px;
}

.certif-card .source {
  margin: 0;
  font-size: 13px;
  color: #9da8a4;
}

.empty-state {
  padding: 48px 16px;
  border: 1px dashed #3a4240;
  border-radius: 6px;
  text-align: center;
  color: #a5aeaa;
}

.empty-mark {
  display: block;
  margin-bottom: 12px;
  color: #9ebbb3;
  font-size: 34px;
}

.empty-state h3 {
  margin: 0 0 8px;
  color: #f4f4f4;
  font-size: 17px;
}

.empty-state p {
  margin: 0 0 18px;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.reset-button {
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid #9ebbb3;
  border-radius: 5px;
  background: transparent;
  color: #d2ded9;
  font: inherit;
  cursor: pointer;
}

.reset-button:hover {
  background: #9ebbb316;
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

/* --- Animations --- */
@keyframes fadeInUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeInDown {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes neonBackground {
  0% { background-position: 0% 0%; }
  50% { background-position: 60% 40%; }
  100% { background-position: 100% 100%; }
}

@media (max-width: 640px) {
  .toolbar {
    align-items: stretch;
    flex-direction: column;
    gap: 10px;
  }

  .sort-field {
    justify-content: space-between;
  }

  .sort-field select {
    flex: 1;
    max-width: 220px;
  }

  .certif-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .certif-card {
    min-height: 145px;
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

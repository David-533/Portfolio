<template>
  <div class="section" id="mescompetence">
    <header class="page-header">
      <p class="eyebrow">BOÎTE À OUTILS</p>
      <h2>Mes Compétences</h2>
      <p class="intro">Technologies, langages et outils utilisés dans mes projets.</p>
    </header>

    <div class="toolbar" role="search" aria-label="Rechercher une compétence">
      <label class="search-field">
        <span class="sr-only">Rechercher une compétence</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>
        <input v-model.trim="query" type="search" placeholder="Rechercher une compétence...">
        <button v-if="query" class="clear-search" type="button" aria-label="Effacer la recherche" @click="query = ''">&times;</button>
      </label>

      <button
        class="motion-button"
        type="button"
        :aria-pressed="isPaused"
        :aria-label="isPaused ? 'Reprendre le défilement' : 'Mettre le défilement en pause'"
        @click="isPaused = !isPaused"
      >
        <svg v-if="!isPaused" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14" /></svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z" /></svg>
        <span>{{ isPaused ? 'Reprendre' : 'Pause' }}</span>
      </button>
    </div>

    <div class="filter-row" aria-label="Filtres">
      <button class="filter-button active" type="button" :aria-pressed="true" @click="resetFilters">
        Toutes <span>{{ filteredSkills.length }}</span>
      </button>
    </div>

    <p class="result-count" aria-live="polite">
      {{ filteredSkills.length }} compétence{{ filteredSkills.length > 1 ? 's' : '' }}
      <span v-if="query">pour « {{ query }} »</span>
    </p>

    <div
      v-if="filteredSkills.length"
      class="marquee"
      :class="{ paused: isPaused, 'single-result': filteredSkills.length === 1 }"
    >
      <div class="marquee-track">
        <div class="marquee-group" role="list" aria-label="Compétences">
          <article v-for="skill in filteredSkills" :key="skill.name" class="skill-card" role="listitem">
            <span class="skill-icon"><img :src="skill.icon" alt="" loading="lazy" draggable="false"></span>
            <h3>{{ skill.name }}</h3>
          </article>
        </div>
        <div v-if="filteredSkills.length > 1" class="marquee-group" role="list" aria-hidden="true">
          <article v-for="skill in filteredSkills" :key="`${skill.name}-copy`" class="skill-card">
            <span class="skill-icon"><img :src="skill.icon" alt="" loading="lazy" draggable="false"></span>
            <h3>{{ skill.name }}</h3>
          </article>
        </div>
      </div>
    </div>
    <div v-else class="empty-state">
      <span class="empty-mark" aria-hidden="true">⌕</span>
      <h3>Aucune compétence trouvée</h3>
      <p>Essaie un autre terme ou réinitialise les filtres.</p>
      <button type="button" class="reset-button" @click="resetFilters">Réinitialiser</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MesCompetences",
  data() {
    return {
      query: "",
      isPaused: false,
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
        { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ]
    };
  },
  mounted() {
    this.isPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },
  computed: {
    filteredSkills() {
      const term = this.query.toLocaleLowerCase("fr");
      if (!term) return this.skills;

      const exactMatches = this.skills.filter((skill) => skill.name.toLocaleLowerCase("fr") === term);
      if (exactMatches.length) return exactMatches;

      return this.skills.filter((skill) => skill.name.toLocaleLowerCase("fr").includes(term));
    },
  },
  methods: {
    resetFilters() {
      this.query = "";
    },
  }
};
</script>

<style scoped>
.section {
  padding: clamp(32px, 5vw, 56px) clamp(16px, 4vw, 48px);
  text-align: center;
  color: #fff;
  background: #000;
  scroll-margin-top: 180px;
  font-family: 'Roboto Mono', monospace;
}

/* === Grille === */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 25px;
  justify-items: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

/* === Carte === */
.skill-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
  width: min(100%, 130px);
  aspect-ratio: 1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.8s forwards;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.08);
  border-color: #00ffff;
  box-shadow: 0 0 25px #00ffff77;
}

.skill-card img {
  width: 55px;
  height: 55px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px #00ffff44);
}

.skill-card p {
  margin-top: 8px;
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 0 8px #00ffff55;
}

/* === Animations === */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* === Responsive === */

/* Tablettes */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}

/* Mobiles */
@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .skill-card {
    width: min(100%, 120px);
  }

  .skill-card img {
    width: 45px;
    height: 45px;
  }
}

.section {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  text-align: left;
  background: #050708;
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
.empty-state {
  width: min(100%, 1100px);
  margin-right: auto;
  margin-left: auto;
}

.page-header {
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 10px;
  color: #9ebbb3;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
}

.page-header h2 {
  margin: 0;
  color: #fff;
  font-size: 30px;
  text-shadow: none;
  animation: none;
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
  gap: 12px;
  margin-bottom: 16px;
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

.motion-button,
.filter-button,
.reset-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 13px;
  border: 1px solid #343a38;
  border-radius: 5px;
  background: #101211;
  color: #c5cbc8;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease, color 160ms ease;
}

.motion-button:hover,
.filter-button:hover,
.filter-button.active,
.reset-button:hover {
  border-color: #9ebbb3;
  background: #9ebbb316;
  color: #d2ded9;
}

.motion-button svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 2px 0 8px;
}

.filter-button {
  min-height: 36px;
}

.filter-button span {
  color: #8e9894;
  font-size: 11px;
}

.result-count {
  margin-top: 10px;
  margin-bottom: 18px;
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

.marquee {
  position: relative;
  width: min(100%, 1100px);
  margin: 0 auto;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
}

.marquee-track,
.marquee-group {
  display: flex;
  width: max-content;
}

.marquee-track {
  animation: scrollSkills 30s linear infinite;
  will-change: transform;
}

.marquee.paused .marquee-track {
  animation-play-state: paused;
}

.marquee-group {
  flex: 0 0 auto;
  gap: 16px;
  padding-right: 16px;
}

.marquee.single-result .marquee-track {
  width: 100%;
  justify-content: flex-start;
  animation: none;
}

.marquee.single-result {
  padding-left: 20px;
  -webkit-mask-image: none;
  mask-image: none;
}

.skill-card {
  display: flex;
  flex: 0 0 150px;
  flex-direction: column;
  align-items: flex-start;
  width: 150px;
  min-height: 174px;
  aspect-ratio: auto;
  padding: 16px;
  border: 1px solid #303735;
  border-radius: 6px;
  background: #111413;
  box-shadow: none;
  opacity: 1;
  transform: none;
  animation: none;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: #9ebbb3aa;
  background: #151a18;
  box-shadow: none;
}

.skill-icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  margin-bottom: 16px;
  border: 1px solid #9ebbb133;
  border-radius: 6px;
  background: #9ebbb30d;
}

.skill-icon img {
  width: 34px;
  height: 34px;
  object-fit: contain;
  filter: none;
}

.skill-card h3 {
  margin: auto 0 6px;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
}

.skill-card p {
  margin: 0;
  color: #929b97;
  font-family: Arial, sans-serif;
  font-size: 11px;
  text-shadow: none;
}

.empty-state {
  padding: 44px 16px;
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
  border-color: #9ebbb3;
  color: #d2ded9;
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

@keyframes scrollSkills {
  to { transform: translateX(-50%); }
}

@keyframes neonBackground {
  0% { background-position: 0% 0%; }
  50% { background-position: 60% 40%; }
  100% { background-position: 100% 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .section::before {
    animation: none;
  }
}

@media (max-width: 600px) {
  .toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .motion-button {
    align-self: flex-start;
  }

  .marquee-group {
    gap: 12px;
    padding-right: 12px;
  }

  .skill-card {
    flex-basis: 136px;
    width: 136px;
    min-height: 160px;
  }
}

</style>


<template>
  <section id="mescompetence" class="section">
    <h2>Mes Compétences</h2>
    <p class="section-subtitle">Technologies & outils que je maîtrise</p>

    <div class="skills-grid">
      <div
        v-for="(skill, index) in skills"
        :key="skill.name"
        class="skill-card"
        :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
      >
        <img
          class="skill-icon"
          :src="skill.icon"
          :alt="skill.name"
          loading="lazy"
          decoding="async"
          width="52"
          height="52"
        />
        <span class="skill-label">{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "HTML", icon: "https://img.icons8.com/color/200/html-5.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/200/css3.png" },
  { name: "JavaScript", icon: "https://img.icons8.com/color/200/javascript--v1.png" },
  { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
  { name: "React", icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
  { name: "Vite", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
  { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
  { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png" },
  { name: "Linux", icon: "https://img.icons8.com/color/200/linux--v1.png" },
  { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Vue.js", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  { name: "GitHub", icon: "https://img.icons8.com/color/200/github--v1.png" },
];
</script>

<style scoped>
/* ============================================
   DESIGN TOKENS
   ============================================ */
:root {
  --accent-cyan: #00ffff;
  --accent-cyan-dim: rgba(0, 255, 255, 0.3);
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-radius: 15px;
}

/* ============================================
   SECTION
   ============================================ */
.section {
  text-align: center;
  padding: 120px 20px 60px;
  background-color: black;
  color: white;
  font-family: 'Roboto Mono', monospace;
  min-height: 100vh;
}

h2 {
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 12px;
  text-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
  animation: fadeInDown 1s ease;
  letter-spacing: 1px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  margin-bottom: 50px;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: fadeInDown 1s ease 0.15s both;
}

/* ============================================
   GRILLE
   ============================================ */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  gap: 22px;
  justify-items: center;
  align-items: start;
  max-width: 900px;
  margin: 0 auto;
}

/* ============================================
   CARTE
   ============================================ */
.skill-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--accent-cyan-dim);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: var(--card-radius);
  padding: 28px 16px 22px;
  width: 100%;
  max-width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: default;
  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;

  /* Animation d'entrée — delay dynamique via :style */
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

/* Ligne lumineuse animée en haut de la carte */
.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--accent-cyan), #00e5ff, var(--accent-cyan));
  background-size: 200% 100%;
  animation: glowLine 4s linear infinite;
  border-radius: var(--card-radius) var(--card-radius) 0 0;
  will-change: background-position;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: rgba(0, 255, 255, 0.6);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

/* ============================================
   ICONE
   ============================================ */
.skill-icon {
  width: 52px;
  height: 52px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.25));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.15);
  filter: drop-shadow(0 0 14px rgba(0, 255, 255, 0.5));
}

/* ============================================
   LABEL
   ============================================ */
.skill-label {
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.skill-card:hover .skill-label {
  color: var(--accent-cyan);
  text-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeInUp {
  from { transform: translateY(40px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

@keyframes fadeInDown {
  from { transform: translateY(-30px); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
}

@keyframes glowLine {
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, minmax(140px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .section {
    padding: 80px 16px 50px;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .skill-card::before,
  h2,
  .section-subtitle {
    animation: none;
    opacity: 1;
  }

  .skill-card {
    transition: none;
  }
}
</style>






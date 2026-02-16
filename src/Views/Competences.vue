<template>
  <section class="section" id="mescompetence">
    <h2 class="section-title">Mes Compétences</h2>
    <p class="section-subtitle">Technologies & outils que je maîtrise</p>

    <div class="skills-grid">
      <div
        v-for="(skill, index) in skills"
        :key="skill.name"
        class="skill-card"
        :style="{ animationDelay: `${index * 0.06}s` }"
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
  { name: "GitLab", icon: "https://img.icons8.com/color/200/gitlab.png" },
];
</script>

<style scoped>
/* ─── Section ─── */
.section {
  padding: 110px 30px 80px;
  text-align: center;
  color: #fff;
  background: #0a0a0f;
  position: relative;
}

.section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 600px 400px at 20% 20%, rgba(99, 102, 241, 0.08), transparent),
    radial-gradient(ellipse 500px 350px at 80% 70%, rgba(16, 185, 129, 0.06), transparent);
  pointer-events: none;
}

/* ─── Title ─── */
.section-title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #10b981);
  margin: 14px auto 0;
  border-radius: 2px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.95rem;
  margin-bottom: 50px;
  font-weight: 400;
  letter-spacing: 0.03em;
}

/* ─── Grid ─── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  max-width: 820px;
  margin: 0 auto;
}

/* ─── Card ─── */
.skill-card {
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 28px 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: default;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  /* Staggered entrance animation */
  opacity: 0;
  transform: translateY(24px);
  animation: fadeInUp 0.5s ease forwards;
}

.skill-card:hover {
  transform: translateY(-6px) scale(1.03);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow:
    0 8px 32px rgba(99, 102, 241, 0.12),
    0 0 0 1px rgba(99, 102, 241, 0.1);
}

/* Glow effect */
.skill-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 17px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(16, 185, 129, 0.2));
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: -1;
  filter: blur(12px);
}

.skill-card:hover::before {
  opacity: 1;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── Icon ─── */
.skill-icon {
  width: 52px;
  height: 52px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.12);
  filter: drop-shadow(0 4px 12px rgba(99, 102, 241, 0.25));
}

/* ─── Label ─── */
.skill-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-label {
  color: #fff;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .section {
    padding: 80px 16px 60px;
  }
}
</style>






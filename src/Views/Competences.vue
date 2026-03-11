<template>
  <div class="section" id="mescompetence">
    <h2>Mes Compétences</h2>
    <div class="skills-grid">
      <div
        class="skill-card"
        v-for="(skill, index) in skills"
        :key="index"
        :style="{ animationDelay: (index * 0.1) + 's' }"
      >
        <img :src="skill.icon" :alt="skill.name" />
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MesCompetences",
  data() {
    return {
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
  }
};
</script>

<style scoped>
.section {
  padding: 140px 40px 80px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffffaa;
  margin-bottom: 60px;
  font-size: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Grille */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;
}

/* Carte */
.skill-card {
  background: #141414;
  border: 1px solid #ffffff0f;
  width: 110px;
  height: 110px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.3s ease, border-color 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: #00ffff33;
}

.skill-card img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.skill-card p {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #aaa;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 480px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
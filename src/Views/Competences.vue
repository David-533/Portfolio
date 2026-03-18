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
  padding-top: 180px;
  padding-left: 120px; /* léger décalage vers la droite */
  padding-right: 80px;
  padding-bottom: 60px;
  text-align: center;
  color: #fff;
  background: #000;
  scroll-margin-top: 180px;
  font-family: 'Roboto Mono', monospace;
}

h2 {
  color: #00ffff;
  text-shadow: 0 0 15px #00ffffaa;
  margin-bottom: 40px;
  font-size: 30px;
  letter-spacing: 1px;
  animation: fadeInDown 1s ease;
}

/* === Grille === */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  width: 110px;
  height: 110px;
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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
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
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobiles */
@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .skill-card {
    width: 100px;
    height: 100px;
  }

  .skill-card img {
    width: 45px;
    height: 45px;
  }
}
</style>


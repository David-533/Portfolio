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
        { name: "HTML", icon: "https://img.icons8.com/color/200/html-5.png" },
        { name: "CSS", icon: "https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg" },
        { name: "JavaScript", icon: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
        { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
        { name: "React", icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
        { name: "Vite", icon: "https://cambridge-intelligence.com/wp-content/uploads/2024/07/Vite-official-logo.png" },
        { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
        { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png" },
        { name: "Linux", icon: "https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png" },
        { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Vue", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
        { name: "GitLab", icon: "https://avatars.slack-edge.com/2020-11-25/1527503386626_319578f21381f9641cd8_512.png" },
        { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
        { name: "Node.js", icon: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" },
        { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
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




<template>
  <div class="section" id="mescompetence">
    <h2>Mes Compétences</h2>

    <div class="skills-carousel">
      <div class="skills-track">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index">
          <img :src="skill.icon" :alt="skill.name">
          <p>{{ skill.name }}</p>
        </div>
        <!-- On répète les mêmes cartes pour une boucle infinie -->
        <div class="skill-card" v-for="(skill, index) in skills" :key="'dup-'+index">
          <img :src="skill.icon" :alt="skill.name">
          <p>{{ skill.name }}</p>
        </div>
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
    }
  }
}
</script>

<style scoped>
.section {
  padding: 110px 30px 30px;
  text-align: center;
  color: #fff;
  background: #111;
}

h2 {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffffaa;
  margin-bottom: 50px;
  font-family: 'Segoe UI', sans-serif;
}

/* Carrousel */
.skills-carousel {
  overflow: hidden;
  width: 100%;
}

.skills-track {
  display: flex;
  gap: 20px;
  animation: scrollSkills 20s linear infinite;
}

.skill-card {
  background: #1a1a1a;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px #00ffff55;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.skill-card p {
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
}

.skill-card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px #00ffff, 0 0 40px #ff00c8;
}

/* Animation du défilement */
@keyframes scrollSkills {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>



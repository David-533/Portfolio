<template>
  <div class="section" id="mescompetence">
    <h2>Mes Compétences</h2>

    <div class="skills-grid">
      <div class="skill-card">
        <img src="https://img.icons8.com/color/200/html-5.png" alt="HTML">
        <p>HTML</p>
      </div>
      <div class="skill-card">
        <img src="https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg" alt="CSS">
        <p>CSS</p>
      </div>
      <div class="skill-card">
        <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript">
        <p>JavaScript</p>
      </div>
      <div class="skill-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL">
        <p>SQL</p>
      </div>
      <div class="skill-card">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React">
        <p>React</p>
      </div>
      <div class="skill-card">
        <img src="https://cambridge-intelligence.com/wp-content/uploads/2024/07/Vite-official-logo.png" alt="Vite">
        <p>Vite</p>
      </div>
      <div class="skill-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python">
        <p>Python</p>
      </div>
      <div class="skill-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code">
        <p>VS Code</p>
      </div>
      <div class="skill-card">
        <img src="https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png" alt="Linux">
        <p>Linux</p>
      </div>
   <div class="skill-card">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind">
  <p>Tailwind CSS</p>
</div>

<div class="skill-card">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue">
  <p>Vue</p>
</div>

      <div class="skill-card">
        <img src="https://avatars.slack-edge.com/2020-11-25/1527503386626_319578f21381f9641cd8_512.png" alt="GitLab">
        <p>GitLab</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MesCompetences"
}
</script>

<style scoped>
.section {
  padding: 110px 30px 30px; /* évite le chevauchement avec navbar */
  text-align: center;
  color: #fff;
  background: #111;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px;
  gap: 20px;
  justify-items: center;
  margin: 20px auto;
  max-width: 900px;
}

.skill-card {
  background: #fff;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.skill-card img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.skill-card p {
  margin-top: 10px;
  color: #000;
  font-weight: bold;
  font-size: 14px;
}
</style>




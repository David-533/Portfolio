<template>
  <div class="section" id="projets">
    <h2>Projets</h2>

    <div class="parcours-container">

      <!-- Carte 1 : Société Unic -->
      <div class="parcours-carte">
        <h3>Société Unic</h3>
        <img 
          src="https://www.ebp.com/wp-content/uploads/2024/03/banniere-blog-cybersecurite-bu-0324.webp" 
          alt="Projet Société Unic" 
          class="carte-image"
        >
        <a 
          href="/pdf/societe-unic.pdf" 
          target="_blank" 
          class="date-bulle"
        >
          Voir le projet
        </a>
      </div>

      <!-- Carte 2 : CV -->
      <div class="parcours-carte">
        <h3>CV</h3>
        <img 
          src="https://www.primocv.com/wp-content/uploads/2018/07/cv_thematique.png" 
          alt="Projet CV" 
          class="carte-image"
        >
        <a 
          href="https://whimsical-syrniki-5000b8.netlify.app/" 
          target="_blank" 
          class="date-bulle"
        >
          Voir le projet
        </a>
      </div>

      <!-- Carte 3 : GSH -->
      <div class="parcours-carte">
        <h3>GSH SOCIAL</h3>
        <img 
          src="https://www.lgsh.fr/wp-content/uploads/2023/05/cropped-new_logo.jpg" 
          alt="GSH" 
          class="carte-image"
        >
        <a 
          href="https://legendary-zuccutto-faa6a0.netlify.app" 
          target="_blank" 
          class="date-bulle"
        >
          Voir le projet
        </a>
      </div>

      <!-- Carte 4 : Burpsuite -->
      <div class="parcours-carte">
        <h3>BurpSuite</h3>
        <img 
          src="https://netforemost.com/wp-content/uploads/2024/09/1705584317236.webp" 
          alt="Burpsuite" 
          class="carte-image"
        >
        <a 
          href="/pdf/burpsuite.pdf" 
          target="_blank" 
          class="date-bulle"
        >
          Voir le projet
        </a>
      </div>

      <!-- Carte 5 : Identité numérique -->
      <div class="parcours-carte">
        <h3>Identité numérique</h3>
        <img 
          src="https://semji.com/wp-content/uploads/2020/07/Protection-identit%C3%A9-num%C3%A9rique.png" 
          alt="Identité numérique" 
          class="carte-image"
        >
        <a 
          href="/pdf/identite-numerique.pdf" 
          target="_blank" 
          class="date-bulle"
        >
          Voir le projet
        </a>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "Projets",
};
</script>


<style scoped>
.parcours-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  padding: 60px 0;
  font-family: Roboto, sans-serif;
  margin-left: 220px;
}

/* ====== Cartes ====== */
.parcours-carte {
  width: 400px;
  min-height: 320px;
  background-color: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 0 25px #00ffff55;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* ====== Image ====== */
.carte-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 15px #00ffff33;
  transition: transform 0.3s ease;
}

.parcours-carte:hover .carte-image {
  transform: scale(1.05);
}

/* ====== Titre ====== */
h3 {
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

/* ====== Bouton ====== */
.date-bulle {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: white;
  padding: 10px 22px;
  border-radius: 25px;
  font-size: 15px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 0 12px #00ffff55;
  transition: all 0.3s ease;
  margin-top: 15px;
  display: inline-block;
}

.date-bulle:hover {
  transform: scale(1.08);
  box-shadow: 0 0 25px #00ffffaa;
}

h2 {
  text-align: center;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffffaa;
  margin-bottom: 50px;
  font-family: 'Segoe UI', sans-serif;
}

.section {
  margin-top: 120px;
}
</style>
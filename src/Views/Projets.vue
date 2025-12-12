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
          href="https://docs.google.com/document/d/1rIRTp4-hhE1YO84PA9y5QOIGN84jmwA1RisCV7FLyZs/edit?tab=t.0" 
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
          href="https://hilarious-chaja-2dcbdb.netlify.app" 
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
  flex-direction: column; /* empile les cartes verticalement */
  align-items: center;    /* centre les cartes horizontalement */
  justify-content: center;
  gap: 40px;              /* espace plus large entre les cartes */
  padding: 60px 0;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: Roboto, sans-serif;
  margin-left: 220px;
}

/* ====== Cartes ====== */
.parcours-carte {
  width: 400px;           /* largeur augmentée */
  height: 320px;          /* hauteur augmentée */
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
  overflow: hidden;
}

/* ====== Image ====== */
.carte-image-container {
  width: 100%;
  height: 180px; /* plus grande pour remplir la carte */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px #00ffff33;
  margin-bottom: 15px;
}

.carte-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.parcours-carte:hover .carte-image {
  transform: scale(1.05);
}

/* ====== Texte et bouton ====== */
h3 {
  color: #ffffff;
  font-size: 1.4rem; /* texte plus grand */
  margin-bottom: 15px;
}

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
  margin-top: 51px;
  gap: 60;
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
  margin-top: 120px; /* Ajuste comme tu veux */
}


</style>

<template>
  <title>Portfolio BTS SIO | David RAMIN</title>
  <div class="page_accueil">
    <img
      src="https://i.pinimg.com/originals/22/c8/87/22c887ab8cd375d078f0f2178e400374.gif"
      alt="Animation accueil"
    >
  </div>
  <div class="texte-sur-image">
    <h1>DAVID RAMIN</h1>
    <p>ETUDIANT EN BTS SIO - OPTION SLAM</p>
    <p>Bienvenue sur mon Portfolio</p>
  </div>
</template>

<script>
export default {
  name: "Accueil",
};
</script>

<style scoped>
/* Supprime tout scroll et marges */
body {
  margin: 0;
  overflow: hidden;
}

/* Image responsive et limitée à la taille de l'écran */
.page_accueil img {
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  display: block;
}

/* Texte centré sur l'image */
.texte-sur-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

/* Titre */
.texte-sur-image h1 {
  color: white;
  margin: 10px 0;
  font-size: 60px;
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}

/* Paragraphes animés avec gradient + apparition */
.texte-sur-image p {
  margin: 10px 0;
  font-size: 20px;
  background: linear-gradient(270deg, #ff00c8, #00ffff, #00ff73, #ff00c8);
  background-size: 800% 800%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: colorCycle 6s ease infinite, fadeInUp 1.5s ease-out forwards;
}

/* Animation du gradient */
@keyframes colorCycle {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Animation apparition texte */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate(-50%, 20%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .texte-sur-image h1 {
    font-size: 40px;
  }
  .texte-sur-image p {
    font-size: 16px;
  }
}
</style>


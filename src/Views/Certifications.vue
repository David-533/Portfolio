<template>
  <section id="mescertifications" class="section">
    <h2>Mes Certifications</h2>

    <div class="certif-grid">
      <div 
        v-for="(certif, index) in certifications"
        :key="index"
        class="certif-card"
      >
        <h3>{{ certif.nom }}</h3>
        <p class="source">{{ certif.source }} • {{ certif.annee }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Certifications",
  data() {
    return {
      certifications: [
        { nom: "Requêtez une base de donnée avec SQL", source: "OpenClassrooms", annee: "2025" },
        { nom: "Apprenez les bases du langage Python", source: "OpenClassrooms", annee: "2025" },
        { nom: "Créez votre site web avec HTML5 et CSS3", source: "OpenClassrooms", annee: "2025" },
        { nom: "Utiliser ChatGPT pour améliorer votre productivité", source: "OpenClassrooms", annee: "2025" },
        { nom: "PIX", source: "PIX", annee: "2023" },
        { nom: "Certification ANSSI", source: "ANSSI", annee: "2025" },
        { nom: "Apprenez à programmer avec JavaScript", source: "OpenClassrooms", annee: "2025" },
        { nom: "Débutez avec React", source: "OpenClassrooms", annee: "2025" },
        { nom: "Objectif IA : initiez-vous à l'intelligence artificielle", source: "OpenClassrooms", annee: "2025" },
        { nom: "Decouvrez l'univers de la cybersécurité", source: "OpenClassrooms", annee: "2025" },
        { nom: "Apprenez à utiliser la ligne de commande dans un terminal", source: "OpenClassrooms", annee: "2025" },
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');

/* --- Section principale --- */
.section {
  text-align: center;
  padding: 120px 20px 60px 20px; /* ajusté pour ne pas chevaucher la navbar */
  background-color: black;
  color: white;
  font-family: 'Roboto Mono', monospace;
  min-height: 100vh;
}

h2 {
  font-size: 30px;
  color: #00ffff;
  margin-bottom: 40px;
  text-shadow: 0 0 15px #00ffffaa;
  animation: fadeInDown 1s ease;
  letter-spacing: 1px;
}

/* --- Grille des certifications --- */
.certif-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  gap: 25px;

  justify-content: start;   /* aligne la grille à gauche */
  justify-items: center;    /* centre chaque carte dans sa colonne */
  align-items: start;

  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px 0 220px;   /* <── décalage vers la droite (augmente cette valeur si besoin) */
}

/* Tablettes */
@media (max-width: 1024px) {
  .certif-grid {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    padding: 0 15px 0 50px; /* ajuste un peu moins à droite sur tablette */
  }
}

/* Mobiles */
@media (max-width: 600px) {
  .certif-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0 10px; /* centré sur mobile */
  }
}

/* --- Carte de certification --- */
.certif-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 25px;
  width: 90%;
  max-width: 300px;
  color: white;
  text-align: left;
  position: relative;
  transition: all 0.4s ease;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}

.certif-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, #00ffff, #00e5ff, #00ffff);
  background-size: 200% 100%;
  animation: glowLine 4s linear infinite;
  border-radius: 15px 15px 0 0;
}

/* Délai d’animation pour chaque carte */
.certif-card:nth-child(1) { animation-delay: 0.1s; }
.certif-card:nth-child(2) { animation-delay: 0.2s; }
.certif-card:nth-child(3) { animation-delay: 0.3s; }
.certif-card:nth-child(4) { animation-delay: 0.4s; }
.certif-card:nth-child(5) { animation-delay: 0.5s; }
.certif-card:nth-child(6) { animation-delay: 0.6s; }
.certif-card:nth-child(7) { animation-delay: 0.7s; }
.certif-card:nth-child(8) { animation-delay: 0.8s; }
.certif-card:nth-child(9) { animation-delay: 0.9s; }
.certif-card:nth-child(10) { animation-delay: 1s; }

/* Effet au survol */
.certif-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: #00ffff99;
  box-shadow: 0 0 30px #00ffff66;
}

/* --- Texte des cartes --- */
.certif-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  text-shadow: 0 0 10px #00ffff55;
}

.certif-card .source {
  font-size: 13px;
  opacity: 0.8;
}

/* --- Animations --- */
@keyframes fadeInUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeInDown {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes glowLine {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
</style>

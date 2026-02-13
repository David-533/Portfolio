<template>
  <section id="mescertifications" class="section">
    <h2>Mes Certifications</h2>

    <div class="certif-grid">
      <div
        v-for="(certif, index) in certifications"
        :key="certif.nom"
        class="certif-card"
        :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
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
        { nom: "Découvrez l'univers de la cybersécurité", source: "OpenClassrooms", annee: "2025" },
        { nom: "Apprenez à utiliser la ligne de commande dans un terminal", source: "OpenClassrooms", annee: "2025" },
      ],
    };
  },
};
</script>

<style scoped>
/* ============================================
   DESIGN TOKENS
   ============================================ */
:root {
  --accent-cyan: #00ffff;
  --accent-cyan-dim: rgba(0, 255, 255, 0.3);
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-radius: 15px;
  --card-max-width: 300px;
}

/* ============================================
   SECTION
   ============================================ */
.section {
  text-align: center;
  padding: 120px 20px 60px;
  background-color: black;
  color: white;
  font-family: 'Roboto Mono', monospace;
  min-height: 100vh;
}

h2 {
  font-size: 30px;
  color: var(--accent-cyan);
  margin-bottom: 40px;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.67);
  animation: fadeInDown 1s ease;
  letter-spacing: 1px;
}

/* ============================================
   GRILLE
   ============================================ */
.certif-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  gap: 25px;
  justify-items: center;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

/* ============================================
   CARTE
   ============================================ */
.certif-card {
  background: var(--card-bg);
  border: 1px solid var(--accent-cyan-dim);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: var(--card-radius);
  padding: 25px;
  width: 90%;
  max-width: var(--card-max-width);
  color: white;
  text-align: left;
  position: relative;
  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;

  /* Animation d'entrée — delay dynamique via :style */
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

/* Ligne lumineuse en haut de la carte */
.certif-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--accent-cyan), #00e5ff, var(--accent-cyan));
  background-size: 200% 100%;
  animation: glowLine 4s linear infinite;
  border-radius: var(--card-radius) var(--card-radius) 0 0;
  will-change: background-position;
}

.certif-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: rgba(0, 255, 255, 0.6);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

/* ============================================
   TEXTE DES CARTES
   ============================================ */
.certif-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.33);
}

.certif-card .source {
  font-size: 13px;
  opacity: 0.8;
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeInUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes glowLine {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .certif-grid {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}

@media (max-width: 600px) {
  .certif-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .certif-card,
  .certif-card::before,
  h2 {
    animation: none;
    opacity: 1;
  }

  .certif-card {
    transition: none;
  }
}
</style>

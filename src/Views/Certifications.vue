<template>
  <section id="mescertifications" class="section">
    <h2>Mes Certifications</h2>
    <div class="certif-grid">
      <div
        v-for="(certif, index) in certifications"
        :key="index"
        class="certif-card"
        :style="{ animationDelay: (index * 0.08) + 's' }"
      >
        <h3>{{ certif.nom }}</h3>
        <p class="source">{{ certif.source }} · {{ certif.annee }}</p>
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
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');

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
  color: #00ffff;
  margin-bottom: 40px;
  text-shadow: 0 0 15px #00ffffaa;
  animation: fadeInDown 1s ease;
  letter-spacing: 1px;
}

.certif-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.certif-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  color: white;
  text-align: center;
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

.certif-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: #00ffff99;
  box-shadow: 0 0 30px #00ffff66;
}

.certif-card h3 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 0 0 10px #00ffff55;
}

.certif-card .source {
  font-size: 12px;
  opacity: 0.7;
}

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

@media (max-width: 1024px) {
  .certif-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .certif-grid { grid-template-columns: 1fr; }
}
</style>
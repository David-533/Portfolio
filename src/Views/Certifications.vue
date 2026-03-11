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
.section {
  padding: 180px 40px 60px;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffffaa;
  margin-bottom: 50px;
  font-size: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Grille */
.certif-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

/* Carte */
.certif-card {
  background: #141414;
  border: 1px solid #ffffff0f;
  border-radius: 10px;
  padding: 16px 18px;
  text-align: right;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.5s forwards;
}

.certif-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, #00ffff, #ff00c8);
  border-radius: 10px 10px 0 0;
}

.certif-card:hover {
  transform: translateY(-4px);
  border-color: #00ffff33;
}

.certif-card h3 {
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 8px;
  line-height: 1.4;
  color: #fff;
}

.certif-card .source {
  font-size: 12px;
  color: #888;
  margin: 0;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 1024px) {
  .certif-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .certif-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .certif-grid { grid-template-columns: 1fr; }
}
</style>
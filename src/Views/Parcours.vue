<template>
  <div class="section" id="monparcours">
    <h2>Mon Parcours Scolaire</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>BTS SIO Option SLAM</h3>
          <p>Lycée Saint Hilaire, Etampes</p>
          <div class="bulle-date">2024 - 2026</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>BAC STI2D</h3>
          <p>Lycée Edmond Michelet, Arpajon</p>
          <div class="bulle-date">2021 - 2024</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>Brevet</h3>
          <p>Collège Germaine Tillion, Lardy</p>
          <div class="bulle-date">2017 - 2021</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section" id="monparcours-professionnel">
    <h2>Mon Parcours Professionnel</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>SNCF</h3>
          <div class="bulle-date">19 Mai - 20 Juin 2025</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>Stage 2</h3>
          <div class="bulle-date">Mars 2024</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section" id="notes-synthese">
    <h2>Notes de Synthèse</h2>
    <div class="notes-container">
      <div class="note-card">
        <h3>SNCF</h3>
        <p class="note-date">19 Mai - 20 Juin 2025</p>
        <a href="https://docs.google.com/document/d/1iJk8K_P8Y5GqTHFvMJmAL3AUDnLNSXkruNEG96JNSZQ/edit?usp=drive_link" target="_blank" class="btn-note">Lire la note</a>
      </div>
      <div class="note-card">
        <h3>Stage 2</h3>
        <p class="note-date">Mars 2024</p>
        <a href="https://docs.google.com/document/d/1V3HrWaQiUUAHQSNflrX6WqDdDpQy0uVBTqnKsH-bKsQ/edit?tab=t.0" target="_blank" class="btn-note">Lire la note</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parcours",
};
</script>

<style scoped>
.section {
  padding: 120px 20px 50px; /* espace au dessus pour la nav */
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffffaa;
  margin-bottom: 50px;
  font-family: 'Segoe UI', sans-serif;
}

/* Timeline verticale */
.timeline {
  position: relative;
  margin: 0 auto;
  padding-left: 20px;
  border-left: 3px solid #00ffff33; /* ligne verticale */
}

/* Chaque étape */
.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

/* Carte de contenu */
.timeline-content {
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px #00ffff55;
  color: #ffffff;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* pour que le bouton aille à droite */
}

.timeline-content h3 {
  margin-top: 0;

  font-family: 'Segoe UI', sans-serif;
}

.timeline-content p {
  font-family: 'Roboto', sans-serif;
  color: #ddd;
  margin: 5px 0;
}

/* Date style néon */
.bulle-date {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  color: white;
  background: linear-gradient(270deg, #00ffff, #ff00c8);
  background-size: 800% 800%;
  animation: bulleColorAnim 5s ease infinite;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

@keyframes bulleColorAnim {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Hover effet */
.timeline-content:hover {
  transform: scale(1.03);
}

/* Section Notes de Synthèse */
.notes-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
}

.note-card {
  background-color: #1a1a1a;
  border: 2px solid #00ffff55;
  border-radius: 10px;
  padding: 25px;
  width: 280px;
  text-align: center;
  box-shadow: 0 0 15px #00ffff55;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-card:hover {
  transform: scale(1.05);
  border-color: #00ffff;
  box-shadow: 0 0 25px #00ffff77;
}

.note-card h3 {
  color: #00ffff;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.2rem;
}

.note-date {
  color: #aaa;
  font-size: 14px;
  margin-bottom: 15px;
}

.btn-note {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background: linear-gradient(90deg, #00ffff, #ff00c8);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px #00ffff55;
}

.btn-note:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #00ffffaa;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline {
    padding-left: 15px;
    border-left: 2px solid #00ffff33;
  }

  .timeline-content {
    width: 100%;
  }

  .notes-container {
    grid-template-columns: 1fr;
  }

  .note-card {
    width: 100%;
  }
}
</style>

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
          <a href="https://docs.google.com/document/d/1iJk8K_P8Y5GqTHFvMJmAL3AUDnLNSXkruNEG96JNSZQ/edit?usp=drive_link" target="_blank" class="btn-rapport">Note de Synthèse</a>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>MF2i</h3>
          <div class="bulle-date">12 Janvier - 20 Février 2026</div>
          <a href="https://docs.google.com/document/d/1V3HrWaQiUUAHQSNflrX6WqDdDpQy0uVBTqnKsH-bKsQ/edit?tab=t.0" target="_blank" class="btn-rapport">Note de Synthèse</a>
        </div>
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

/* Boutons Note de Synthèse alignés à droite */
.btn-rapport {
  display: inline-block;
  margin-left: auto;  /* pousse le bouton à droite */
  margin-top: 10px;
  padding: 8px 12px;
  border: 2px solid #00ffff;
  border-radius: 6px;
  color: #00ffff;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  text-shadow: 0 0 5px #00ffffaa;
}

.btn-rapport:hover {
  background: #00ffff;
  color: #111;
  box-shadow: 0 0 15px #00ffff;
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
  
  .btn-rapport {
    align-self: flex-start; /* sur mobile bouton à gauche pour éviter débordement */
    margin-left: 0;
  }
}
</style>


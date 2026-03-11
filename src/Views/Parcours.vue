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
          <p>Stage en entreprise</p>
          <div class="bulle-date">19 Mai - 20 Juin 2025</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>MF2i</h3>
          <p>Stage en entreprise</p>
          <div class="bulle-date">Mars 2024</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section" id="notes-synthese">
    <h2>Notes de Synthèse</h2>
    <div class="synthese-grid">
      <div class="synthese-card">
        <div class="synthese-icon">📄</div>
        <div class="synthese-info">
          <h3>SNCF</h3>
          <p>19 Mai - 20 Juin 2025</p>
        </div>
        <a href="https://docs.google.com/document/d/1iJk8K_P8Y5GqTHFvMJmAL3AUDnLNSXkruNEG96JNSZQ/edit?usp=drive_link" target="_blank" class="btn-rapport">Voir →</a>
      </div>
      <div class="synthese-card">
        <div class="synthese-icon">📄</div>
        <div class="synthese-info">
          <h3>MF2i</h3>
          <p>12 Janvier - 20 Février 2026</p>
        </div>
        <a href="https://docs.google.com/document/d/1V3HrWaQiUUAHQSNflrX6WqDdDpQy0uVBTqnKsH-bKsQ/edit?tab=t.0" target="_blank" class="btn-rapport">Voir →</a>
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
  padding: 140px 40px 80px;
  max-width: 860px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffffaa;
  margin-bottom: 60px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 24px;
  border-left: 2px solid #ffffff15;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -31px;
  top: 22px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00ffff;
  box-shadow: 0 0 8px #00ffff;
}

.timeline-content {
  background-color: #141414;
  padding: 24px 28px;
  border-radius: 12px;
  border: 1px solid #ffffff0f;
  color: #ffffff;
  transition: transform 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.timeline-content:hover {
  transform: translateX(6px);
  border-color: #00ffff33;
}

.timeline-content h3 {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  color: #ffffff;
}

.timeline-content p {
  font-family: 'Roboto', sans-serif;
  color: #888;
  margin: 0;
  font-size: 14px;
}

/* Bulle date */
.bulle-date {
  display: inline-block;
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  color: #00ffff;
  border: 1px solid #00ffff44;
  background: #00ffff0d;
  letter-spacing: 0.5px;
}

/* Notes de synthèse */
.synthese-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.synthese-card {
  background-color: #141414;
  border: 1px solid #ffffff0f;
  padding: 20px 28px;
  border-radius: 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.synthese-card:hover {
  transform: translateX(6px);
  border-color: #00ffff33;
}

.synthese-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.synthese-info {
  flex: 1;
}

.synthese-info h3 {
  margin: 0 0 4px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 17px;
}

.synthese-info p {
  margin: 0;
  color: #888;
  font-size: 13px;
}

.btn-rapport {
  padding: 8px 16px;
  border: 1px solid #00ffff44;
  border-radius: 8px;
  color: #00ffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: 0.3s;
  white-space: nowrap;
  background: #00ffff0d;
}

.btn-rapport:hover {
  background: #00ffff;
  color: #111;
  border-color: #00ffff;
}

@media (max-width: 768px) {
  .section {
    padding: 120px 20px 60px;
  }
  .synthese-card {
    flex-wrap: wrap;
  }
}
</style>
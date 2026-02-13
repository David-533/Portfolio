<template>
  <div class="parcours-page">
    <!-- ===== PARCOURS SCOLAIRE ===== -->
    <section class="section" id="monparcours">
      <h2 class="section-title">🎓 Parcours Scolaire</h2>

      <div class="timeline">
        <div
          class="timeline-item"
          v-for="(item, index) in parcoursScolaire"
          :key="item.titre"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <!-- Point sur la ligne -->
          <div class="timeline-dot"></div>

          <!-- Carte -->
          <div class="timeline-content">
            <div class="bulle-date">{{ item.periode }}</div>
            <h3>{{ item.titre }}</h3>
            <p class="lieu">{{ item.lieu }}</p>
            <p v-if="item.detail" class="detail">{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PARCOURS PROFESSIONNEL ===== -->
    <section class="section" id="monparcours-professionnel">
      <h2 class="section-title">💼 Parcours Professionnel</h2>

      <div class="timeline">
        <div
          class="timeline-item"
          v-for="(item, index) in parcoursPro"
          :key="item.titre"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="timeline-dot"></div>

          <div class="timeline-content">
            <div class="bulle-date">{{ item.periode }}</div>
            <h3>{{ item.titre }}</h3>
            <p class="lieu">{{ item.lieu }}</p>
            <p v-if="item.detail" class="detail">{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== NOTES DE SYNTHÈSE ===== -->
    <section class="section" id="notes-synthese">
      <h2 class="section-title">📄 Notes de Synthèse</h2>

      <div class="synthese-grid">
        <a
          v-for="doc in notesSynthese"
          :key="doc.titre"
          :href="doc.url"
          target="_blank"
          rel="noopener noreferrer"
          class="synthese-card"
        >
          <span class="synthese-icon">📝</span>
          <div class="synthese-info">
            <h4>{{ doc.titre }}</h4>
            <p>{{ doc.stage }}</p>
          </div>
          <span class="synthese-arrow">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Parcours",
  data() {
    return {
      parcoursScolaire: [
        {
          titre: "BTS SIO Option SLAM",
          lieu: "Lycée Saint Hilaire, Étampes",
          periode: "2024 – 2026",
          detail: "Solutions Logicielles et Applications Métiers",
        },
        {
          titre: "BAC STI2D",
          lieu: "Lycée Edmond Michelet, Arpajon",
          periode: "2021 – 2024",
          detail: "Sciences et Technologies de l'Industrie et du Développement Durable",
        },
        {
          titre: "Brevet des Collèges",
          lieu: "Collège Germaine Tillion, Lardy",
          periode: "2017 – 2021",
        },
      ],
      parcoursPro: [
        {
          titre: "Stage – MF2i",
          lieu: "Entreprise IT, Île-de-France",
          periode: "12 Jan. – 20 Fév. 2026",
          detail: "Développement web, support informatique et administration système",
        },
        {
          titre: "Stage – SNCF",
          lieu: "Direction Générale, Saint-Denis",
          periode: "19 Mai – 20 Juin 2025",
          detail: "Support utilisateur, gestion de parc et déploiement d'outils internes",
        },
      ],
      notesSynthese: [
        {
          titre: "Note de Synthèse – MF2i",
          stage: "Stage 2ème année • 2026",
          url: "https://docs.google.com/document/d/1V3HrWaQiUUAHQSNflrX6WqDdDpQy0uVBTqnKsH-bKsQ/edit?tab=t.0",
        },
        {
          titre: "Note de Synthèse – SNCF",
          stage: "Stage 1ère année • 2025",
          url: "https://docs.google.com/document/d/1iJk8K_P8Y5GqTHFvMJmAL3AUDnLNSXkruNEG96JNSZQ/edit?usp=drive_link",
        },
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
  --accent-pink: #ff00c8;
  --bg-card: #1a1a1a;
  --bg-page: #000;
  --timeline-line: rgba(0, 255, 255, 0.25);
  --timeline-dot-size: 16px;
  --timeline-line-left: 28px;
}

/* ============================================
   PAGE
   ============================================ */
.parcours-page {
  background: var(--bg-page);
  color: #fff;
  font-family: 'Roboto', sans-serif;
}

/* ============================================
   SECTIONS
   ============================================ */
.section {
  padding: 100px 20px 60px;
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  color: var(--accent-cyan);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.67);
  margin-bottom: 50px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  letter-spacing: 1px;
  animation: fadeInDown 1s ease;
}

/* ============================================
   TIMELINE
   ============================================ */
.timeline {
  position: relative;
  padding-left: 40px;
  margin-left: 20px;
}

/* Ligne verticale */
.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--timeline-line-left);
  width: 3px;
  background: linear-gradient(
    to bottom,
    var(--accent-cyan),
    var(--accent-pink),
    var(--accent-cyan)
  );
  background-size: 100% 200%;
  animation: lineGlow 4s ease-in-out infinite alternate;
  border-radius: 3px;
}

@keyframes lineGlow {
  0% { background-position: 0% 0%; opacity: 0.6; }
  100% { background-position: 0% 100%; opacity: 1; }
}

/* ============================================
   TIMELINE ITEM
   ============================================ */
.timeline-item {
  position: relative;
  margin-bottom: 40px;
  opacity: 0;
  animation: fadeInLeft 0.6s ease forwards;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* ============================================
   DOT (point sur la ligne)
   ============================================ */
.timeline-dot {
  position: absolute;
  left: calc(-40px + var(--timeline-line-left) - var(--timeline-dot-size) / 2 + 1.5px);
  top: 24px;
  width: var(--timeline-dot-size);
  height: var(--timeline-dot-size);
  border-radius: 50%;
  background: var(--accent-cyan);
  border: 3px solid var(--bg-page);
  box-shadow: 0 0 12px var(--accent-cyan), 0 0 24px rgba(0, 255, 255, 0.3);
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.4);
  box-shadow: 0 0 20px var(--accent-cyan), 0 0 40px rgba(0, 255, 255, 0.5);
}

/* ============================================
   CARTE
   ============================================ */
.timeline-content {
  background: var(--bg-card);
  padding: 22px 25px;
  border-radius: 10px;
  border: 1px solid rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(6px) scale(1.02);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
  border-color: rgba(0, 255, 255, 0.4);
}

.timeline-content h3 {
  margin: 10px 0 5px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  color: #fff;
}

.timeline-content .lieu {
  color: #aaa;
  font-size: 14px;
  margin: 0;
}

.timeline-content .detail {
  color: #888;
  font-size: 13px;
  font-style: italic;
  margin-top: 8px;
}

/* ============================================
   BULLE DATE
   ============================================ */
.bulle-date {
  display: inline-block;
  padding: 5px 14px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 20px;
  color: white;
  background: linear-gradient(270deg, var(--accent-cyan), var(--accent-pink));
  background-size: 400% 400%;
  animation: bulleColorAnim 5s ease infinite;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
  will-change: background-position;
}

@keyframes bulleColorAnim {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ============================================
   NOTES DE SYNTHÈSE
   ============================================ */
.synthese-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.synthese-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--bg-card);
  padding: 20px 24px;
  border-radius: 10px;
  border: 1px solid rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
  text-decoration: none;
  color: #fff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.synthese-card:hover {
  transform: translateX(6px) scale(1.02);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
  border-color: var(--accent-cyan);
}

.synthese-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.synthese-info {
  flex: 1;
}

.synthese-info h4 {
  margin: 0 0 4px;
  font-size: 16px;
  color: var(--accent-cyan);
}

.synthese-info p {
  margin: 0;
  font-size: 13px;
  color: #888;
}

.synthese-arrow {
  font-size: 22px;
  color: var(--accent-cyan);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.synthese-card:hover .synthese-arrow {
  transform: translateX(5px);
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
  .section {
    padding: 80px 15px 40px;
  }

  .timeline {
    padding-left: 30px;
    margin-left: 10px;
  }

  .timeline-content {
    padding: 16px 18px;
  }

  .synthese-card {
    padding: 16px 18px;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .timeline-item,
  .section-title,
  .bulle-date {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .timeline::before {
    animation: none;
    opacity: 0.8;
  }

  .timeline-content,
  .timeline-dot,
  .synthese-card,
  .synthese-arrow {
    transition: none;
  }
}
</style>


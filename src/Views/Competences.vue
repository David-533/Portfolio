<template>
  <div class="section" id="mescompetence">
    <h2>Mes Compétences</h2>

    <div class="skills-grid">
      <div
        class="skill-card"
        v-for="(skill, index) in skills"
        :key="skill.name"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <img
          :src="skill.icon"
          :alt="`Logo ${skill.name}`"
          loading="lazy"
          width="55"
          height="55"
        />
        <p>{{ skill.name }}</p>

        <!-- Tooltip au survol -->
        <span class="skill-tooltip">{{ skill.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MesCompetences",
  data() {
    return {
      skills: [
        { name: "HTML", icon: "https://img.icons8.com/color/200/html-5.png", description: "Structure et sémantique des pages web" },
        { name: "CSS", icon: "https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg", description: "Mise en forme, animations et responsive design" },
        { name: "JavaScript", icon: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", description: "Logique côté client, DOM et interactions" },
        { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", description: "Requêtes, jointures et gestion de bases de données" },
        { name: "React", icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", description: "Composants, hooks et state management" },
        { name: "Vite", icon: "https://cambridge-intelligence.com/wp-content/uploads/2024/07/Vite-official-logo.png", description: "Bundler rapide pour le développement moderne" },
        { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png", description: "Scripts, automatisation et back-end" },
        { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png", description: "Éditeur principal avec extensions et debugging" },
        { name: "Linux", icon: "https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png", description: "Administration système et ligne de commande" },
        { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", description: "Framework CSS utility-first" },
        { name: "Vue", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", description: "Framework JS progressif pour interfaces web" },
        { name: "GitLab", icon: "https://avatars.slack-edge.com/2020-11-25/1527503386626_319578f21381f9641cd8_512.png", description: "CI/CD, gestion de repos et collaboration" },
        { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg", description: "Déploiement et hébergement de sites statiques" },
        { name: "Node.js", icon: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png", description: "JavaScript côté serveur et API REST" },
        { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", description: "Versioning, branches et collaboration" },
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
  --card-size: 110px;
  --card-size-mobile: 100px;
  --icon-size: 55px;
  --icon-size-mobile: 45px;
  --card-radius: 15px;
  --tooltip-max-width: 220px;
}

/* ============================================
   SECTION
   ============================================ */
.section {
  padding: 180px 80px 60px 120px;
  text-align: center;
  color: #fff;
  background: #000;
  scroll-margin-top: 180px;
  font-family: 'Roboto Mono', monospace;
}

h2 {
  color: var(--accent-cyan);
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.67);
  margin-bottom: 40px;
  font-size: 30px;
  letter-spacing: 1px;
  animation: fadeInDown 1s ease;
}

/* ============================================
   GRILLE
   ============================================ */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  justify-items: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  /* Empêche les tooltips de créer un scroll horizontal */
  overflow: visible;
}

/* ============================================
   CARTE
   ============================================ */
.skill-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--accent-cyan-dim);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
  width: var(--card-size);
  height: var(--card-size);
  border-radius: var(--card-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;

  /* Animation d'entrée */
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.08);
  border-color: var(--accent-cyan);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.47);
}

.skill-card img {
  width: var(--icon-size);
  height: var(--icon-size);
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.27));
}

.skill-card p {
  margin-top: 8px;
  font-weight: 600;
  font-size: 12px;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.33);
  /* Protection contre le débordement du nom */
  max-width: calc(var(--card-size) - 16px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

/* ============================================
   TOOLTIP AU SURVOL
   ============================================ */
.skill-tooltip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  background: rgba(0, 0, 0, 0.92);
  border: 1px solid var(--accent-cyan);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  color: #fff;
  font-size: 12px;
  line-height: 1.4;
  padding: 8px 12px;
  border-radius: 8px;
  pointer-events: none;
  z-index: 10;

  /* Retour à la ligne propre au lieu de nowrap */
  white-space: normal;
  max-width: var(--tooltip-max-width);
  width: max-content;
  text-align: center;

  /* Caché par défaut */
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s ease;
}

/* Flèche vers le bas */
.skill-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--accent-cyan);
}

/* Affichage au hover */
.skill-card:hover .skill-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/*
 * FIX : Colonnes gauche/droite
 * Décale le tooltip pour qu'il ne déborde pas du viewport
 */

/* 1ère colonne (gauche) — décale vers la droite */
.skill-card:nth-child(5n + 1) .skill-tooltip {
  left: 0;
  transform: translateX(0) translateY(6px);
}
.skill-card:nth-child(5n + 1):hover .skill-tooltip {
  transform: translateX(0) translateY(0);
}
.skill-card:nth-child(5n + 1) .skill-tooltip::after {
  left: 24px;
}

/* 5ème colonne (droite) — décale vers la gauche */
.skill-card:nth-child(5n) .skill-tooltip {
  left: auto;
  right: 0;
  transform: translateX(0) translateY(6px);
}
.skill-card:nth-child(5n):hover .skill-tooltip {
  transform: translateX(0) translateY(0);
}
.skill-card:nth-child(5n) .skill-tooltip::after {
  left: auto;
  right: 24px;
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .section {
    padding-left: 40px;
    padding-right: 40px;
  }

  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Sur 3 colonnes : ajuster les bords gauche/droite */
  /* Reset du layout 5 colonnes */
  .skill-card:nth-child(5n + 1) .skill-tooltip,
  .skill-card:nth-child(5n) .skill-tooltip {
    left: 50%;
    right: auto;
    transform: translateX(-50%) translateY(6px);
  }
  .skill-card:nth-child(5n + 1):hover .skill-tooltip,
  .skill-card:nth-child(5n):hover .skill-tooltip {
    transform: translateX(-50%) translateY(0);
  }
  .skill-card:nth-child(5n + 1) .skill-tooltip::after,
  .skill-card:nth-child(5n) .skill-tooltip::after {
    left: 50%;
    right: auto;
  }

  /* 1ère colonne sur 3 */
  .skill-card:nth-child(3n + 1) .skill-tooltip {
    left: 0;
    transform: translateX(0) translateY(6px);
  }
  .skill-card:nth-child(3n + 1):hover .skill-tooltip {
    transform: translateX(0) translateY(0);
  }
  .skill-card:nth-child(3n + 1) .skill-tooltip::after {
    left: 24px;
  }

  /* 3ème colonne sur 3 */
  .skill-card:nth-child(3n) .skill-tooltip {
    left: auto;
    right: 0;
    transform: translateX(0) translateY(6px);
  }
  .skill-card:nth-child(3n):hover .skill-tooltip {
    transform: translateX(0) translateY(0);
  }
  .skill-card:nth-child(3n) .skill-tooltip::after {
    left: auto;
    right: 24px;
  }

  /* Tooltip en dessous sur tablette */
  .skill-tooltip {
    bottom: auto;
    top: calc(100% + 12px);
  }
  .skill-tooltip::after {
    top: auto;
    bottom: 100%;
    border-top-color: transparent;
    border-bottom-color: var(--accent-cyan);
  }
}

@media (max-width: 600px) {
  .section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .skill-card {
    width: var(--card-size-mobile);
    height: var(--card-size-mobile);
  }

  .skill-card img {
    width: var(--icon-size-mobile);
    height: var(--icon-size-mobile);
  }

  /* Reset tous les positionnements de bord */
  .skill-card .skill-tooltip {
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) translateY(6px) !important;
    max-width: 160px;
  }
  .skill-card:hover .skill-tooltip {
    transform: translateX(-50%) translateY(0) !important;
  }
  .skill-card .skill-tooltip::after {
    left: 50% !important;
    right: auto !important;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .skill-card,
  h2 {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .skill-card,
  .skill-tooltip {
    transition: none;
  }
}
</style>



<template>
  <div class="section" id="projets">
    <h2>Mes Projets</h2>

    <div class="projets-grid">
      <div
        class="projet-card"
        v-for="(projet, index) in projets"
        :key="projet.titre"
        :style="{ animationDelay: `${index * 0.15}s` }"
      >
        <div class="carte-image-container">
          <img
            :src="projet.image"
            :alt="projet.titre"
            loading="lazy"
            class="carte-image"
          />
        </div>

        <h3>{{ projet.titre }}</h3>
        <p class="projet-description">{{ projet.description }}</p>

        <a
          :href="projet.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-voir"
        >
          {{ projet.type === 'site' ? '🌐 Voir le site' : '📄 Voir le document' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projets",
  data() {
    return {
      projets: [
        {
          titre: "Société Unic",
          description: "Étude de cas cybersécurité pour une entreprise fictive",
          image: "https://www.ebp.com/wp-content/uploads/2024/03/banniere-blog-cybersecurite-bu-0324.webp",
          url: "https://docs.google.com/document/d/1rIRTp4-hhE1YO84PA9y5QOIGN84jmwA1RisCV7FLyZs/edit?tab=t.0",
          type: "doc",
        },
        {
          titre: "CV en ligne",
          description: "Portfolio CV interactif déployé sur Netlify",
          image: "https://www.primocv.com/wp-content/uploads/2018/07/cv_thematique.png",
          url: "https://whimsical-syrniki-5000b8.netlify.app/",
          type: "site",
        },
        {
          titre: "GSH Social",
          description: "Site vitrine pour le Groupe Social pour l'Habitat",
          image: "https://www.lgsh.fr/wp-content/uploads/2023/05/cropped-new_logo.jpg",
          url: "https://legendary-zuccutto-faa6a0.netlify.app",
          type: "site",
        },
        {
          titre: "BurpSuite",
          description: "Documentation sur les tests d'intrusion avec BurpSuite",
          image: "https://netforemost.com/wp-content/uploads/2024/09/1705584317236.webp",
          url: "https://docs.google.com/document/d/1KG--GrI2fKsoOHa-S8FOoJedPK-2sXIpc5tnXkrHTc8/edit?tab=t.0",
          type: "doc",
        },
        {
          titre: "Identité numérique",
          description: "Analyse et protection de l'identité numérique",
          image: "https://semji.com/wp-content/uploads/2020/07/Protection-identit%C3%A9-num%C3%A9rique.png",
          url: "https://docs.google.com/document/d/1hF0lc3QFmj0v5-1YAJWAS9JlC67tcnITHxxkOz7mKWc/edit?tab=t.0",
          type: "doc",
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
  --accent-pink: #ff00ff;
  --bg-card: #1a1a1a;
  --card-radius: 15px;
}

/* ============================================
   SECTION
   ============================================ */
.section {
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  color: var(--accent-cyan);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.67);
  margin-bottom: 50px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  animation: fadeInDown 1s ease;
}

/* ============================================
   GRILLE DE PROJETS
   ============================================ */
.projets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  font-family: 'Roboto', sans-serif;
}

/* ============================================
   CARTE PROJET
   ============================================ */
.projet-card {
  width: 100%;
  max-width: 360px;
  background: var(--bg-card);
  border-radius: var(--card-radius);
  border: 1px solid rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.projet-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.35);
  border-color: rgba(0, 255, 255, 0.4);
}

/* ============================================
   IMAGE
   ============================================ */
.carte-image-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: #111;
}

.carte-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.projet-card:hover .carte-image {
  transform: scale(1.08);
}

/* ============================================
   CONTENU TEXTE
   ============================================ */
.projet-card h3 {
  color: #fff;
  font-size: 1.2rem;
  margin: 18px 20px 6px;
  font-family: 'Segoe UI', sans-serif;
}

.projet-description {
  color: #999;
  font-size: 13px;
  line-height: 1.5;
  margin: 0 20px 16px;
  flex: 1;
}

/* ============================================
   BOUTON
   ============================================ */
.btn-voir {
  display: inline-block;
  margin: 0 20px 20px;
  padding: 10px 20px;
  background: linear-gradient(90deg, var(--accent-pink), var(--accent-cyan));
  background-size: 200% 100%;
  color: white;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.3);
  transition:
    background-position 0.4s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-voir:hover {
  background-position: 100% 0;
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
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
  .projets-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 80px 15px 40px;
  }

  .projets-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .projet-card {
    max-width: 100%;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .projet-card,
  h2 {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .projet-card,
  .carte-image,
  .btn-voir {
    transition: none;
  }
}
</style>



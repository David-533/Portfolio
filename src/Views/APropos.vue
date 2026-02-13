<template>
  <div class="apropos-container">
    <!-- Utilise les classes neon avec variante via attribut data-variant -->
    <h2 class="neon-text" data-variant="primary">À Propos</h2>

    <!-- Carte Introduction -->
    <div class="card card--intro">
      <slot name="intro">
        <!-- Contenu intro -->
      </slot>
    </div>

    <!-- Carte SISR -->
    <h3 class="neon-text" data-variant="sisr">SISR</h3>
    <div class="card card--sisr">
      <slot name="sisr">
        <!-- Contenu SISR -->
      </slot>
    </div>

    <!-- Carte SLAM avec note -->
    <h3 class="neon-text" data-variant="slam">SLAM</h3>
    <div class="slam-wrapper">
      <div class="card card--slam">
        <slot name="slam">
          <!-- Contenu SLAM -->
        </slot>
      </div>
      <span class="slam-note">← Mon option favorite</span>
    </div>
  </div>
</template>

<style scoped>
/* ============================================
   CUSTOM PROPERTIES (Design Tokens)
   ============================================ */
:root {
  --sidebar-width: 240px;
  --card-max-width: 800px;
  --card-bg: rgba(20, 20, 20, 0.85);
  --card-radius: 12px;
  --card-padding: 25px 35px;

  /* Couleurs des variantes */
  --color-primary: #ff0000;
  --color-primary-light: #ff4d4d;
  --color-sisr: #ff00cc;
  --color-sisr-light: #ff66d9;
  --color-slam: #00ff00;
  --color-slam-light: #66ff66;

  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
}

/* ============================================
   LAYOUT
   ============================================ */
.apropos-container {
  margin-left: var(--sidebar-width);
  padding: 40px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #ffffff;
}

/* ============================================
   NEON TEXT — Classe unique + variantes via data-variant
   Supprime la duplication des 3 anciennes classes
   ============================================ */
.neon-text {
  --neon-color: var(--color-primary);
  --neon-color-light: var(--color-primary-light);

  background: linear-gradient(
    270deg,
    var(--neon-color),
    #ffffff,
    var(--neon-color-light),
    #ffffff
  );
  background-size: 600%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* Fallback standard */
  animation: neonFlow 6s linear infinite;
  font-weight: bold;
  will-change: background-position;
}

/* Variantes — on ne change QUE les couleurs */
.neon-text[data-variant="sisr"] {
  --neon-color: var(--color-sisr);
  --neon-color-light: var(--color-sisr-light);
}

.neon-text[data-variant="slam"] {
  --neon-color: var(--color-slam);
  --neon-color-light: var(--color-slam-light);
}

h2.neon-text {
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

/* ============================================
   ANIMATION
   ============================================ */
@keyframes neonFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ============================================
   CARDS — Base + variantes
   ============================================ */
.card {
  --card-color: var(--color-primary);

  position: relative;
  max-width: var(--card-max-width);
  margin: 25px auto;
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  background: var(--card-bg);
  text-align: left;
  line-height: 1.6;
  overflow: hidden;
  border: 1px solid var(--card-color);
  box-shadow: 0 0 20px color-mix(in srgb, var(--card-color) 20%, transparent);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-medium);
}

/* Halo interne subtil */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--card-radius);
  background: linear-gradient(145deg, color-mix(in srgb, var(--card-color) 27%, transparent), transparent);
  padding: 2px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Variantes — uniquement la couleur */
.card--sisr {
  --card-color: var(--color-sisr);
}

.card--slam {
  --card-color: var(--color-slam);
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
}

/* ============================================
   SLAM NOTE (texte flottant)
   ============================================ */
.slam-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slam-note {
  position: absolute;
  right: clamp(20px, 5vw, 90px); /* Responsive au lieu de valeur fixe */
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  white-space: nowrap;
  font-style: italic;
  will-change: transform, text-shadow;
  animation:
    slide-wiggle 2s ease-in-out infinite,
    glow-pulse 3s ease-in-out infinite;
}

@keyframes slide-wiggle {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-6px); }
}

@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 0 0 6px var(--color-slam), 0 0 10px rgba(0, 255, 0, 0.4);
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 10px #00ffee, 0 0 20px rgba(0, 255, 238, 0.53);
    opacity: 0.9;
  }
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .slam-note {
    position: static;
    display: block;
    margin-top: 10px;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .apropos-container {
    margin-left: 0;
    padding: 20px;
  }

  .card {
    padding: 15px 20px;
  }
}

/* Accessibilité : désactive les animations si l'utilisateur le demande */
@media (prefers-reduced-motion: reduce) {
  .neon-text,
  .slam-note {
    animation: none;
  }

  .card {
    transition: none;
  }
}
</style>








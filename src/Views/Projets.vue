<template>
  <section class="projects-page" aria-labelledby="projects-title">
    <header class="page-header">
      <p class="eyebrow">RÉALISATIONS</p>
      <h1 id="projects-title">Projet</h1>
      <p class="page-intro">Un projet web réalisé et présenté ici.</p>
    </header>

    <article class="featured-project" :class="{ expanded: detailsOpen }">
      <div class="project-visual">
        <div class="visual-grid" aria-hidden="true"></div>
        <img
          class="project-logo"
          src="https://www.lgsh.fr/wp-content/uploads/2023/05/cropped-new_logo.jpg"
          alt="Logo de GSH Social"
        >
        <span class="project-index">01 / 01</span>
        <span class="visual-label">PROJET WEB</span>
      </div>

      <div class="project-content">
        <div class="project-meta">
          <span class="project-status"><span></span> En ligne</span>
          <span class="project-category">Site web</span>
        </div>

        <h2>GSH Social</h2>
        <p class="project-summary">
          Découvre le site GSH Social et son univers directement dans sa version en ligne.
        </p>

        <Transition name="details">
          <div v-if="detailsOpen" class="project-details">
            <p>
              Le projet est consultable sur son site dédié. Ouvre-le pour parcourir son contenu et voir le résultat en situation réelle.
            </p>
            <dl>
              <div>
                <dt>Type</dt>
                <dd>Projet web</dd>
              </div>
              <div>
                <dt>Accès</dt>
                <dd>Site en ligne</dd>
              </div>
            </dl>
          </div>
        </Transition>

        <div class="project-actions">
          <a class="visit-link" href="https://david-533.github.io/gsh-social/" target="_blank" rel="noopener noreferrer">
            Visiter le projet
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
          <button
            class="details-toggle"
            type="button"
            :aria-expanded="detailsOpen"
            @click="detailsOpen = !detailsOpen"
          >
            {{ detailsOpen ? 'Masquer les détails' : 'Voir les détails' }}
            <svg viewBox="0 0 24 24" :class="{ rotated: detailsOpen }" aria-hidden="true">
              <path d="m7 10 5 5 5-5" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const detailsOpen = ref(false)
</script>

<style scoped>
.projects-page {
  width: min(100%, 1180px);
  min-height: 100vh;
  margin: 0 auto;
  padding: clamp(36px, 5vw, 64px) clamp(16px, 4vw, 48px) 72px;
  color: #f4f5f4;
}

.page-header {
  margin-bottom: 32px;
}

.eyebrow {
  margin: 0 0 10px;
  color: #9ebbb3;
  font-family: 'Roboto Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
}

.page-header h1 {
  margin: 0;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 30px;
  font-weight: 600;
}

.page-intro {
  margin: 10px 0 0;
  color: #aeb7b3;
  font: 14px/1.6 Arial, sans-serif;
}

.featured-project {
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.1fr);
  min-height: 390px;
  overflow: hidden;
  border: 1px solid rgba(194, 208, 202, 0.17);
  border-radius: 8px;
  background: rgba(13, 17, 16, 0.88);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.2);
  animation: project-enter 600ms ease both;
}

.project-visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 320px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 45%, rgba(158, 187, 179, 0.18), transparent 42%),
    linear-gradient(145deg, #17211d, #0b0f0e 70%);
}

.visual-grid {
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background-image: linear-gradient(rgba(194, 208, 202, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(194, 208, 202, 0.16) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(to bottom, #000, transparent 92%);
  transition: transform 500ms ease, opacity 300ms ease;
}

.featured-project:hover .visual-grid {
  transform: scale(1.06);
  opacity: 0.28;
}

.project-logo {
  position: relative;
  z-index: 1;
  width: min(48%, 220px);
  aspect-ratio: 1;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.4);
  transition: transform 350ms ease, box-shadow 350ms ease;
}

.featured-project:hover .project-logo {
  transform: translateY(-5px) rotate(-1deg);
  box-shadow: 0 26px 65px rgba(0, 0, 0, 0.48);
}

.project-index,
.visual-label {
  position: absolute;
  z-index: 2;
  color: rgba(233, 239, 236, 0.76);
  font: 10px 'Roboto Mono', monospace;
}

.project-index {
  top: 20px;
  left: 22px;
}

.visual-label {
  right: 22px;
  bottom: 20px;
  letter-spacing: 1px;
}

.project-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
  padding: clamp(24px, 4vw, 48px);
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 18px;
  color: #aeb7b3;
  font: 11px 'Roboto Mono', monospace;
}

.project-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #c7d5ce;
}

.project-status span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #9ebbb3;
  box-shadow: 0 0 8px rgba(158, 187, 179, 0.35);
}

.project-category {
  padding-left: 18px;
  border-left: 1px solid rgba(194, 208, 202, 0.22);
}

.project-content h2 {
  margin: 22px 0 0;
  color: #fff;
  font: 600 clamp(26px, 4vw, 38px)/1.2 'Roboto Mono', monospace;
}

.project-summary,
.project-details p {
  max-width: 480px;
  color: #b2b8b5;
  font: 15px/1.7 Arial, sans-serif;
}

.project-summary {
  margin: 16px 0 0;
}

.project-details {
  width: 100%;
  max-width: 480px;
  overflow: hidden;
}

.project-details p {
  margin: 14px 0 18px;
  font-size: 14px;
}

.project-details dl {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 14px 0;
  border-top: 1px solid rgba(194, 208, 202, 0.15);
  border-bottom: 1px solid rgba(194, 208, 202, 0.15);
}

.project-details dl div {
  display: grid;
  gap: 5px;
}

.project-details dt {
  color: #87938d;
  font: 10px 'Roboto Mono', monospace;
  text-transform: uppercase;
}

.project-details dd {
  margin: 0;
  color: #e2e8e4;
  font: 13px Arial, sans-serif;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 26px;
}

.visit-link,
.details-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 44px;
  font: 600 13px Arial, sans-serif;
  text-decoration: none;
  cursor: pointer;
}

.visit-link {
  padding: 0 16px;
  border: 1px solid #9ebbb3;
  border-radius: 5px;
  background: #9ebbb3;
  color: #101513;
  transition: transform 180ms ease, background 180ms ease;
}

.visit-link:hover {
  transform: translateY(-2px);
  background: #b7ccc4;
}

.visit-link svg,
.details-toggle svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.details-toggle {
  padding: 0;
  border: 0;
  background: transparent;
  color: #b8c2bd;
  transition: color 160ms ease;
}

.details-toggle:hover {
  color: #fff;
}

.details-toggle svg {
  transition: transform 180ms ease;
}

.details-toggle svg.rotated {
  transform: rotate(180deg);
}

.details-enter-active,
.details-leave-active {
  transition: opacity 200ms ease, max-height 250ms ease;
  max-height: 180px;
}

.details-enter-from,
.details-leave-to {
  max-height: 0;
  opacity: 0;
}

@keyframes project-enter {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 720px) {
  .projects-page {
    padding: 34px 18px 48px;
  }

  .featured-project {
    grid-template-columns: 1fr;
  }

  .project-visual {
    min-height: 250px;
  }

  .project-logo {
    width: 150px;
  }

  .project-content {
    padding: 24px 20px 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-project {
    animation: none;
  }

  .project-logo,
  .visual-grid,
  .visit-link,
  .details-toggle svg {
    transition: none;
  }
}
</style>
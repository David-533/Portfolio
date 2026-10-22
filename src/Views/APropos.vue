<template>
  <div class="about-page">
    <header class="page-heading">
      <p class="eyebrow">À PROPOS</p>
      <h1>Du code aux idées intelligentes.</h1>
      <p class="heading-copy">
        Je m’appelle David. Après un BTS SIO option SLAM, je poursuis mon parcours en troisième année de Bachelor Développeur web, mobile & IA à Digital Campus Paris.
      </p>
      <div class="education-line" aria-label="Mon parcours de formation">
        <span>BTS SIO · SLAM</span>
        <span class="line-arrow" aria-hidden="true">→</span>
        <span class="current-study">Bachelor 3 · Web, mobile & IA</span>
      </div>
    </header>

    <section class="study-section" aria-labelledby="study-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">MON BACHELOR</p>
          <h2 id="study-title">Deux disciplines, un même objectif.</h2>
        </div>
        <p class="section-intro">Concevoir des expériences numériques utiles, de l’interface aux fonctionnalités intelligentes.</p>
      </div>

      <div class="study-layout">
        <div class="study-tabs" role="tablist" aria-label="Découvrir les domaines de formation">
          <button
            v-for="course in courses"
            :key="course.id"
            :id="`${course.id}-tab`"
            class="study-tab"
            :class="{ active: activeCourse === course.id }"
            type="button"
            role="tab"
            :aria-selected="activeCourse === course.id"
            :aria-controls="`${course.id}-panel`"
            @click="selectCourse(course.id)"
          >
            <span class="tab-index">{{ course.index }}</span>
            <span class="tab-label">
              <strong>{{ course.label }}</strong>
              <small>{{ course.shortDescription }}</small>
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </button>
        </div>

        <article
          :key="activeCourse"
          :id="`${activeCourse}-panel`"
          class="course-panel"
          role="tabpanel"
          :aria-labelledby="`${activeCourse}-tab`"
          tabindex="0"
        >
          <div class="course-copy">
              <p class="course-kicker">{{ selectedCourse.kicker }}</p>
              <h3>{{ selectedCourse.title }}</h3>
              <p class="course-description">{{ selectedCourse.description }}</p>
              <ul class="course-topics">
                <li v-for="topic in selectedCourse.topics" :key="topic">{{ topic }}</li>
              </ul>
              <div class="course-footer">
                <span>{{ selectedCourse.outcomeLabel }}</span>
                <div class="topic-tags">
                  <span v-for="tag in selectedCourse.tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
          </div>

          <div v-if="activeCourse === 'development'" class="dev-scene" aria-label="Animation illustrative : du code vers un aperçu mobile">
              <div class="editor-window">
                <div class="window-bar">
                  <span></span><span></span><span></span>
                  <small>interface.vue</small>
                </div>
                <div class="code-lines" aria-hidden="true">
                  <span class="code-line line-one"><i>01</i><b>&lt;template&gt;</b></span>
                  <span class="code-line line-two"><i>02</i><em>&nbsp;&nbsp;&lt;section</em> class="app"&gt;</span>
                  <span class="code-line line-three"><i>03</i>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Bonjour&lt;/h1&gt;</span>
                  <span class="code-line line-four"><i>04</i>&nbsp;&nbsp;&lt;/section&gt;</span>
                  <span class="code-line line-five"><i>05</i><b>&lt;/template&gt;</b></span>
                  <span class="typing-caret"></span>
                </div>
              </div>
              <div class="build-connector" aria-hidden="true"><span></span></div>
              <div class="phone-preview" aria-hidden="true">
                <div class="phone-speaker"></div>
                <div class="preview-top"><span>MON APP</span><span>•••</span></div>
                <div class="preview-art"><span></span><i></i></div>
                <div class="preview-title">Une idée,<br>une interface.</div>
                <div class="preview-copy"></div>
                <div class="preview-button">Découvrir <span>→</span></div>
                <div class="preview-nav"><span></span><span></span><span></span></div>
              </div>
              <span class="scene-caption">CODE <span>→</span> EXPÉRIENCE</span>
          </div>

          <div v-else class="ai-scene" aria-label="Illustration du cycle d’un système d’intelligence artificielle">
              <div class="ai-orbit orbit-one"></div>
              <div class="ai-orbit orbit-two"></div>
              <div class="ai-core"><span>IA</span><i></i></div>
              <div class="ai-node node-data"><span class="node-symbol">▤</span><small>Données</small></div>
              <div class="ai-node node-model"><span class="node-symbol">◇</span><small>Modèle</small></div>
              <div class="ai-node node-result"><span class="node-symbol">✳</span><small>Résultat</small></div>
              <span class="ai-particle particle-one"></span>
              <span class="ai-particle particle-two"></span>
              <span class="scene-caption">DONNÉES <span>→</span> MODÈLE <span>→</span> USAGE</span>
          </div>
        </article>
      </div>
    </section>

    <section class="approach-section" aria-labelledby="approach-title">
      <p class="eyebrow">MON APPROCHE</p>
      <h2 id="approach-title">Apprendre, expérimenter, améliorer.</h2>
      <p>
        Le développement donne une forme concrète aux idées ; l’intelligence artificielle ouvre de nouvelles façons de les enrichir. Je m’intéresse à la manière de réunir les deux avec curiosité, méthode et attention aux besoins des utilisateurs.
      </p>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const activeCourse = ref('development')

const courses = [
  {
    id: 'development',
    index: '01',
    label: 'Développement',
    shortDescription: 'Web & mobile',
    kicker: 'CONSTRUIRE DES PRODUITS NUMÉRIQUES',
    title: 'Du besoin à l’application.',
    description: 'La formation en développement consiste à transformer une idée ou un besoin en produit numérique. Elle aborde la conception d’interfaces, la programmation côté client et serveur, puis la mise en ligne et l’amélioration du produit.',
    topics: ['Concevoir des interfaces accessibles et adaptées aux écrans', 'Développer des fonctionnalités web et mobiles', 'Relier une interface à des données et des services'],
    outcomeLabel: 'Du prototype au produit',
    tags: ['Web', 'Mobile', 'Interfaces', 'Applications'],
  },
  {
    id: 'artificial-intelligence',
    index: '02',
    label: 'Intelligence artificielle',
    shortDescription: 'Comprendre & intégrer',
    kicker: 'EXPLORER LES USAGES DE L’IA',
    title: 'Rendre les outils plus intelligents.',
    description: 'La formation en IA aide à comprendre comment les systèmes exploitent des données pour produire des prédictions, des recommandations ou du contenu. Elle permet aussi d’étudier comment intégrer ces capacités dans une application et d’en évaluer les limites.',
    topics: ['Découvrir les données et les modèles d’IA', 'Intégrer des services intelligents dans une application', 'Prendre en compte la fiabilité, les biais et la confidentialité'],
    outcomeLabel: 'De la donnée à l’usage',
    tags: ['Données', 'Modèles', 'Intégration', 'Responsabilité'],
  },
]

const selectedCourse = computed(() => courses.find((course) => course.id === activeCourse.value) || courses[0])

const selectCourse = (courseId) => {
  activeCourse.value = courseId
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');

.about-page {
  width: min(100%, 1180px);
  min-height: 100vh;
  margin: 0 auto;
  padding: clamp(36px, 5vw, 64px) clamp(16px, 4vw, 48px) 72px;
  color: #f4f5f4;
}

.page-heading {
  max-width: 810px;
  margin-bottom: clamp(48px, 8vw, 82px);
}

.eyebrow {
  margin: 0 0 12px;
  color: #9ebbb3;
  font: 600 11px 'Roboto Mono', monospace;
  letter-spacing: 1px;
}

.page-heading h1 {
  max-width: 760px;
  margin: 0;
  color: #fff;
  font: 600 42px/1.18 'Roboto Mono', monospace;
}

.heading-copy {
  max-width: 700px;
  margin: 18px 0 0;
  color: #b8c0bc;
  font: 16px/1.75 Arial, sans-serif;
}

.education-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 14px;
  margin-top: 24px;
  color: #c5cec9;
  font: 12px 'Roboto Mono', monospace;
}

.education-line span:not(.line-arrow) {
  padding: 9px 11px;
  border: 1px solid rgba(194, 208, 202, 0.17);
  border-radius: 4px;
  background: rgba(13, 17, 16, 0.65);
}

.education-line .current-study {
  border-color: rgba(158, 187, 179, 0.38) !important;
  color: #d6e2dc;
}

.line-arrow {
  color: #9ebbb3;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 24px;
}

.section-heading h2,
.approach-section h2 {
  margin: 0;
  color: #fff;
  font: 600 24px/1.3 'Roboto Mono', monospace;
}

.section-intro {
  max-width: 380px;
  margin: 0;
  color: #aeb7b3;
  font: 13px/1.6 Arial, sans-serif;
}

.study-layout {
  display: grid;
  grid-template-columns: minmax(190px, 0.34fr) minmax(0, 1fr);
  align-items: stretch;
  gap: 14px;
}

.study-tabs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.study-tab {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 10px;
  min-height: 78px;
  padding: 13px 12px;
  border: 1px solid rgba(194, 208, 202, 0.14);
  border-radius: 5px;
  background: rgba(13, 17, 16, 0.52);
  color: #adb7b1;
  text-align: left;
  cursor: pointer;
  transition: border-color 180ms ease, background 180ms ease, color 180ms ease;
}

.study-tab:hover,
.study-tab.active {
  border-color: rgba(158, 187, 179, 0.45);
  background: rgba(158, 187, 179, 0.1);
  color: #fff;
}

.tab-index {
  align-self: start;
  padding-top: 2px;
  color: #819089;
  font: 10px 'Roboto Mono', monospace;
}

.tab-label {
  display: grid;
  gap: 5px;
  min-width: 0;
}

.tab-label strong {
  color: inherit;
  font: 600 13px/1.4 'Roboto Mono', monospace;
}

.tab-label small {
  color: #929d97;
  font: 12px Arial, sans-serif;
}

.study-tab > svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
  transition: transform 180ms ease;
}

.study-tab.active > svg {
  transform: translateX(2px);
}

.course-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.8fr);
  min-height: 380px;
  overflow: hidden;
  border: 1px solid rgba(194, 208, 202, 0.18);
  border-radius: 6px;
  background: rgba(13, 17, 16, 0.83);
  outline: none;
  animation: panel-enter 260ms ease both;
}

.course-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(22px, 3vw, 36px);
}

.course-kicker {
  margin: 0 0 10px;
  color: #9ebbb3;
  font: 10px 'Roboto Mono', monospace;
  letter-spacing: 0.5px;
}

.course-copy h3 {
  margin: 0;
  color: #fff;
  font: 600 clamp(19px, 2.2vw, 24px)/1.35 'Roboto Mono', monospace;
}

.course-description {
  margin: 14px 0 0;
  color: #b4bdb8;
  font: 13px/1.7 Arial, sans-serif;
}

.course-topics {
  display: grid;
  gap: 9px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}

.course-topics li {
  position: relative;
  padding-left: 16px;
  color: #c4ccc8;
  font: 12px/1.5 Arial, sans-serif;
}

.course-topics li::before {
  content: '';
  position: absolute;
  top: 7px;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #9ebbb3;
}

.course-footer {
  display: grid;
  gap: 10px;
  width: 100%;
  margin-top: 22px;
  padding-top: 15px;
  border-top: 1px solid rgba(194, 208, 202, 0.14);
}

.course-footer > span {
  color: #929d97;
  font: 10px 'Roboto Mono', monospace;
}

.topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.topic-tags span {
  padding: 5px 7px;
  border: 1px solid rgba(194, 208, 202, 0.15);
  border-radius: 3px;
  color: #c3cdc7;
  font: 10px 'Roboto Mono', monospace;
}

.course-change-enter-active,
.course-change-leave-active {
  transition: opacity 150ms ease, transform 150ms ease;
}

.course-change-enter-from {
  opacity: 0;
  transform: translateY(5px);
}

.course-change-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.dev-scene,
.ai-scene {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 100%;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 50%, rgba(95, 123, 112, 0.17), transparent 65%), #101614;
}

.dev-scene::before,
.ai-scene::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.15;
  background-image: linear-gradient(rgba(194, 208, 202, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(194, 208, 202, 0.18) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, #000, transparent 88%);
}

.editor-window {
  position: absolute;
  top: 20%;
  left: 6%;
  z-index: 2;
  width: 68%;
  overflow: hidden;
  border: 1px solid rgba(194, 208, 202, 0.22);
  border-radius: 5px;
  background: #0d1210;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  animation: editor-float 5s ease-in-out infinite;
}

.window-bar {
  display: flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 9px;
  border-bottom: 1px solid rgba(194, 208, 202, 0.12);
  background: rgba(255, 255, 255, 0.025);
}

.window-bar > span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #738078;
}

.window-bar small {
  margin-left: 7px;
  color: #8c9991;
  font: 9px 'Roboto Mono', monospace;
}

.code-lines {
  position: relative;
  display: grid;
  gap: 8px;
  min-height: 146px;
  padding: 17px 10px 18px;
  overflow: hidden;
  color: #c4d0c9;
  font: 9px 'Roboto Mono', monospace;
}

.code-line {
  display: block;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  animation: type-line 750ms steps(24, end) forwards;
}

.line-one { animation-delay: 300ms; }
.line-two { animation-delay: 900ms; }
.line-three { animation-delay: 1500ms; }
.line-four { animation-delay: 2100ms; }
.line-five { animation-delay: 2700ms; }

.code-line i {
  margin-right: 8px;
  color: #5d6b63;
  font-style: normal;
}

.code-line b {
  color: #9ebbb3;
  font-weight: 500;
}

.code-line em {
  color: #c6a48a;
  font-style: normal;
}

.typing-caret {
  position: absolute;
  bottom: 17px;
  left: 108px;
  width: 5px;
  height: 11px;
  background: #b9d0c5;
  opacity: 0;
  animation: caret-on 400ms 3.1s steps(2, start) infinite;
}

.build-connector {
  position: absolute;
  top: 54%;
  left: 54%;
  z-index: 3;
  width: 22%;
  height: 1px;
  overflow: hidden;
  transform: rotate(-34deg);
  transform-origin: left center;
  background: rgba(158, 187, 179, 0.23);
}

.build-connector span {
  display: block;
  width: 36%;
  height: 100%;
  background: #b8d0c5;
  box-shadow: 0 0 8px #b8d0c5;
  animation: connector-flow 2.4s ease-in-out infinite;
}

.phone-preview {
  position: absolute;
  right: 7%;
  bottom: 17%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  width: 34%;
  min-width: 100px;
  aspect-ratio: 0.58;
  padding: 18px 10px 10px;
  overflow: hidden;
  border: 2px solid #58665e;
  border-radius: 13px;
  background: #e2e7e3;
  color: #1c2922;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.44);
  animation: phone-appear 700ms 1.4s both, phone-float 4s 2.2s ease-in-out infinite;
}

.phone-speaker {
  position: absolute;
  top: 6px;
  left: 42%;
  width: 18%;
  height: 3px;
  border-radius: 3px;
  background: #7b8780;
}

.preview-top {
  display: flex;
  justify-content: space-between;
  color: #506057;
  font: 6px 'Roboto Mono', monospace;
}

.preview-art {
  position: relative;
  height: 31%;
  margin-top: 9px;
  overflow: hidden;
  border-radius: 4px;
  background: linear-gradient(145deg, #9fb4a7, #52685b);
}

.preview-art span {
  position: absolute;
  right: -10%;
  bottom: -26%;
  width: 90%;
  height: 80%;
  border-radius: 50% 50% 0 0;
  background: #34463a;
}

.preview-art i {
  position: absolute;
  top: 18%;
  left: 18%;
  width: 26%;
  height: 26%;
  border-radius: 50%;
  background: #d6ded8;
  animation: preview-glow 2s ease-in-out infinite alternate;
}

.preview-title {
  margin-top: 10px;
  font: 600 8px/1.4 'Roboto Mono', monospace;
}

.preview-copy {
  width: 75%;
  height: 3px;
  margin-top: 7px;
  border-radius: 3px;
  background: #a8b2ac;
  box-shadow: 0 6px 0 #bdc6c0;
}

.preview-button {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding: 6px;
  border-radius: 3px;
  background: #647c6c;
  color: #fff;
  font: 6px Arial, sans-serif;
}

.preview-nav {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 7px;
}

.preview-nav span {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #7a8980;
}

.scene-caption {
  position: absolute;
  bottom: 12px;
  left: 16px;
  color: #aebbb4;
  font: 8px 'Roboto Mono', monospace;
  letter-spacing: 0.5px;
}

.scene-caption span {
  padding: 0 4px;
  color: #9ebbb3;
}

.ai-orbit {
  position: absolute;
  width: 170px;
  height: 170px;
  border: 1px solid rgba(158, 187, 179, 0.25);
  border-radius: 50%;
  animation: orbit-spin 18s linear infinite;
}

.orbit-two {
  width: 240px;
  height: 240px;
  border-style: dashed;
  opacity: 0.48;
  animation-direction: reverse;
}

.ai-core {
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border: 1px solid rgba(185, 208, 197, 0.65);
  border-radius: 50%;
  background: #1a2520;
  color: #dce8e1;
  font: 15px 'Roboto Mono', monospace;
  box-shadow: 0 0 28px rgba(158, 187, 179, 0.17);
  animation: core-pulse 3s ease-in-out infinite;
}

.ai-core i {
  position: absolute;
  inset: -7px;
  border: 1px solid rgba(158, 187, 179, 0.22);
  border-radius: 50%;
}

.ai-node {
  position: absolute;
  z-index: 3;
  display: grid;
  place-items: center;
  gap: 3px;
  width: 54px;
  height: 54px;
  border: 1px solid rgba(194, 208, 202, 0.24);
  border-radius: 50%;
  background: #141b18;
  color: #b8c8bf;
  animation: node-float 4s ease-in-out infinite;
}

.ai-node small {
  font: 7px 'Roboto Mono', monospace;
}

.node-symbol {
  font-size: 15px;
  line-height: 1;
}

.node-data { top: 18%; left: 16%; }
.node-model { top: 22%; right: 13%; animation-delay: -1.2s; }
.node-result { right: 17%; bottom: 20%; animation-delay: -2.2s; }

.ai-particle {
  position: absolute;
  z-index: 4;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #d2e0d8;
  box-shadow: 0 0 9px rgba(210, 224, 216, 0.8);
  animation: particle-drift 4.5s ease-in-out infinite;
}

.particle-one { top: 35%; left: 28%; }
.particle-two { right: 29%; bottom: 34%; animation-delay: -2s; }

.approach-section {
  max-width: 760px;
  margin-top: clamp(50px, 8vw, 84px);
  padding: 26px 0 0;
  border-top: 1px solid rgba(194, 208, 202, 0.16);
}

.approach-section h2 {
  margin: 0;
  color: #fff;
  font: 600 19px 'Roboto Mono', monospace;
}

.approach-section > p:last-child {
  margin: 12px 0 0;
  color: #adb7b1;
  font: 14px/1.75 Arial, sans-serif;
}

@keyframes type-line { to { width: 100%; } }
@keyframes panel-enter { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } }
@keyframes caret-on { to { opacity: 1; } }
@keyframes connector-flow { 0% { transform: translateX(-120%); } 100% { transform: translateX(320%); } }
@keyframes editor-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
@keyframes phone-appear { from { opacity: 0; transform: translateY(12px) scale(0.94); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes phone-float { 0%, 100% { translate: 0 0; } 50% { translate: 0 -5px; } }
@keyframes preview-glow { to { opacity: 0.35; transform: scale(0.8); } }
@keyframes orbit-spin { to { transform: rotate(360deg); } }
@keyframes core-pulse { 50% { box-shadow: 0 0 38px rgba(158, 187, 179, 0.3); } }
@keyframes node-float { 0%, 100% { translate: 0 0; } 50% { translate: 0 -6px; } }
@keyframes particle-drift { 0%, 100% { translate: 0 0; opacity: 0.45; } 50% { translate: 12px -8px; opacity: 1; } }

@media (max-width: 900px) {
  .study-layout {
    grid-template-columns: 1fr;
  }

  .study-tabs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .course-panel {
    grid-template-columns: minmax(0, 1fr) minmax(210px, 0.8fr);
  }
}

@media (max-width: 640px) {
  .about-page {
    padding: 34px 18px 48px;
  }

  .page-heading {
    margin-bottom: 48px;
  }

  .heading-copy {
    font-size: 14px;
  }

  .page-heading h1 {
    font-size: 30px;
  }

  .section-heading h2 {
    font-size: 20px;
  }

  .education-line {
    align-items: flex-start;
    flex-direction: column;
  }

  .line-arrow {
    padding-left: 12px;
    transform: rotate(90deg);
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .study-tabs {
    grid-template-columns: 1fr;
  }

  .study-tab {
    min-height: 66px;
  }

  .course-panel {
    grid-template-columns: 1fr;
  }

  .dev-scene,
  .ai-scene {
    min-height: 290px;
  }

  .editor-window {
    left: 7%;
    width: 64%;
  }

  .phone-preview {
    right: 9%;
    width: 31%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
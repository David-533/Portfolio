<template>
  <div id="app">
    <MenuGauche />
    <main class="main-content" :class="{ 'has-neon-background': route.path !== '/accueil' }">
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import MenuGauche from './components/MenuGauche.vue'

const route = useRoute()
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  min-width: 320px;
  background-color: #000;
}

body {
  margin: 0;
  background-color: black;
  color: white;
  min-width: 320px;
  min-height: 100vh;
}

.main-content {
  position: relative;
  isolation: isolate;
  min-width: 0;
  min-height: 100vh;
  margin-left: 250px;
}

.main-content.has-neon-background::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 15% 20%, rgba(91, 153, 137, 0.22), transparent 42%),
    radial-gradient(ellipse at 88% 48%, rgba(143, 105, 133, 0.15), transparent 43%),
    radial-gradient(ellipse at 48% 100%, rgba(91, 110, 151, 0.15), transparent 45%),
    #050708;
  background-size: 160% 160%;
  animation: neon-background 12s ease-in-out infinite alternate;
}

.main-content.has-neon-background .section,
.main-content.has-neon-background .apropos-container,
.main-content.has-neon-background .section-contact,
.main-content.has-neon-background .photo_article {
  background: transparent !important;
}

@keyframes neon-background {
  0% { background-position: 0% 0%; }
  50% { background-position: 60% 40%; }
  100% { background-position: 100% 100%; }
}

img {
  max-width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .main-content.has-neon-background::before {
    animation: none;
  }
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding-top: 58px;
  }
}
</style>
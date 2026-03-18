<template>
  <div id="app">
    <MenuGauche />
    <router-view />
  </div>
</template>

<script setup>
import MenuGauche from './components/MenuGauche.vue'
</script>

<style>
#app {
  margin-left: 250px;
}

body {
  margin: 0;
  background-color: black;
  color: white;
}

/* Responsive mobile */
@media (max-width: 768px) {
  #app {
    margin-left: 0;
    margin-top: 100px;
  }
}
</style>

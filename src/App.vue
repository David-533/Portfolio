<template>
  <div id="app">
    <MenuGauche />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script setup>
import MenuGauche from './components/MenuGauche.vue'
</script>

<style>
body {
  margin: 0;
  background-color: black;
  color: white;
}
</style>
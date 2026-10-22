<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/accueil">Accueil</router-link></li>
      <li><router-link to="/apropos">A Propos</router-link></li>
      <li><router-link to="/certifications">Mes Certifications</router-link></li>
      <li><router-link to="/competences">Mes Compétences</router-link></li>
      <li><router-link to="/parcours">Mon Parcours</router-link></li>
      <li><router-link to="/projets">Projets</router-link></li>
      <li><router-link to="/veille">Veille Technologique</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px; /* largeur élargie */
  height: 100vh;
  height: 100dvh;
  background-color: #111;
  padding-top: 60px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
  overflow-y: auto;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin: 25px 0; /* espace un peu plus grand entre les liens */
  text-align: center;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 12px 0; /* plus d’espace vertical pour cliquer */
  transition: none;
}

.navbar a:hover,
.router-link-active {
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .navbar {
    width: 100%;
    height: 58px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  }

  .navbar ul {
    display: flex;
    height: 100%;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
  }

  .navbar ul::-webkit-scrollbar {
    display: none;
  }

  .navbar li {
    flex: 0 0 auto;
    margin: 0;
  }

  .navbar a {
    display: flex;
    align-items: center;
    min-height: 58px;
    padding: 0 14px;
    font-size: 14px;
    white-space: nowrap;
  }
}
</style>



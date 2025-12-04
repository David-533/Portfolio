<template>
  <div class="apropos-container" id="apropos">
    <h2 class="neon-title">A Propos</h2>

    <!-- Bloc présentation -->
    <div class="card intro-card">
      <p>Bonjour, Je m'appelle David.</p>
      <p>
        Je suis actuellement étudiant au lycée Saint Hilaire en deuxième année de BTS SIO
        (Services Informatiques aux Organisations) dans l'option SLAM
        (Solutions Logicielles et Application Métier).
      </p>
      <p>
        Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (BTS SIO)
        est un diplôme de 2 ans qui s'adresse à tous ceux qui veulent se spécifier dans le domaine
        et enrichir ces compétences informatiques en réseau ou en développement.
      </p>
      <p>Le BTS SIO comporte deux catégories :</p>
    </div>

    <!-- Bloc SISR -->
    <div class="card sisr-card">
      <h3 class="neon-sisr">Option SISR</h3>
      <p>
        L’option Solution d’infrastructure, systèmes et réseaux forme des professionnels des réseaux
        et équipements informatiques (installation, maintenance, sécurité). Elle permet de former des
        professionnels capables de concevoir, administrer et sécuriser des réseaux informatiques,
        ainsi que de gérer les serveurs et postes clients.
      </p>
    </div>

    <!-- Bloc SLAM avec texte externe -->
    <div class="slam-wrapper">
      <div class="card slam-card">
        <h3 class="neon-slam">Option SLAM</h3>
        <p>
          L’option Solutions logicielles et applications métiers forme des spécialistes des logiciels
          (rédaction d’un cahier des charges, formulation des besoins et spécifications, développement,
          intégration au sein de la société). Elle permet de former des spécialistes capables de
          concevoir, développer et maintenir des logiciels et applications adaptés aux besoins des entreprises.
        </p>
      </div>
      <span class="slam-note">👈 (la filière que j’ai choisie)</span>
    </div>

    <!-- Bouton CV -->
    <div class="centre-page">
      <a href="'assets/CV David Ramin_Oct 2025.pdf" target="_blank" class="btn-rapport">Mon CV</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "APropos",
};
</script>

<style scoped>
.apropos-container {
  margin-left: 240px;
  padding: 40px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #ffffff;
}

/* --- TITRES AVEC EFFET NÉON ANIMÉ --- */
.neon-title {
  background: linear-gradient(270deg, #ff0000, #ffffff, #ff4d4d, #ffffff);
  background-size: 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: neonFlow 6s linear infinite;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

.neon-sisr {
  background: linear-gradient(270deg, #ff00cc, #ffffff, #ff66d9, #ffffff);
  background-size: 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: neonFlow 6s linear infinite;
  text-shadow: 0 0 10px rgba(255, 0, 204, 0.4), 0 0 20px rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

.neon-slam {
  background: linear-gradient(270deg, #00ff00, #ffffff, #66ff66, #ffffff);
  background-size: 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: neonFlow 6s linear infinite;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

/* --- Animation du dégradé qui défile --- */
@keyframes neonFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

h2.neon-title {
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

/* --- STYLE DES BLOCS --- */
.card {
  position: relative;
  max-width: 800px;
  margin: 25px auto;
  padding: 25px 35px;
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.85);
  text-align: left;
  line-height: 1.6;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

/* Halo externe subtil */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 2px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Variantes colorées */
.intro-card {
  border: 1px solid #ff0000;
  box-shadow: 0 0 20px #ff000033;
}
.intro-card::before {
  background: linear-gradient(145deg, #ff000044, transparent);
}

.sisr-card {
  border: 1px solid #ff00cc;
  box-shadow: 0 0 20px #ff00cc33;
}
.sisr-card::before {
  background: linear-gradient(145deg, #ff00cc44, transparent);
}

.slam-card {
  border: 1px solid #00ff00;
  box-shadow: 0 0 20px #00ff0033;
}
.slam-card::before {
  background: linear-gradient(145deg, #00ff0044, transparent);
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
}

/* --- Texte externe à droite du bloc SLAM --- */
.slam-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slam-note {
  position: absolute;
  right: 90px;
  font-family: 'Roboto', sans-serif;
  color: #ffffffcc;
  font-size: 1rem;
  white-space: nowrap;
  text-shadow: 0 0 6px #00ff00;
  font-style: italic;
  animation: slide-wiggle 2s ease-in-out infinite, glow-pulse 3s ease-in-out infinite;
}

/* 🔁 Animation du petit mouvement gauche-droite */
@keyframes slide-wiggle {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-6px); }
}

/* ✨ Animation de lumière subtile */
@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 0 0 6px #00ff00, 0 0 10px #00ff0066;
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 10px #00ffee, 0 0 20px #00ffee88;
    opacity: 0.9;
  }
}

/* Bouton CV */
.centre-page {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.btn-rapport {
  position: relative;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

/* Effet de cadre animé */
.btn-rapport::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border: 2px solid white;
  border-radius: 8px;
  box-sizing: border-box;
  pointer-events: none;
  animation: rotateBorder 2s linear infinite;
}


.btn-rapport:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px white, 0 0 20px white;
}


/* Responsive */
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
</style>








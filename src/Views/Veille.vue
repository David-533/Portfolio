<template>
  <div class="section" id="veilletechnologique">
    <h2>Veille Technologique</h2>
    <p>Qu'est ce que la veille ?</p>
    <p>
      La veille technologique consiste à superviser une évolution permanente dans le milieu professionnel d'un objet innovant ou dispositif. 
      De plus, la veille technologique consiste hautement à surveiller régulièrement son évolution constante, à collecter les informations et à les partager.
    </p>

    <p>Quel outil de préparation de la veille est utilisé ?</p>
    <p>
      Mon outil principal pour cette veille technologique est Google Alerte, un service qui envoie une notification ou une alerte selon le sujet choisi, 
      et renvoie vers la nouvelle page web correspondante.
    </p>

    <p>Sujet de veille : Voiture Autonome</p>
    <p>
      Un véhicule autonome, c'est un véhicule automatisé, de conduite entièrement sécuritaire et capable de se déplacer sans intervention d'un conducteur.
    </p>
  </div>

  <div class="photo_article">
    <div class="article-carte">
      <img src="https://www.presse-citron.net/app/uploads/2024/04/tesla-unsplash-carter-baran.jpg" alt="Tesla Autopilot">
      <p><strong>Article :</strong> Tesla : Autopilot sans Lidar est dangereux.</p>
      <p><strong>Publié le :</strong> 17 mars 2025</p>
      <p><strong>Source :</strong> presse-citron.net</p>
      <p><strong>Résumé :</strong> Tesla utilise uniquement des caméras pour son système Autopilot, contrairement à d’autres marques qui ajoutent des radars et des LiDARs. Une vidéo d’un ingénieur, Mark Rober, montre que cette méthode pose problème.</p>
      <p><a href="https://www.presse-citron.net/cette-video-prouve-que-lautopilot-de-tesla-sans-lidar-est-dangereux/" target="_blank">Cliquez ici pour lire l'article</a></p>
    </div>

    <div class="article-carte">
      <img src="https://images.frandroid.com/wp-content/uploads/2025/01/tesla-model-y-frandroid-my-driving-front.jpg" alt="Tesla décevante">
      <p><strong>Article :</strong> Voiture Tesla décevante.</p>
      <p><strong>Publié le :</strong> 13 mars 2025</p>
      <p><strong>Source :</strong> frandroid.com</p>
      <p><strong>Résumé :</strong> Tesla avait prévu de lancer une voiture électrique abordable, surnommée la "Tesla à 25 000 $", pour concurrencer les modèles chinois à bas prix. Cependant, face à une baisse de la demande et à une sous-utilisation des lignes de production des Model 3 et Model Y, Elon Musk a décidé de réorienter la stratégie.</p>
      <p><a href="https://www.frandroid.com/marques/tesla/2541525_la-future-voiture-electrique-abordable-de-tesla-serait-decevante-voici-les-premiers-details" target="_blank">Cliquez ici pour lire l'article</a></p>
    </div>

<div class="article-carte">
  <img src="https://rouleur-electrique.fr/wp-content/uploads/2025/10/La-conduite-autonome-Tesla-FSD-v14-decoit-les-premieres-a.jpg" alt="Tesla FSD v14 – conduite autonome décevante">
  <p><strong>Article :</strong> La conduite autonome Tesla FSD v14 déçoit les premières attentes</p>
  <p><strong>Publié le :</strong> 17 octobre 2025</p>
  <p><strong>Source :</strong> rouleur-electrique.fr</p>
  <p><strong>Résumé :</strong> La mise à jour FSD v14 de Tesla apporte des progrès dans l’autonomie, mais reste loin des promesses initiales : les conducteurs rapportent encore des interventions fréquentes et des limites matérielles émergent.</p>
  <p><a href="https://rouleur-electrique.fr/la-conduite-autonome-tesla-fsd-v14-decoit-les-premieres-attentes/" target="_blank">Cliquez ici pour lire l’article</a></p>
</div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.section {
  padding-top: 60px; /* réduit au minimum pour coller au haut */
  padding-left: 120px; /* garde le décalage vers la droite */
  padding-right: 80px;
  padding-bottom: 40px;
  color: #fff;
  background: #000;
  text-align: left;
  line-height: 1.6;
  max-width: 1000px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h2 {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffffaa;
  margin-bottom: 20px;
}

p {
  margin-bottom: 15px;
}

/* === Section des articles === */
.photo_article {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  font-family: Arial, sans-serif;
  flex-wrap: wrap;
}

.article-carte {
  width: 230px;
  text-align: center;
  color: #fff;
}

.article-carte img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
  transition: filter 0.3s ease;
}

.article-carte:hover img {
  filter: brightness(0.7);
  cursor: pointer;
}

.article-carte p {
  margin: 4px 0;
  font-size: 14px;
}

.article-carte a {
  color: #00ffff;
  text-decoration: none;
}

.article-carte a:hover {
  text-decoration: underline;
}
</style>

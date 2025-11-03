<template>
<div class="section"  id="veilletechnologique">
    <h2>Veille Technologique</h2>
    <p>Qu'est ce que la veille ?</p>
    La veille technologique consiste à superviser une évolution permanente dans le milieu professionnel d'un objet innovant ou dispositif. De plus, la veille techonologique, consiste hautemenet à surveiller régulièrement son évolution constante, à collecter les informations et à les partager.
    <p>Quel outils de préparation de la veille est utilisé ?</p>
    Mon outils principal pour cette veille technologique est google alerte qui est un service qui envoie une notification ou une alerte de notre sujet correspondant à notre décision et qui renvoie à la nouvelle page web correspondant.
    <p>Sujet de veille : Voiture Autonome</p>
    Un véhicule autonome, c'est un véhicule automatisé, de conduite entièrement sécuritaire et capable de se déplacer sans intervention d'un conducteur
    <br>
</div>

<div class="photo_article">

  <div class="article-carte">
    <img src="https://www.presse-citron.net/app/uploads/2024/04/tesla-unsplash-carter-baran.jpg" alt="Tesla Autopilot">
    <p><strong>Article :</strong> Tesla : Autopilot sans Lidar est dangereux.</p>
    <p><strong>Publié le :</strong> 17 mars 2025</p>
    <p><strong>Source :</strong> presse-citron.net</p>
    <p><strong>Résumé :</strong> Tesla utilise uniquement des caméras pour son système Autopilot, contrairement à d’autres marques qui ajoutent des radars et des LiDARs. Une vidéo d’un ingénieur, Mark Rober, montre que cette méthode pose problème.

Dans des situations faciles, la Tesla détecte bien les obstacles. Mais dès que le temps est mauvais (brouillard, pluie) ou qu’il y a des illusions (comme un mur peint en tunnel), la Tesla ne réagit pas correctement et fonce dedans. Par contre, une voiture avec LiDAR s’arrête toujours à temps.

Le problème, c’est que les caméras "devinent" ce qu’elles voient, alors que le LiDAR mesure vraiment les objets autour. Elon Musk aurait même admis en privé qu’un radar très précis serait mieux que juste des caméras. Pourtant, il refuse toujours d’ajouter ces capteurs, ce qui pourrait empêcher Tesla d’atteindre une conduite autonome complète et sûre.</p>
    <p><a href="https://www.presse-citron.net/cette-video-prouve-que-lautopilot-de-tesla-sans-lidar-est-dangereux/" target="_blank">Cliquez ici pour lire l'article</a></p>
  </div>

  <div class="article-carte">
    <img src="https://images.frandroid.com/wp-content/uploads/2025/01/tesla-model-y-frandroid-my-driving-front.jpg" alt="Tesla décevante">
    <p><strong>Article :</strong> Voiture Tesla décevante.</p>
    <p><strong>Publié le :</strong> 13 mars 2025</p>
    <p><strong>Source :</strong> frandroid.com</p>
    <p><strong>Résumé :</strong> Tesla avait prévu de lancer une voiture électrique abordable, surnommée la "Tesla à 25 000 $", pour concurrencer les modèles chinois à bas prix. Cependant, face à une baisse de la demande et à une sous-utilisation des lignes de production des Model 3 et Model Y, Elon Musk a décidé de réorienter la stratégie. Au lieu de développer de nouveaux modèles, Tesla prévoit de proposer une version simplifiée du Model Y, en supprimant certains équipements pour réduire les coûts. Ce changement de cap pourrait décevoir les consommateurs espérant une voiture électrique Tesla à prix abordable. De plus, cette décision laisse la voie libre aux constructeurs chinois, qui proposent des véhicules électriques à des prix très compétitifs.</p>
    <p><a href="https://www.frandroid.com/marques/tesla/2541525_la-future-voiture-electrique-abordable-de-tesla-serait-decevante-voici-les-premiers-details" target="_blank">Cliquez ici pour lire l'article</a></p>
  </div>

  <div class="article-carte">
    <img src="https://img.static-rmg.be/a/view/q75/w1600/h836/f50.00,50.00/7195806/gettyimages-1398279227-jpg.jpg" alt="Uber">
    <p><strong>Article :</strong> Uber entend proposer en 2026 des voitures autonomes en Europe.</p>
    <p><strong>Publié le :</strong> 5 mai 2025</p>
    <p><strong>Source :</strong> datanews.levif.be</p>
    <p><strong>Résumé :</strong> Uber prévoit de lancer des taxis autonomes en Europe dès 2026, en partenariat avec la société chinoise Momenta. Ce projet marque une étape majeure dans l'expansion mondiale des véhicules autonomes, après des essais réussis aux États-Unis et en Chine. Le service débutera avec des véhicules équipés de conducteurs de sécurité, avant de passer à une conduite entièrement autonome. Les premières villes européennes concernées pourraient inclure des pays comme l'Allemagne, les Pays-Bas et la Suède.

Cette initiative s'inscrit dans la stratégie d'Uber visant à réduire les coûts opérationnels et à répondre à la demande croissante de solutions de transport innovantes.</p>
    <p><a href="https://datanews.levif.be/actualite/innovation/mobilite/uber-entend-proposer-en-2026-des-voitures-autonomes-en-europe/" target="_blank">Cliquez ici pour lire l'article</a></p>
  </div>
</div>

</template>

<script>
</script>

<style scoped>
/* Ton CSS photo_article exact */
.photo_article {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-left: 260px;
  padding: 20px 0;
  font-family: Arial, sans-serif;
  flex-wrap: wrap;
}

.article-carte {
  width: 230px;
  padding: 0; 
  border-radius: 0; 
  background-color: transparent; 
  box-shadow: none; 
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-carte img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
  transition: filter 0.3s ease;
}

.article-carte:hover img {
  filter: blur(2px);
  cursor: pointer;
}

.article-carte p {
  margin: 4px 0;
  font-size: 14px;
  text-align: center;
}
</style>
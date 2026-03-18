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
      <p><strong>Article :</strong> Même Nvidia est impressionné par la conduite autonome de Tesla</p>
      <p><strong>Publié le :</strong> 4 janvier 2026</p>
      <p><strong>Source :</strong> rouleur-electrique.fr</p>
      <p><strong>Résumé :</strong> Un expert de Nvidia affirme que le FSD 14.2.2 de Tesla conduit désormais comme un humain, au point d’être indiscernable, tout en alertant sur la dépendance croissante à ces technologies.</p>
      <p><a href="https://rouleur-electrique.fr/un-expert-nvidia-impressionne-par-la-conduite-autonome-tesla-impossible-de-distinguer-lia-de-lhumain/" target="_blank">Cliquez ici pour lire l'article</a></p>
    </div>

    <div class="article-carte">
      <img src="https://www.presse-citron.net/app/uploads/2024/10/hyundai-wemo.jpg" alt="Tesla décevante">
      <p><strong>Article :</strong> IA, robotique, autonomie : Hyundai prépare une transformation radicale.</p>
      <p><strong>Publié le :</strong> 2 janvier 2026</p>
      <p><strong>Source :</strong> rouleur-electrique.fr</p>
      <p><strong>Résumé :</strong> Hyundai veut rattraper son retard en conduite autonome. Le groupe teste une Ioniq 6 entièrement autonome, multiplie les partenariats (Motional, Waymo) et prépare une stratégie IA/robotique pour devenir un acteur majeur du secteur.</p>
      <p><a href="https://rouleur-electrique.fr/hyundai-vise-lautonomie-totale-pour-rattraper-tesla-et-waymo/#google_vignette" target="_blank">Cliquez ici pour lire l'article</a></p>
    </div>

   <div class="article-carte">
  <img src="https://techcrunch.com/wp-content/uploads/2025/11/Zoox-San-Francisco-closeup-robotaxi.jpg" alt="Sécurité des robotaxis – NHTSA concertation nationale">
  <p><strong>Article :</strong> Sécurité des robotaxis : la NHTSA lance une concertation nationale avec les leaders du secteur</p>
  <p><strong>Publié le :</strong> 7 mars 2026</p>
  <p><strong>Source :</strong> numerama.com</p>
  <p><strong>Résumé :</strong> La NHTSA organise un forum national sur la sécurité des véhicules autonomes, réunissant les PDG de Waymo, Zoox et Aurora. L'objectif : harmoniser les normes fédérales et accélérer le déploiement des robotaxis tout en maintenant une surveillance stricte de la sécurité, alors que plusieurs incidents font encore l'objet d'enquêtes.</p>
  <p><a href="https://www.numerama.com/vroom/2196271-securite-des-robotaxis-la-nhtsa-lance-une-concertation-nationale-avec-les-leaders-du-secteur.html" target="_blank">Cliquez ici pour lire l'article</a></p>
</div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.section {
  padding-top: 60px;
  padding-left: 40px;
  padding-right: 40px;
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

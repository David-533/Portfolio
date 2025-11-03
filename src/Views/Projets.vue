<template>
  <div class="section" id="projets">
    <h2>Projets</h2>
    <div class="parcours-container">
      <div class="parcours-carte">
        <h3>Java</h3>
        <a href="https://docs.google.com/document/d/1aNsgu_0fkoKeeuCAFPIAVcvy-yUxn6NHOTj4kKM45Xk/edit?usp=drive_link" target="_blank" class="image-lien">
          <img :src="java" width="100%" height="500px" class="image-projet">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import JavaImage from '../assets/Java.jpg';

export default {
  name: "Projets",
  data() {
    return {
      javaImage: JavaImage
    };
  },
};
</script>


<style scoped>

.image-lien {
  display: block;
  overflow: hidden;
  position: relative;
}

.image-projet {
  transition: filter 0.3s ease;
  display: block;
  width: 100%;
  height: auto;
}

.image-lien:hover .image-projet {
  filter: blur(3px);
  cursor: pointer;
}

.parcours-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
}

.parcours-carte {
  width: 100%; /* ou 100% si tu veux qu'il prenne toute la largeur disponible */
  max-width: 800px;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px #00ffff55;
  transition: transform 0.3s ease;
  text-align: center;
}

.parcours-carte:hover {
  transform: scale(1.03);
}

.parcours-carte img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.bulle-date {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  color: white;
  background: linear-gradient(270deg, #00ffff, #ff00c8);
  background-size: 800% 800%;
  animation: bulleColorAnim 5s ease infinite;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

@keyframes bulleColorAnim {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Pour tous les titres h1 à h6 */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
}

/* Pour les paragraphes */
p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #dddddd;
}

.parcours-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.parcours-carte {
  position: relative;
  width: 300px;
  min-height: 250px;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px #00ffff55;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  text-align: center;
}

.parcours-carte:hover {
  transform: scale(1.03);
}

.date-bulle {
  background: linear-gradient(90deg, #00ffff, #ff00ff);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  margin: 10px auto;
  animation: bulleAnim 4s infinite linear;
}

@keyframes bulleAnim {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

</style>
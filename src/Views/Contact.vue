<template>
  <section class="section-contact" id="contact">
    <!-- Formulaire -->
    <form id="contact-form" @submit.prevent="sendEmail" novalidate>
      <h2>Contactez-moi</h2>

      <div class="form-group">
        <input type="text" id="name" v-model="name" placeholder=" " required />
        <label for="name">Nom</label>
      </div>

      <div class="form-group">
        <input type="email" id="email" v-model="email" placeholder=" " required />
        <label for="email">Email</label>
      </div>

      <div class="form-group">
        <textarea id="message" v-model="message" rows="4" placeholder=" " required></textarea>
        <label for="message">Message</label>
      </div>

      <button type="submit">Envoyer</button>
    </form>

    <!-- Cadre infos contact -->
    <div class="contact-info">
      <p><strong> 📧 EMAIL</strong><br>gaetanandre.ramin@gmail.com</p>
      <p><strong>📞 TELEPHONE</strong><br>+33 7 67 30 21 95</p>
      <p><strong> 📍 LOCALISATION</strong><br>91510 Lardy, France</p>
    </div>
  </section>
</template>


<script setup>
import emailjs from '@emailjs/browser'
import { ref, onMounted } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

// Initialisation EmailJS
onMounted(() => {
  emailjs.init('W5C97JtRYCjEdl4B7')
})

// Fonction d'envoi
const sendEmail = () => {
  if (!name.value || !email.value || !message.value) {
    alert("Merci de remplir tous les champs avant d’envoyer.")
    return
  }

  emailjs.sendForm('service_scvt5ts', 'template_64hc1c9', document.getElementById('contact-form'))
    .then(() => {
      alert('Message envoyé avec succès !')
      name.value = ''
      email.value = ''
      message.value = ''
    })
    .catch((error) => {
      alert('Erreur lors de l’envoi : ' + JSON.stringify(error))
    })
}
</script>


<style scoped>

.section-contact {
  position: relative;
  z-index: 1;
  height: 100vh; /* ✅ pas plus grand que l'écran */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0; /* ✅ on retire le gros padding */
  padding-left: 20vw; /* Décalage vers la droite */
  overflow: hidden; /* ✅ enlève tout scroll */
  gap: 110px; /* ✅ espace entre le formulaire et le cadre */

  /* 🌌 Fond néon */
  background:
    radial-gradient(circle at 30% 30%, #00ffff22, transparent 40%),
    radial-gradient(circle at 70% 70%, #ff00ff22, transparent 40%),
    #000;
  background-size: cover;
  animation: neonWave 12s ease-in-out infinite alternate;
}

@keyframes neonWave {
  0% {
    background-position: 30% 30%, 70% 70%;
  }
  100% {
    background-position: 35% 25%, 65% 75%;
  }
}

.section-contact form {
  background: #111;
  padding: 80px 60px; /* ✅ plus de hauteur */
  border-radius: 10px;
  box-shadow: 0 0 20px #00ffffaa;
  width: 360px;
  animation: formFadeIn 1.2s ease-out both;
  position: relative;
  z-index: 1;
  margin: 0;
}


/* Animation d'apparition */
@keyframes formFadeIn {
  0% { opacity: 0; transform: translateY(30px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.section-contact form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #00ffff;
  text-shadow: 0 0 8px #00ffff, 0 0 15px #00ffffaa;
  font-family: 'Segoe UI', sans-serif;
  animation: pulseGlow 2s infinite alternate;
}

@keyframes pulseGlow {
  from { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffffaa; }
  to { text-shadow: 0 0 15px #00ffff, 0 0 25px #00ffffaa; }
}

.section-contact .form-group {
  position: relative;
  margin-bottom: 30px;
}

.section-contact input,
.section-contact textarea {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 2px solid #00ffff;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  resize: none;
  transition: 0.3s ease all;
  box-shadow: 0 0 0 transparent;
}

.section-contact input:focus,
.section-contact textarea:focus {
  outline: none;
  border-color: #ff00c8;
  box-shadow: 0 0 15px #ff00c8;
}

.section-contact label {
  position: absolute;
  top: 12px;
  left: 12px;
  color: #00ffffaa;
  font-size: 16px;
  pointer-events: none;
  transition: 0.3s ease all;
}

.section-contact input:focus + label,
.section-contact input:not(:placeholder-shown) + label,
.section-contact textarea:focus + label,
.section-contact textarea:not(:placeholder-shown) + label {
  top: -10px;
  left: 8px;
  font-size: 12px;
  color: #ff00c8;
  background: #111;
  padding: 0 4px;
  text-shadow: 0 0 5px #ff00c8;
}

.section-contact button {
  width: 100%;
  padding: 15px;
  background: transparent;
  border: 2px solid #00ffff;
  border-radius: 8px;
  color: #00ffff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease all;
  text-shadow: 0 0 10px #00ffff;
  animation: glowButton 2s ease-in-out infinite alternate;
  
}

.section-contact button:hover {
  background: #00ffff;
  color: #111;
  box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff;
  transform: scale(1.05);
}

@keyframes glowButton {
  0% { box-shadow: 0 0 5px #00ffff; }
  100% { box-shadow: 0 0 20px #00ffff, 0 0 30px #00ffffaa; }
}
.contact-info {
  background: #111;
  padding: 80px 60px;
  border-radius: 10px;
  box-shadow: 0 0 20px #00ffffaa;
  width: 360px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px; /* ✅ texte général plus grand */
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: formFadeIn 1.2s ease-out both;
}

/* Titre avec glow comme h2 du formulaire */
.contact-info h3 {
  font-family: 'Roboto', sans-serif; /* on met Roboto aussi */
  font-size: 28px; /* ✅ titre plus grand */
  text-align: center;
  margin-bottom: 20px;
  animation: pulseGlow 2s infinite alternate;
}


</style>

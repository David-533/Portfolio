<template>
  <section class="section-contact" id="contact">
    <!-- Formulaire -->
    <form ref="contactForm" @submit.prevent="sendEmail" novalidate>
      <h2>Contactez-moi</h2>

      <div class="form-group">
        <input type="text" id="name" name="user_name" v-model="name" placeholder=" " required />
        <label for="name">Nom</label>
      </div>

      <div class="form-group">
        <input type="email" id="email" name="user_email" v-model="email" placeholder=" " required />
        <label for="email">Email</label>
      </div>

      <div class="form-group">
        <textarea id="message" name="message" v-model="message" rows="4" placeholder=" " required></textarea>
        <label for="message">Message</label>
      </div>

      <button type="submit" :disabled="isSending">
        {{ isSending ? 'Envoi en cours...' : 'Envoyer' }}
      </button>

      <!-- Feedback visuel au lieu d'un alert() -->
      <p v-if="feedbackMessage" :class="['feedback', feedbackType]">
        {{ feedbackMessage }}
      </p>
    </form>

    <!-- Cadre infos contact -->
    <div class="contact-info">
      <h3>Mes coordonnées</h3>
      <p>
        <strong>📧 EMAIL</strong><br />
        <a href="mailto:gaetanandre.ramin@gmail.com">gaetanandre.ramin@gmail.com</a>
      </p>
      <p>
        <strong>📞 TÉLÉPHONE</strong><br />
        <a href="tel:+33767302195">+33 7 67 30 21 95</a>
      </p>
      <p>
        <strong>📍 LOCALISATION</strong><br />
        91510 Lardy, France
      </p>
    </div>
  </section>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { ref, onMounted } from 'vue'

const contactForm = ref(null)
const name = ref('')
const email = ref('')
const message = ref('')
const isSending = ref(false)
const feedbackMessage = ref('')
const feedbackType = ref('')

// Validation email basique
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

onMounted(() => {
  emailjs.init('W5C97JtRYCjEdl4B7')
})

const sendEmail = async () => {
  // Reset feedback
  feedbackMessage.value = ''

  // Validation
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    feedbackMessage.value = 'Merci de remplir tous les champs.'
    feedbackType.value = 'error'
    return
  }

  if (!isValidEmail(email.value)) {
    feedbackMessage.value = 'Veuillez entrer un email valide.'
    feedbackType.value = 'error'
    return
  }

  isSending.value = true

  try {
    await emailjs.sendForm('service_scvt5ts', 'template_64hc1c9', contactForm.value)
    feedbackMessage.value = 'Message envoyé avec succès !'
    feedbackType.value = 'success'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    feedbackMessage.value = "Erreur lors de l'envoi. Veuillez réessayer."
    feedbackType.value = 'error'
    console.error('EmailJS error:', error)
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped>
/* ============================================
   DESIGN TOKENS
   ============================================ */
:root {
  --accent-cyan: #00ffff;
  --accent-pink: #ff00c8;
  --bg-dark: #111;
  --card-width: 360px;
  --card-padding: 80px 60px;
  --card-radius: 10px;
}

/* ============================================
   SECTION LAYOUT
   ============================================ */
.section-contact {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 40px 20vw;
  gap: 110px;
  overflow: hidden;

  /* Fond néon */
  background:
    radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.13), transparent 40%),
    radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.13), transparent 40%),
    #000;
  background-size: cover;
  animation: neonWave 12s ease-in-out infinite alternate;
}

@keyframes neonWave {
  0% { background-position: 30% 30%, 70% 70%; }
  100% { background-position: 35% 25%, 65% 75%; }
}

/* ============================================
   FORMULAIRE
   ============================================ */
.section-contact form {
  background: var(--bg-dark);
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.67);
  width: var(--card-width);
  animation: formFadeIn 1.2s ease-out both;
  position: relative;
  z-index: 1;
}

@keyframes formFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.section-contact form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: var(--accent-cyan);
  text-shadow: 0 0 8px var(--accent-cyan), 0 0 15px rgba(0, 255, 255, 0.67);
  font-family: 'Segoe UI', sans-serif;
  animation: pulseGlow 2s infinite alternate;
}

@keyframes pulseGlow {
  from { text-shadow: 0 0 5px var(--accent-cyan), 0 0 10px rgba(0, 255, 255, 0.67); }
  to { text-shadow: 0 0 15px var(--accent-cyan), 0 0 25px rgba(0, 255, 255, 0.67); }
}

/* ============================================
   FORM GROUPS (floating labels)
   ============================================ */
.form-group {
  position: relative;
  margin-bottom: 30px;
}

.section-contact input,
.section-contact textarea {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 2px solid var(--accent-cyan);
  border-radius: 6px;
  color: white;
  font-size: 16px;
  resize: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.section-contact input:focus,
.section-contact textarea:focus {
  outline: none;
  border-color: var(--accent-pink);
  box-shadow: 0 0 15px var(--accent-pink);
}

.section-contact label {
  position: absolute;
  top: 12px;
  left: 12px;
  color: rgba(0, 255, 255, 0.67);
  font-size: 16px;
  pointer-events: none;
  transition:
    top 0.3s ease,
    font-size 0.3s ease,
    color 0.3s ease;
}

.section-contact input:focus + label,
.section-contact input:not(:placeholder-shown) + label,
.section-contact textarea:focus + label,
.section-contact textarea:not(:placeholder-shown) + label {
  top: -10px;
  left: 8px;
  font-size: 12px;
  color: var(--accent-pink);
  background: var(--bg-dark);
  padding: 0 4px;
  text-shadow: 0 0 5px var(--accent-pink);
}

/* ============================================
   BOUTON SUBMIT
   ============================================ */
.section-contact button {
  width: 100%;
  padding: 15px;
  background: transparent;
  border: 2px solid var(--accent-cyan);
  border-radius: 8px;
  color: var(--accent-cyan);
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  text-shadow: 0 0 10px var(--accent-cyan);
  transition:
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
  animation: glowButton 2s ease-in-out infinite alternate;
}

.section-contact button:hover:not(:disabled) {
  background: var(--accent-cyan);
  color: var(--bg-dark);
  box-shadow: 0 0 20px var(--accent-cyan), 0 0 40px var(--accent-cyan);
  transform: scale(1.05);
}

.section-contact button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  animation: none;
}

@keyframes glowButton {
  0% { box-shadow: 0 0 5px var(--accent-cyan); }
  100% { box-shadow: 0 0 20px var(--accent-cyan), 0 0 30px rgba(0, 255, 255, 0.67); }
}

/* ============================================
   FEEDBACK MESSAGE
   ============================================ */
.feedback {
  margin-top: 15px;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.feedback.success {
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.3);
  background: rgba(0, 255, 136, 0.08);
}

.feedback.error {
  color: #ff4d4d;
  border: 1px solid rgba(255, 77, 77, 0.3);
  background: rgba(255, 77, 77, 0.08);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ============================================
   CONTACT INFO
   ============================================ */
.contact-info {
  background: var(--bg-dark);
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.67);
  width: var(--card-width);
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: formFadeIn 1.2s ease-out both;
}

.contact-info h3 {
  font-size: 28px;
  text-align: center;
  color: var(--accent-cyan);
  margin-bottom: 10px;
  animation: pulseGlow 2s infinite alternate;
}

.contact-info a {
  color: var(--accent-cyan);
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.contact-info a:hover {
  color: var(--accent-pink);
  text-shadow: 0 0 8px var(--accent-pink);
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .section-contact {
    flex-direction: column;
    padding: 60px 20px;
    gap: 40px;
    min-height: auto;
  }

  .section-contact form,
  .contact-info {
    width: min(var(--card-width), 100%);
  }
}

@media (max-width: 600px) {
  .section-contact form,
  .contact-info {
    padding: 40px 25px;
    width: 100%;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .section-contact form,
  .contact-info,
  .section-contact form h2,
  .section-contact button {
    animation: none;
  }

  .section-contact input,
  .section-contact textarea,
  .section-contact label,
  .section-contact button,
  .contact-info a {
    transition: none;
  }

  .section-contact {
    animation: none;
  }
}
</style>

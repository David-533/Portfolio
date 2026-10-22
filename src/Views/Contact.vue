<template>
  <section class="section-contact" id="contact">
    <!-- Formulaire -->
    <form id="contact-form" @submit.prevent="sendEmail" novalidate>
      <p class="form-eyebrow">PRENONS CONTACT</p>
      <h2>Un projet en tête ?</h2>
      <p class="form-intro">Écris-moi quelques lignes, je te répondrai dès que possible.</p>

      <div class="form-group" :class="{ invalid: hasSubmitted && !name.trim() }">
        <input type="text" id="name" name="name" v-model="name" placeholder=" " autocomplete="name" required :aria-invalid="hasSubmitted && !name.trim()" @input="clearFeedback" />
        <label for="name">Nom</label>
        <span v-if="hasSubmitted && !name.trim()" class="field-error">Indique ton nom.</span>
      </div>

      <div class="form-group" :class="{ invalid: hasSubmitted && !isValidEmail(email) }">
        <input type="email" id="email" name="email" v-model="email" placeholder=" " autocomplete="email" required :aria-invalid="hasSubmitted && !isValidEmail(email)" @input="clearFeedback" />
        <label for="email">Email</label>
        <span v-if="hasSubmitted && !isValidEmail(email)" class="field-error">Entre une adresse email valide.</span>
      </div>

      <div class="form-group message-group" :class="{ invalid: hasSubmitted && !message.trim() }">
        <textarea id="message" name="message" v-model="message" rows="4" maxlength="1200" placeholder=" " required :aria-invalid="hasSubmitted && !message.trim()" @input="clearFeedback"></textarea>
        <label for="message">Message</label>
        <span class="character-count">{{ message.length }} / 1200</span>
        <span v-if="hasSubmitted && !message.trim()" class="field-error">Ajoute un message avant l’envoi.</span>
      </div>

      <button type="submit" :disabled="isSending">
        <span v-if="isSending" class="sending-indicator" aria-hidden="true"></span>
        {{ isSending ? 'Envoi en cours...' : 'Envoyer le message' }}
        <svg v-if="!isSending" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
      </button>
      <p v-if="submissionMessage" class="form-feedback" :class="submissionState" role="status" aria-live="polite">
        {{ submissionMessage }}
      </p>
    </form>

    <aside class="contact-info" aria-label="Mes coordonnées">
      <p class="info-eyebrow">AUTRES MOYENS DE CONTACT</p>
      <a class="contact-detail" href="mailto:gaetanandre.ramin@gmail.com">
        <span class="contact-icon" aria-hidden="true">@</span>
        <span><strong>Email</strong><br>gaetanandre.ramin@gmail.com</span>
        <span class="detail-arrow" aria-hidden="true">↗</span>
      </a>
      <a class="contact-detail" href="tel:+33767302195">
        <span class="contact-icon" aria-hidden="true">↗</span>
        <span><strong>Téléphone</strong><br>+33 7 67 30 21 95</span>
        <span class="detail-arrow" aria-hidden="true">↗</span>
      </a>
      <div class="contact-detail location-detail">
        <span class="contact-icon" aria-hidden="true">⌖</span>
        <span><strong>Localisation</strong><br>91510 Lardy, France</span>
      </div>
      <p class="response-note"><span></span> Disponible pour échanger sur de nouvelles idées.</p>
    </aside>
  </section>
</template>


<script setup>
import emailjs from '@emailjs/browser'
import { ref, onMounted } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const hasSubmitted = ref(false)
const isSending = ref(false)
const submissionMessage = ref('')
const submissionState = ref('')

// Initialisation EmailJS
onMounted(() => {
  emailjs.init('W5C97JtRYCjEdl4B7')
})

// Fonction d'envoi
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

const clearFeedback = () => {
  submissionMessage.value = ''
  submissionState.value = ''
}

const sendEmail = () => {
  hasSubmitted.value = true

  if (!name.value.trim() || !isValidEmail(email.value) || !message.value.trim()) {
    submissionState.value = 'error'
    submissionMessage.value = 'Vérifie les champs signalés avant d’envoyer.'
    return
  }

  if (isSending.value) return
  isSending.value = true
  submissionState.value = 'loading'
  submissionMessage.value = 'Ton message est en cours d’envoi.'

  emailjs.sendForm('service_27lmzhj', 'template_et8t175', document.getElementById('contact-form'))
    .then(() => {
      submissionState.value = 'success'
      submissionMessage.value = 'Message envoyé. Merci, je te répondrai rapidement.'
      name.value = ''
      email.value = ''
      message.value = ''
    })
    .catch((error) => {
      submissionState.value = 'error'
      submissionMessage.value = error?.status === 412 || error?.text?.includes('Invalid grant')
        ? 'La connexion Gmail du service d’envoi a expiré. Contacte-moi directement par email pendant que je rétablis le service.'
        : 'L’envoi a échoué. Réessaie ou contacte-moi directement par email.'
    })
    .finally(() => {
      isSending.value = false
    })
}
</script>


<style scoped>

.section-contact {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 58px);
  min-height: calc(100svh - 58px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: clamp(32px, 5vw, 68px) clamp(16px, 5vw, 56px);
  overflow: visible;
  gap: clamp(20px, 3vw, 36px);
}

.section-contact form {
  background: rgba(13, 17, 16, 0.92);
  padding: clamp(24px, 4vw, 38px);
  border: 1px solid rgba(194, 208, 202, 0.18);
  border-radius: 8px;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.24);
  width: min(100%, 500px);
  flex: 1 1 360px;
  max-width: 500px;
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
  text-align: left;
  margin: 0;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 27px;
  font-weight: 600;
}

.form-eyebrow,
.info-eyebrow {
  margin: 0 0 10px;
  color: #9ebbb3;
  font-family: 'Roboto Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
}

.form-intro {
  margin: 10px 0 28px;
  color: #aeb7b3;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
}

.section-contact .form-group {
  position: relative;
  margin-bottom: 22px;
  padding-top: 4px;
}

.section-contact input,
.section-contact textarea {
  width: 100%;
  min-height: 52px;
  padding: 16px 13px 10px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid #414a46;
  border-radius: 5px;
  color: #fff;
  font: 15px Arial, sans-serif;
  resize: none;
  transition: border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
  box-shadow: none;
}

.section-contact input:focus,
.section-contact textarea:focus {
  outline: 2px solid transparent;
  border-color: #9ebbb3;
  background: rgba(158, 187, 179, 0.06);
  box-shadow: 0 0 0 3px rgba(158, 187, 179, 0.1);
}

.section-contact .form-group.invalid input,
.section-contact .form-group.invalid textarea {
  border-color: #d18c8c;
}

.section-contact label {
  position: absolute;
  top: 20px;
  left: 13px;
  color: #aab2ae;
  font: 14px Arial, sans-serif;
  pointer-events: none;
  transition: top 160ms ease, left 160ms ease, color 160ms ease, font-size 160ms ease;
}

.section-contact input:focus + label,
.section-contact input:not(:placeholder-shown) + label,
.section-contact textarea:focus + label,
.section-contact textarea:not(:placeholder-shown) + label {
  top: -3px;
  left: 9px;
  font-size: 11px;
  color: #b9cec6;
  background: #0d1110;
  padding: 0 5px;
  text-shadow: none;
}

.section-contact textarea {
  min-height: 150px;
  padding-top: 19px;
  line-height: 1.5;
}

.character-count {
  display: block;
  margin-top: 7px;
  color: #89938e;
  font: 11px 'Roboto Mono', monospace;
  text-align: right;
}

.field-error {
  display: block;
  margin-top: 7px;
  color: #e3a7a7;
  font: 12px Arial, sans-serif;
}

.section-contact button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 50px;
  padding: 12px 18px;
  background: #9ebbb3;
  border: 1px solid #9ebbb3;
  border-radius: 5px;
  color: #101513;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
  text-shadow: none;
  animation: none;
}

.section-contact button:hover {
  background: #b7ccc4;
  border-color: #b7ccc4;
  transform: translateY(-1px);
}

.section-contact button:disabled {
  cursor: wait;
  opacity: 0.8;
}

.section-contact button svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.sending-indicator {
  width: 15px;
  height: 15px;
  border: 2px solid rgba(16, 21, 19, 0.25);
  border-top-color: #101513;
  border-radius: 50%;
  animation: spin 700ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-feedback {
  margin: 14px 0 0;
  padding: 11px 13px;
  border: 1px solid transparent;
  border-radius: 5px;
  font: 13px/1.5 Arial, sans-serif;
}

.form-feedback.success {
  border-color: rgba(125, 174, 143, 0.35);
  background: rgba(85, 145, 105, 0.12);
  color: #b8d9c0;
}

.form-feedback.error {
  border-color: rgba(209, 140, 140, 0.35);
  background: rgba(161, 85, 85, 0.12);
  color: #e3b4b4;
}

.form-feedback.loading {
  border-color: rgba(158, 187, 179, 0.3);
  background: rgba(158, 187, 179, 0.08);
  color: #c2d0ca;
}

.contact-info {
  background: rgba(13, 17, 16, 0.78);
  padding: clamp(24px, 4vw, 34px);
  border: 1px solid rgba(194, 208, 202, 0.14);
  border-radius: 8px;
  width: min(100%, 360px);
  flex: 1 1 280px;
  max-width: 360px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: formFadeIn 1.2s ease-out both;
}

.contact-info .info-eyebrow {
  margin-bottom: 10px;
}

.contact-detail {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 16px;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 13px 0;
  border-bottom: 1px solid rgba(194, 208, 202, 0.12);
  color: #b7bfbb;
  font: 13px/1.6 Arial, sans-serif;
  text-decoration: none;
}

.contact-detail strong {
  color: #f0f3f1;
  font-size: 14px;
}

.contact-icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(158, 187, 179, 0.25);
  border-radius: 5px;
  color: #b4c9c0;
  font: 16px 'Roboto Mono', monospace;
}

.detail-arrow {
  color: #87948e;
  transition: transform 160ms ease, color 160ms ease;
}

a.contact-detail:hover .detail-arrow {
  transform: translate(2px, -2px);
  color: #e2ebe6;
}

.response-note {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin: 16px 0 0;
  color: #9ea9a3;
  font: 12px/1.6 Arial, sans-serif;
}

.response-note span {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  margin-top: 5px;
  border-radius: 50%;
  background: #9ebbb3;
  box-shadow: 0 0 8px rgba(158, 187, 179, 0.4);
}

@media (max-width: 768px) {
  .section-contact {
    min-height: calc(100svh - 58px);
  }
}

@media (max-width: 520px) {
  .section-contact {
    align-items: stretch;
  }

  .section-contact form,
  .contact-info {
    flex-basis: 100%;
  }

  .section-contact input,
  .section-contact textarea {
    max-width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-contact form,
  .contact-info {
    animation: none;
  }

  .sending-indicator {
    animation-duration: 1.5s;
  }
}

</style>

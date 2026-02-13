<template>
  <section class="section-contact" id="contact">
    <div class="contact-wrapper">

      <!-- LEFT: Infos -->
      <div class="contact-left">
        <h2>Contactez-moi</h2>
        <p class="subtitle">
          N'hésitez pas à me contacter pour toute question ou opportunité de collaboration.
        </p>

        <div class="info-item">
          <div class="info-icon">📧</div>
          <div class="info-text">
            <strong>Email</strong>
            <a href="mailto:gaetanandre.ramin@gmail.com">gaetanandre.ramin@gmail.com</a>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon">📞</div>
          <div class="info-text">
            <strong>Téléphone</strong>
            <a href="tel:+33767302195">+33 7 67 30 21 95</a>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon">📍</div>
          <div class="info-text">
            <strong>Localisation</strong>
            <span>91510 Lardy, France</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: Form -->
      <div class="contact-right">
        <h3>Envoyer un message</h3>
        <p class="form-subtitle">Tous les champs sont requis</p>

        <form ref="contactForm" @submit.prevent="sendEmail" novalidate>
          <div class="form-row">
            <div class="form-field">
              <label for="name">Nom</label>
              <input
                type="text"
                id="name"
                name="user_name"
                v-model="name"
                placeholder="Votre nom"
                required
              />
            </div>
            <div class="form-field">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                v-model="email"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div class="form-field full">
            <label for="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              v-model="subject"
              placeholder="Objet de votre message"
              required
            />
          </div>

          <div class="form-field full">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              v-model="message"
              placeholder="Votre message..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn-submit" :disabled="isSending">
            {{ isSending ? 'Envoi en cours...' : 'Envoyer le message' }}
          </button>

          <!-- Feedback -->
          <p v-if="feedbackMessage" :class="['feedback', feedbackType]">
            {{ feedbackMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { ref, onMounted } from 'vue'

const contactForm = ref(null)
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const isSending = ref(false)
const feedbackMessage = ref('')
const feedbackType = ref('')

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

onMounted(() => {
  emailjs.init('W5C97JtRYCjEdl4B7')
})

const sendEmail = async () => {
  feedbackMessage.value = ''

  if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
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
    subject.value = ''
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
  --bg-darker: #0d0d0d;
  --wrapper-radius: 16px;
}

/* ============================================
   SECTION
   ============================================ */
.section-contact {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(0, 255, 255, 0.08), transparent 50%),
    radial-gradient(ellipse at 80% 50%, rgba(255, 0, 200, 0.06), transparent 50%),
    #000;
}

/* ============================================
   WRAPPER
   ============================================ */
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  max-width: 900px;
  width: 100%;
  border-radius: var(--wrapper-radius);
  overflow: hidden;
  box-shadow:
    0 0 40px rgba(0, 255, 255, 0.12),
    0 20px 60px rgba(0, 0, 0, 0.5);
  animation: wrapperIn 1s ease;
}

@keyframes wrapperIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ============================================
   LEFT PANEL (infos)
   ============================================ */
.contact-left {
  background: linear-gradient(160deg, #0a2a2a, var(--bg-darker) 60%);
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid rgba(0, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.contact-left::before {
  content: "";
  position: absolute;
  top: -40px;
  left: -40px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.12), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.contact-left h2 {
  font-size: 26px;
  color: var(--accent-cyan);
  margin-bottom: 8px;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
}

.contact-left .subtitle {
  color: #777;
  font-size: 14px;
  margin-bottom: 40px;
  line-height: 1.5;
}

/* Info items */
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  position: relative;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(0, 255, 255, 0.08);
  border: 1px solid rgba(0, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.info-text strong {
  display: block;
  color: #ccc;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.info-text a,
.info-text span {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
}

.info-text a:hover {
  color: var(--accent-cyan);
}

/* ============================================
   RIGHT PANEL (form)
   ============================================ */
.contact-right {
  background: var(--bg-dark);
  padding: 50px 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-right h3 {
  font-size: 22px;
  color: #fff;
  margin-bottom: 6px;
  font-family: 'Segoe UI', sans-serif;
}

.contact-right .form-subtitle {
  color: #666;
  font-size: 13px;
  margin-bottom: 30px;
}

/* ============================================
   FORM FIELDS
   ============================================ */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.form-field:last-of-type {
  margin-bottom: 0;
}

.form-field label {
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-field input,
.form-field textarea {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 14px 16px;
  color: #fff;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  resize: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #555;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.1);
  background: rgba(0, 255, 255, 0.02);
}

.form-field textarea {
  min-height: 120px;
}

/* ============================================
   SUBMIT BUTTON
   ============================================ */
.btn-submit {
  margin-top: 10px;
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #000;
  background: linear-gradient(135deg, var(--accent-cyan), #00cccc);
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.25);
  position: relative;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;
}

.btn-submit::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(0, 255, 255, 0.35);
}

.btn-submit:hover:not(:disabled)::after {
  transform: translateX(100%);
}

.btn-submit:active:not(:disabled) {
  transform: translateY(0);
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ============================================
   FEEDBACK
   ============================================ */
.feedback {
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
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
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    max-width: 500px;
  }

  .contact-left {
    padding: 35px 30px;
    border-right: none;
    border-bottom: 1px solid rgba(0, 255, 255, 0.1);
  }

  .contact-right {
    padding: 35px 30px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .contact-wrapper {
    animation: none;
  }

  .form-field input,
  .form-field textarea,
  .btn-submit,
  .info-text a {
    transition: none;
  }

  .btn-submit::after {
    display: none;
  }
}
</style>

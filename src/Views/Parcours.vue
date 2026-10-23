<template>
  <div class="parcours-page">
    <header class="page-header">
      <p class="eyebrow">ÉTUDES & EXPÉRIENCES</p>
      <h1>Mon parcours</h1>
      <p class="intro">Un fil chronologique de mes études et expériences professionnelles.</p>
    </header>

    <section class="timeline-section" aria-label="Chronologie du parcours">
      <div ref="timeline" class="timeline" :style="{ '--timeline-progress': `${timelineProgress}%` }">
        <section v-for="group in groups" :key="group.id" class="timeline-group" :aria-labelledby="`${group.id}-title`">
          <h2 :id="`${group.id}-title`" class="timeline-group-title reveal-on-scroll">
            {{ group.title }}
            <span>{{ group.entries.length }} étapes</span>
          </h2>
          <article
            v-for="(entry, index) in group.entries"
            :key="entry.id"
            ref="timelineItems"
            class="timeline-item reveal-on-scroll"
            :style="{ '--item-index': index }"
          >
            <span class="timeline-marker" aria-hidden="true"></span>
            <div class="timeline-content">
              <div class="entry-meta">
                <time>{{ entry.date }}</time>
              </div>
              <h3>{{ entry.title }}</h3>
              <p v-if="entry.place">{{ entry.place }}</p>
            </div>
          </article>
        </section>
      </div>
    </section>

    <section class="notes-section" aria-labelledby="notes-title">
      <div class="notes-heading">
        <p class="eyebrow">DOCUMENTS</p>
        <h2 id="notes-title">Notes de synthèse</h2>
      </div>
      <div class="notes-list">
        <article v-for="note in notes" :key="note.id" class="note-row reveal-on-scroll">
          <div>
            <h3>{{ note.organization }}</h3>
            <p>{{ note.date }}</p>
          </div>
          <a :href="note.href" target="_blank" rel="noopener noreferrer" :aria-label="`Lire la note de synthèse ${note.organization}`">
            Lire la note
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Parcours",
  data() {
    return {
      timelineProgress: 0,
      timelineObserver: null,
      groups: [
        {
          id: "school",
          title: "Parcours scolaire",
          entries: [
            { id: "bac", date: "2021 - 2024", title: "Bac STI2D", place: "Lycée Edmond Michelet, Arpajon" },
            { id: "bts", date: "2024 - 2026", title: "BTS SIO, option SLAM", place: "Lycée Saint Hilaire, Étampes" },
            { id: "bachelor", date: "2026 - 2027", title: "Bachelor 3ème année Développement web, mobile & IA", place: "Ecole Digital Campus Paris" },
          ],
        },
        {
          id: "work",
          title: "Expériences professionnelles",
          entries: [
            { id: "sncf", date: "19 mai - 20 juin 2025", title: "SNCF", place: "" },
            { id: "mf2i", date: "12 janvier - 20 février 2026", title: "MF2i", place: "" },
          ],
        },
      ],
      notes: [
        {
          id: "sncf-note",
          organization: "SNCF",
          date: "19 mai - 20 juin 2025",
          href: "https://docs.google.com/document/d/1iJk8K_P8Y5GqTHFvMJmAL3AUDnLNSXkruNEG96JNSZQ/edit?usp=drive_link",
        },
        {
          id: "mf2i-note",
          organization: "MF2i",
          date: "12 janvier - 20 février 2026",
          href: "https://docs.google.com/document/d/1V3HrWaQiUUAHQSNflrX6WqDdDpQy0uVBTqnKsH-bKsQ/edit?tab=t.0",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.updateTimelineProgress();
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("resize", this.handleScroll, { passive: true });

    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.timelineObserver = new IntersectionObserver((observedItems, observer) => {
        observedItems.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add("is-visible");
            observer.unobserve(item.target);
          }
        });
      }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

      this.$el.querySelectorAll(".reveal-on-scroll").forEach((item) => this.timelineObserver.observe(item));
    } else {
      this.$el.querySelectorAll(".reveal-on-scroll").forEach((item) => item.classList.add("is-visible"));
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
    this.timelineObserver?.disconnect();
  },
  methods: {
    handleScroll() {
      this.updateTimelineProgress();
    },
    updateTimelineProgress() {
      const timeline = this.$refs.timeline;
      if (!timeline) return;

      const timelineTop = timeline.getBoundingClientRect().top + window.scrollY;
      const progressEnd = Math.max(1, timelineTop + timeline.offsetHeight - window.innerHeight * 0.55);
      this.timelineProgress = Math.min(100, Math.max(0, (window.scrollY / progressEnd) * 100));
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');

.view-switcher {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: min(100% - 32px, 900px);
  margin: 0 auto;
  padding: 28px 0 8px;
}

.view-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 40px;
  padding: 0 14px;
  border: 1px solid #343a38;
  border-radius: 5px;
  background: #101211;
  color: #c5cbc8;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: background 180ms ease, border-color 180ms ease, color 180ms ease;
}

.view-button span {
  color: #8e9894;
  font-size: 11px;
}

.view-button:hover,
.view-button.active {
  border-color: #9ebbb3;
  background: #9ebbb316;
  color: #edf4f1;
}

.section-reveal {
  animation: sectionReveal 320ms ease both;
}

@keyframes sectionReveal {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.section {
  padding: clamp(32px, 5vw, 56px) clamp(16px, 4vw, 32px);
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffffaa;
  margin-bottom: 50px;
  font-family: 'Segoe UI', sans-serif;
}

/* Séparateur entre sections */
.section + .section {
  border-top: 1px solid #00ffff22;
  padding-top: 60px;
}

/* Timeline verticale */
.timeline {
  position: relative;
  margin: 0 auto;
  padding-left: 20px;
  border-left: 3px solid #00ffff33;
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

.timeline-content {
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px #00ffff55;
  color: #ffffff;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.timeline-content h3 {
  margin-top: 0;
  font-family: 'Segoe UI', sans-serif;
}

.timeline-content p {
  font-family: 'Roboto', sans-serif;
  color: #ddd;
  margin: 5px 0;
}

/* Bulle date néon */
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
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.timeline-content:hover {
  transform: scale(1.03);
}

/* Notes de Synthèse */
.notes-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
}

.note-card {
  background-color: #1a1a1a;
  border: 2px solid #00ffff55;
  border-radius: 10px;
  padding: 25px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 0 15px #00ffff55;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-card:hover {
  transform: scale(1.05);
  border-color: #00ffff;
  box-shadow: 0 0 25px #00ffff77;
}

.note-card h3 {
  color: #00ffff;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.2rem;
}

.note-date {
  color: #aaa;
  font-size: 14px;
  margin-bottom: 15px;
}

.btn-note {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background: linear-gradient(90deg, #00ffff, #ff00c8);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px #00ffff55;
}

.btn-note:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #00ffffaa;
}

/* Responsive */
@media (max-width: 768px) {
  .view-switcher {
    justify-content: flex-start;
    width: 100%;
    padding: 20px 16px 8px;
  }

  .view-button {
    min-height: 38px;
    padding: 0 11px;
    font-size: 12px;
  }

  .timeline {
    padding-left: 15px;
    border-left: 2px solid #00ffff33;
  }

  .timeline-content {
    width: 100%;
  }

  .notes-container {
    grid-template-columns: 1fr;
  }

  .note-card {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-reveal {
    animation: none;
  }
}

.parcours-page {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: clamp(36px, 6vw, 72px) clamp(16px, 4vw, 48px) 72px;
  color: #f4f5f4;
}

.page-header {
  max-width: 720px;
  margin: 0 0 clamp(36px, 6vw, 64px);
}

.page-header .eyebrow,
.notes-heading .eyebrow {
  margin: 0 0 10px;
  color: #9ebbb3;
  font-family: 'Roboto Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
}

.page-header h1 {
  margin: 0;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.15;
  text-align: left;
}

.page-header .intro {
  max-width: 520px;
  margin: 14px 0 0;
  color: #b2b8b5;
  font-family: Arial, sans-serif;
  font-size: 15px;
  line-height: 1.6;
}

.timeline-section {
  margin-left: 52px;
}

.timeline {
  position: relative;
  margin: 0;
  padding: 0 0 6px 34px;
  border: 0;
}

.timeline::before,
.timeline::after {
  content: '';
  position: absolute;
  top: 14px;
  left: 6px;
  width: 2px;
}

.timeline::before {
  bottom: 26px;
  background: rgba(158, 187, 179, 0.2);
}

.timeline::after {
  height: var(--timeline-progress, 0%);
  max-height: calc(100% - 40px);
  background: #9ebbb3;
  box-shadow: 0 0 10px rgba(158, 187, 179, 0.32);
}

.timeline-group + .timeline-group {
  margin-top: 38px;
  padding-top: 28px;
  border-top: 1px solid rgba(194, 208, 202, 0.2);
}

.timeline-group-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0 0 18px;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  text-shadow: none;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 520ms ease, transform 520ms ease;
}

.timeline-group-title span {
  flex: 0 0 auto;
  color: #aeb7b3;
  font-family: 'Roboto Mono', monospace;
  font-size: 11px;
  font-weight: 400;
}

.timeline-item {
  position: relative;
  margin: 0 0 18px;
  padding: 0;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 520ms ease, transform 520ms ease;
  transition-delay: calc(min(var(--item-index, 0), 3) * 55ms);
}

.timeline-item.is-visible,
.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-marker {
  position: absolute;
  top: 24px;
  left: -34px;
  z-index: 1;
  width: 14px;
  height: 14px;
  border: 3px solid #9ebbb3;
  border-radius: 50%;
  background: #101413;
  box-shadow: 0 0 0 5px rgba(158, 187, 179, 0.08);
  transition: background 250ms ease, box-shadow 250ms ease;
}

.timeline-item.is-visible .timeline-marker {
  background: #9ebbb3;
  box-shadow: 0 0 0 5px rgba(158, 187, 179, 0.12), 0 0 12px rgba(158, 187, 179, 0.25);
}

.timeline-content {
  display: block;
  width: 100%;
  padding: 22px 24px;
  border: 1px solid rgba(194, 208, 202, 0.16);
  border-radius: 6px;
  background: rgba(13, 17, 16, 0.82);
  box-shadow: none;
  color: #f4f5f4;
  transition: border-color 220ms ease, background 220ms ease, transform 220ms ease;
}

.timeline-content:hover {
  transform: translateX(4px);
  border-color: rgba(158, 187, 179, 0.48);
  background: rgba(18, 23, 21, 0.94);
}

.entry-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 16px;
  margin-bottom: 12px;
  color: #aeb7b3;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
}

.entry-type {
  color: #9ebbb3;
  font-size: 11px;
}

.timeline-content h2 {
  margin: 0;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 19px;
  font-weight: 600;
  text-align: left;
  text-shadow: none;
}

.timeline-content h3 {
  margin: 0;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.4;
}

.timeline-content p {
  margin: 8px 0 0;
  color: #b2b8b5;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.notes-section {
  margin: 56px 0 0 52px;
  padding: 30px 0 0 34px;
  border-top: 1px solid rgba(194, 208, 202, 0.16);
}

.notes-heading {
  margin-bottom: 18px;
}

.notes-heading h2 {
  margin: 0;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 22px;
  text-align: left;
  text-shadow: none;
}

.notes-list {
  display: grid;
  gap: 10px;
}

.note-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 18px;
  border: 1px solid rgba(194, 208, 202, 0.14);
  border-radius: 6px;
  background: rgba(13, 17, 16, 0.7);
  transition: opacity 520ms ease, transform 520ms ease, border-color 180ms ease;
}

.note-row:hover {
  border-color: rgba(158, 187, 179, 0.42);
}

.note-row h3 {
  margin: 0 0 5px;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 15px;
}

.note-row p {
  margin: 0;
  color: #aab2ae;
  font-family: Arial, sans-serif;
  font-size: 13px;
}

.note-row a {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  gap: 8px;
  color: #c2d0ca;
  font-family: Arial, sans-serif;
  font-size: 13px;
  text-decoration: none;
}

.note-row a:hover {
  color: #fff;
}

.note-row a svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

@media (max-width: 768px) {
  .parcours-page {
    padding: 34px 18px 48px;
  }

  .page-header,
  .timeline-section,
  .notes-section {
    margin-left: 0;
  }

  .page-header {
    margin-bottom: 34px;
  }

  .timeline {
    padding-left: 30px;
  }

  .timeline::before,
  .timeline::after {
    left: 5px;
  }

  .timeline-marker {
    left: -30px;
  }

  .timeline-content {
    padding: 18px 16px;
  }

  .timeline-content h2 {
    font-size: 17px;
  }

  .timeline-group-title {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
    font-size: 17px;
  }

  .notes-section {
    padding-left: 0;
  }
}

@media (max-width: 480px) {
  .entry-meta {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }

  .note-row {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .timeline-item,
  .timeline-group-title,
  .note-row {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
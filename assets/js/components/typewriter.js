/**
 * typewriter.js — Animated typewriter effect
 * Portfolio | Enterprise-Grade
 */

'use strict';

const Typewriter = (() => {
  const PHRASES = [
    'Insightful Power BI Reports.',
    'Scalable Analytics Systems.',
    'Automated Data Pipelines.',
    'Scalable & Smarter Data Solutions.'

  ];

  const TYPING_SPEED   = 75;   // ms per char
  const DELETING_SPEED = 40;   // ms per char
  const PAUSE_AFTER    = 2000; // ms to pause when phrase complete
  const PAUSE_BEFORE   = 500;  // ms to pause before deleting

  let el, phraseIndex = 0, charIndex = 0, isDeleting = false;

  const tick = () => {
    if (!el) return;

    const current = PHRASES[phraseIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = current.substring(0, charIndex);
    } else {
      charIndex++;
      el.textContent = current.substring(0, charIndex);
    }

    let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    if (!isDeleting && charIndex === current.length) {
      // Pause at end of phrase
      delay = PAUSE_AFTER;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % PHRASES.length;
      delay = PAUSE_BEFORE;
    }

    setTimeout(tick, delay);
  };

  const init = () => {
    el = Utils.$('#typewriter');
    if (!el) return;

    // Small initial delay before starting
    setTimeout(tick, 800);
  };

  return { init };
})();

if (typeof module !== 'undefined') module.exports = Typewriter;

/**
 * main.js — Application entry point
 * Initializes all modules after DOM is ready.
 * 
 */

'use strict';

const App = (() => {
  const init = () => {
    // ── Core modules ──
    Navbar.init();
    Typewriter.init();
    Skills.init();
    Contact.init();
    Animations.init();

    // ── Footer year ──
    Utils.setYear('#year');

    // ── Back to top ──
    const backToTop = Utils.$('#backToTop');
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // ── Page load animation trigger ──
    window.addEventListener('load', () => {
      document.body.classList.add('page-loaded');
    });

    console.log(
      '%c✦ Portfolio loaded successfully',
      'color: #00ffc8; font-family: monospace; font-size: 14px; font-weight: bold;'
    );
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init };
})();

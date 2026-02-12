/**
 * animations.js — Scroll reveal & IntersectionObserver
 * Portfolio | Enterprise-Grade
 */

'use strict';

const Animations = (() => {
  let observer = null;

  /**
   * Initialize scroll-triggered reveal animations
   */
  const initScrollReveal = () => {
    const targets = Utils.$$('.reveal-fade, .reveal-up, .reveal-left, .reveal-right');
    if (!targets.length) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));
  };

  /**
   * Animate skill bars when they scroll into view
   */
  const initSkillBars = () => {
    const bars = Utils.$$('.skill-fill');
    if (!bars.length) return;

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetWidth = entry.target.getAttribute('data-width');
            // Small delay for staggered feel
            setTimeout(() => {
              entry.target.style.width = `${targetWidth}%`;
            }, 200);
            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    bars.forEach((bar) => barObserver.observe(bar));
  };

  /**
   * Custom cursor tracker a triangular one 
   */
  // const initCursor = () => {
  //   const dot  = Utils.$('#cursorDot');
  //   const ring = Utils.$('#cursorRing');
  //   if (!dot || !ring) return;

  //   let ringX = 0, ringY = 0;
  //   let mouseX = 0, mouseY = 0;

  //   document.addEventListener('mousemove', (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //     dot.style.left  = `${mouseX}px`;
  //     dot.style.top   = `${mouseY}px`;
  //   });

  //   // Ring follows with easing
  //   const animateRing = () => {
  //     ringX += (mouseX - ringX) * 0.15;
  //     ringY += (mouseY - ringY) * 0.15;
  //     ring.style.left = `${ringX}px`;
  //     ring.style.top  = `${ringY}px`;
  //     requestAnimationFrame(animateRing);
  //   };
  //   animateRing();

  //   // Scale ring on interactive elements
  //   const interactives = Utils.$$('a, button, input, textarea, .project-card');
  //   interactives.forEach((el) => {
  //     el.addEventListener('mouseenter', () => {
  //       ring.style.width  = '56px';
  //       ring.style.height = '56px';
  //       ring.style.borderColor = 'var(--color-accent)';
  //       dot.style.transform = 'translate(-50%, -50%) scale(0.4)';
  //     });
  //     el.addEventListener('mouseleave', () => {
  //       ring.style.width  = '36px';
  //       ring.style.height = '36px';
  //       ring.style.borderColor = 'rgba(0, 255, 200, 0.5)';
  //       dot.style.transform = 'translate(-50%, -50%) scale(1)';
  //     });
  //   });

  //   // Hide cursor when leaving window
  //   document.addEventListener('mouseleave', () => {
  //     dot.style.opacity  = '0';
  //     ring.style.opacity = '0';
  //   });
  //   document.addEventListener('mouseenter', () => {
  //     dot.style.opacity  = '1';
  //     ring.style.opacity = '1';
  //   });
  // };

  const init = () => {
    initScrollReveal();
    initSkillBars();
    // initCursor();
  };

  const destroy = () => {
    if (observer) { observer.disconnect(); observer = null; }
  };

  return { init, destroy };
})();

if (typeof module !== 'undefined') module.exports = Animations;

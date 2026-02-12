/**
 * navbar.js — Scroll behavior, mobile menu toggle
 * Portfolio | Enterprise-Grade
 */

'use strict';

const Navbar = (() => {
  const SCROLL_THRESHOLD = 80;

  let navbar, navToggle, navLinks, isOpen = false;

  const onScroll = Utils.throttle(() => {
    if (!navbar) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 50);

  const openMenu = () => {
    isOpen = true;
    navToggle.classList.add('open');
    navLinks.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    isOpen = false;
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => (isOpen ? closeMenu() : openMenu());

  const init = () => {
    navbar    = Utils.$('#navbar');
    navToggle = Utils.$('#navToggle');
    navLinks  = Utils.$('.nav-links');
    if (!navbar) return;

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    if (navToggle) navToggle.addEventListener('click', toggleMenu);

    // Close on nav link click (mobile)
    Utils.$$('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (isOpen) closeMenu();
      });
    });

    // Close on backdrop click
    document.addEventListener('click', (e) => {
      if (isOpen && !navbar.contains(e.target)) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    });

    // Active link highlighting on scroll
    const sections = Utils.$$('section[id]');
    const links    = Utils.$$('.nav-link');

    const highlightNav = Utils.throttle(() => {
      const scrollY = window.scrollY + 120;
      sections.forEach((section) => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          links.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, 100);

    window.addEventListener('scroll', highlightNav, { passive: true });
  };

  return { init };
})();

if (typeof module !== 'undefined') module.exports = Navbar;

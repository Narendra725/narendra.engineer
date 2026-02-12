/**
 * skills.js — Skill bar animations (handled via Animations util)
 * Additional skill logic can be added here.
 * Portfolio | Enterprise-Grade
 */

'use strict';

const Skills = (() => {
  /**
   * Add percentage labels to each skill bar
   */
  const addPercentageLabels = () => {
    const items = Utils.$$('.skill-item');
    items.forEach((item) => {
      const fill  = item.querySelector('.skill-fill');
      const name  = item.querySelector('.skill-name');
      if (!fill || !name) return;
      const pct = fill.getAttribute('data-width');
      if (pct) {
        const label = document.createElement('span');
        label.className = 'skill-pct';
        label.textContent = `${pct}%`;
        label.style.cssText = `
          margin-left: auto;
          font-size: var(--fs-xs);
          color: var(--color-text-muted);
          font-family: var(--font-mono);
        `;
        name.appendChild(label);
      }
    });
  };

  const init = () => {
    addPercentageLabels();
    // Skill bar width animation is triggered by Animations.initSkillBars()
  };

  return { init };
})();

if (typeof module !== 'undefined') module.exports = Skills;

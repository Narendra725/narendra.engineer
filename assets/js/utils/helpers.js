/**
 * helpers.js — Utility functions
 * Portfolio | Enterprise-Grade
 */

'use strict';

const Utils = (() => {
  /**
   * Throttle a function to fire at most once every `limit` ms
   * @param {Function} fn
   * @param {number} limit
   * @returns {Function}
   */
  const throttle = (fn, limit = 100) => {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        return fn.apply(this, args);
      }
    };
  };

  /**
   * Debounce a function
   * @param {Function} fn
   * @param {number} delay
   * @returns {Function}
   */
  const debounce = (fn, delay = 300) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  /**
   * Clamp a value between min and max
   */
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  /**
   * Validate an email address
   * @param {string} email
   * @returns {boolean}
   */
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isValidPhone = (phone) => {
  return /^(\+91[-\s]?)?[6-9]\d{9}$/.test(phone);
  };

  /**
   * Safely query a single DOM element
   * @param {string} selector
   * @param {Element} [parent=document]
   * @returns {Element|null}
   */
  const $ = (selector, parent = document) => parent.querySelector(selector);

  /**
   * Safely query multiple DOM elements
   * @param {string} selector
   * @param {Element} [parent=document]
   * @returns {NodeList}
   */
  const $$ = (selector, parent = document) => parent.querySelectorAll(selector);

  /**
   * Set current year in a target element
   * @param {string} selector
   */
  const setYear = (selector) => {
    const el = $(selector);
    if (el) el.textContent = new Date().getFullYear();
  };

  return { throttle, debounce, clamp, isValidEmail,isValidPhone, $, $$, setYear };
})();

// Export for module use (if using a bundler)
if (typeof module !== 'undefined') module.exports = Utils;

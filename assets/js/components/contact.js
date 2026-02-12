/**
 * contact.js — Form validation & submission
 * Portfolio | Enterprise-Grade
 *
 * To connect to a real backend, replace the simulateSubmit()
 * function with a real fetch() call to your API or Formspree endpoint.
 */

'use strict';

const Contact = (() => {
  let form, statusEl;

  const showStatus = (message, type = 'success') => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className   = `form-status ${type}`;
    if (type === 'success') {
      setTimeout(() => {
        statusEl.textContent = '';
        statusEl.className   = 'form-status';
      }, 5000);
    }
  };

  const validateField = (input) => {
    const val = input.value.trim();
    if (!val) {
      input.classList.add('error');
      return false;
    }
    if (input.type === 'email' && !Utils.isValidEmail(val)) {
      input.classList.add('error');
      return false;
    }
    if (input.type === 'tel' && !Utils.isValidPhone(val)) {
      input.classList.add('error');
      return false;
    }
    input.classList.remove('error');
    return true;
  };

  /**
   * Simulate async submission (replace with real API call)
   * Example Formspree: https://formspree.io/f/YOUR_FORM_ID
   */
  const simulateSubmit = async (data) => {
    // ────────────────────────────────────────────
    // OPTION A — Formspree (recommended for GitHub Pages)
    const res = await fetch('https://formspree.io/f/mlglqvra', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Submission failed');
    // Submission fallback
    return new Promise((resolve) => setTimeout(resolve, 1200));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameInput    = Utils.$('#name', form);
    const emailInput   = Utils.$('#email', form);
    const messageInput = Utils.$('#message', form);
    const phoneInput = Utils.$('#phone',form);

    const isNameValid    = validateField(nameInput);
    const isEmailValid   = validateField(emailInput);
    const isMessageValid = validateField(messageInput);
    const isPhoneValid = validateField(phoneInput);

    if (!isNameValid || !isEmailValid || !isMessageValid || !isPhoneValid) {
      showStatus('Please fill in all required fields correctly.', 'error');
      return;
    }

    const submitBtn = Utils.$('.btn-submit', form);
    const btnText   = Utils.$('.btn-text', submitBtn);
    submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'Sending...';
    showStatus('');

    try {
      await simulateSubmit({
        name:    nameInput.value.trim(),
        email:   emailInput.value.trim(),
        message: messageInput.value.trim(),
        phone: phoneInput.value.trim()
      });

      showStatus('✓ Message sent! I\'ll get back to you soon.', 'success');
      form.reset();
    } catch (err) {
      console.error('Form submission error:', err);
      showStatus('Something went wrong. Please try again or email directly.', 'error');
    } finally {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Send Message';
    }
  };

  const init = () => {
    form     = Utils.$('#contactForm');
    statusEl = Utils.$('#formStatus');
    if (!form) return;

    form.addEventListener('submit', handleSubmit);

    // Real-time validation feedback
    Utils.$$('input, textarea', form).forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) validateField(input);
      });
    });
  };

  return { init };
})();

if (typeof module !== 'undefined') module.exports = Contact;

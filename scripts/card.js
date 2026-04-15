'use strict';

(function () {
  /**
   * Updates the time output element with the current epoch timestamp.
   * @param {HTMLElement} timeEl - The element displaying the epoch time.
   */
  function updateTime(timeEl) {
    timeEl.textContent = Date.now();
  }

  /**
   * Announces a temporary status message to screen readers via an assertive live region.
   * @param {HTMLElement} srAnnounce - The live region announcer element.
   * @param {string} msg - The message string to announce.
   */
  function announceMessage(srAnnounce, msg) {
    srAnnounce.textContent = msg;
  }

  /**
   * Initializes the live epoch time ticker.
   * Sets up a regular interval to continuously update the displayed timestamp.
   */
  function initTimeTicker() {
    const timeEl = document.querySelector('[data-testid="test-user-time"]');
    if (!timeEl) return;

    updateTime(timeEl);
    const timerId = setInterval(function () {
      updateTime(timeEl);
    }, 500);
  }

  /**
   * Initializes the avatar upload enhancement functionality.
   * Hooks into the visually-hidden input and label for handling accessible image uploads.
   */
  function initAvatarUpload() {
    const avatarInput = document.getElementById('avatar-upload');
    const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
    const srAnnounce = document.getElementById('sr-announce');
    const avatarLabel = document.querySelector('.card__avatar-edit');

    if (!avatarInput || !avatarImg || !srAnnounce || !avatarLabel) return;

    avatarLabel.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        avatarInput.click();
      }
    });

    avatarInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        announceMessage(srAnnounce, 'Please select an image file.');
        return;
      }

      const reader = new FileReader();

      /**
       * Handles successful image file read event and updates the avatar source.
       * @param {Event} event - The load event from FileReader.
       */
      reader.onload = function (event) {
        avatarImg.src = event.target.result;
        announceMessage(srAnnounce, 'Profile photo updated.');
      };

      /**
       * Handles error states if the designated file could not be read cleanly.
       */
      reader.onerror = function () {
        announceMessage(srAnnounce, 'Error reading file.');
      };

      reader.readAsDataURL(file);
    });
  }

  /**
   * Validates accessibility of all social links natively on DOMContentLoaded.
   * Logs a warning to the console if any interactive element uses a tabindex of -1.
   */
  function checkSocialsAccessibility() {
    const socialLinks = document.querySelectorAll('[data-testid="test-user-social-links"] a');
    socialLinks.forEach(function (link) {
      if (link.getAttribute('tabindex') === '-1') {
        console.warn('Accessibility Warning: Social link is not keyboard reachable due to tabindex="-1".', link);
      }
    });
  }

  /* Initialization routines run synchronously since the main script is deferred */
  initTimeTicker();
  initAvatarUpload();

  /* Accessibility guard explicitly runs once on DOMContentLoaded as requested */
  document.addEventListener('DOMContentLoaded', function () {
    checkSocialsAccessibility();
  });
})();

// STAGE 4 COMPLETE

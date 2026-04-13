/* ============================================================
   THE RESTART CODE — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. MOBILE NAV TOGGLE
     ---------------------------------------------------------- */
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.contains('is-open');
      hamburger.classList.toggle('is-active');
      navLinks.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close nav when any link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-active');
        navLinks.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('is-active');
        navLinks.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ----------------------------------------------------------
     2. SCIENCE HUB — FILTER BY PILLAR
     ---------------------------------------------------------- */
  var filterPills = document.querySelectorAll('.filter-pill');
  var gridCards = document.querySelectorAll('.grid-card');

  if (filterPills.length && gridCards.length) {
    filterPills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        // Update active pill
        filterPills.forEach(function (p) {
          p.classList.remove('active');
        });
        pill.classList.add('active');

        var filter = pill.getAttribute('data-filter');

        // Show/hide cards
        gridCards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-pillar') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ----------------------------------------------------------
     3. TRIGLP FAQ ACCORDION
     ---------------------------------------------------------- */
  var faqItems = document.querySelectorAll('.faq-item');

  if (faqItems.length) {
    faqItems.forEach(function (item) {
      var question = item.querySelector('.faq-question');

      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        // Close all items
        faqItems.forEach(function (i) {
          i.classList.remove('open');
          var btn = i.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        // Open the clicked item if it was previously closed
        if (!isOpen) {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

});

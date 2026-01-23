/**
 * Harvest & Spice - JavaScript
 * Mobile menu toggle, smooth scroll, and accessibility enhancements
 */

(function() {
  'use strict';

  // DOM Elements
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const header = document.getElementById('header');
  const mobileContactLink = document.getElementById('mobileContactLink');

  // Mobile Menu Toggle
  function toggleMobileMenu() {
    const isOpen = menuToggle.classList.contains('menu-toggle--active');

    menuToggle.classList.toggle('menu-toggle--active');
    mobileNav.classList.toggle('mobile-nav--active');
    document.body.classList.toggle('nav-open');

    // Update ARIA attributes
    menuToggle.setAttribute('aria-expanded', !isOpen);
  }

  // Close mobile menu
  function closeMobileMenu() {
    menuToggle.classList.remove('menu-toggle--active');
    mobileNav.classList.remove('mobile-nav--active');
    document.body.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  // Handle escape key to close menu
  function handleKeydown(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('mobile-nav--active')) {
      closeMobileMenu();
      menuToggle.focus();
    }
  }

  // Header scroll behavior
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  // Smooth scroll for anchor links
  function handleAnchorClick(e) {
    const href = e.currentTarget.getAttribute('href');

    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        // Close mobile menu if open
        closeMobileMenu();

        // Calculate offset for fixed header
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);
      }
    }
  }

  // Initialize
  function init() {
    // Mobile menu toggle
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when clicking contact link (anchor)
    if (mobileContactLink) {
      mobileContactLink.addEventListener('click', function(e) {
        // Small delay to allow smooth scroll to start
        setTimeout(closeMobileMenu, 100);
      });
    }

    // Escape key handler
    document.addEventListener('keydown', handleKeydown);

    // Header scroll effect
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    // Smooth scroll for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', handleAnchorClick);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (mobileNav.classList.contains('mobile-nav--active')) {
        if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
          closeMobileMenu();
        }
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

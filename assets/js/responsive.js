// Small responsive helpers: detect touch and expose matchMedia helper
(function () {
  function isTouchDevice() {
    return ('ontouchstart' in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  if (isTouchDevice()) {
    document.documentElement.classList.add('is-touch');
    document.body.classList.add('is-touch');
  }

  // simple helper that can be used by other scripts
  window.isMobileWidth = function () {
    return window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  };

  // if there are nav dropdowns that rely on :hover, enable click-to-open for touch
  document.addEventListener('DOMContentLoaded', function () {
    if (!isTouchDevice()) return;
    document.querySelectorAll('.nav-links .has-submenu').forEach(item => {
      item.addEventListener('click', function (e) {
        // toggle open class instead of relying on hover
        this.classList.toggle('submenu-open');
      });
    });
    // Inject burger button and mobile nav behavior when on small screens
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
      const header = document.querySelector('header');
      if (header && !document.querySelector('.burger')) {
        // Create burger button
        const burger = document.createElement('button');
        burger.className = 'burger';
        burger.setAttribute('aria-label', 'Toggle menu');
        burger.innerHTML = '&#9776;'; // hamburger icon
        header.appendChild(burger);

        // Create overlay for when nav is open
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);

        const nav = document.querySelector('.nav-links');
        if (nav) {
          // Move nav outside header to body for popup style
          document.body.appendChild(nav);

          // Add close button inside nav
          const closeBtn = document.createElement('button');
          closeBtn.className = 'nav-close';
          closeBtn.innerHTML = '&times;';
          closeBtn.setAttribute('aria-label', 'Close menu');
          nav.insertBefore(closeBtn, nav.firstChild);
        }

        function closeNav() {
          nav?.classList.remove('open');
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        }

        function openNav() {
          nav?.classList.add('open');
          overlay.classList.add('open');
          document.body.style.overflow = 'hidden';
        }

        // Toggle nav on burger click
        burger.addEventListener('click', function (e) {
          e.stopPropagation();
          const isOpen = nav?.classList.contains('open');
          if (isOpen) {
            closeNav();
          } else {
            openNav();
          }
        });

        // Close nav when clicking overlay or close button
        overlay.addEventListener('click', closeNav);
        document.querySelector('.nav-close')?.addEventListener('click', closeNav);

        // Close on ESC key
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') closeNav();
        });

        // Move demo button into nav menu for mobile
        const demoBtn = document.querySelector('.demo-btn');
        if (demoBtn && nav) {
          nav.appendChild(demoBtn);
          demoBtn.classList.add('mobile-nav-btn');
        }

        // Ensure logo is left-aligned (standard UI/UX)
        const logo = document.querySelector('.logo');
        if (logo) {
          logo.style.left = '20px';
          logo.style.transform = 'none';
        }
      }
    }
  });
})();

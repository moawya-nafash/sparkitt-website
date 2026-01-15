// Mobile footer: when a footer section header is tapped on small screens,
// show that section's contents in a mobile-friendly popup (mirrors desktop content).
(function() {
    function isMobile() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    function initFooterAccordion() {
        const footer = document.getElementById('footer');
        if (!footer) return;

        const headers = footer.querySelectorAll('.footer-section h3');
        headers.forEach(h => {
            if (h.dataset.accordionBound) return; // prevent duplicate binding
            h.dataset.accordionBound = '1';

            // make header keyboard accessible
            h.setAttribute('role', 'button');
            if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '0');
            h.setAttribute('aria-expanded', 'false');

            function toggle(e) {
                if (!isMobile()) return; // only act on small screens

                const section = this.parentElement;
                if (!section) return;

                // If we're opening this section, close any other opened sections
                const footerRoot = section.closest('#footer') || document.getElementById('footer');
                const isOpening = !section.classList.contains('active');
                if (isOpening && footerRoot) {
                    footerRoot.querySelectorAll('.footer-section.active').forEach(s => {
                        if (s !== section) {
                            s.classList.remove('active');
                            const h = s.querySelector('h3');
                            if (h) h.setAttribute('aria-expanded', 'false');
                        }
                    });
                }

                const opened = section.classList.toggle('active');
                this.setAttribute('aria-expanded', opened ? 'true' : 'false');
            }

            h.addEventListener('click', toggle);
            h.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle.call(this, e);
                }
            });
        });
    }

    // Init on DOM ready (and immediately if script is loaded after DOMContentLoaded)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooterAccordion);
    } else {
        // DOM already ready — initialize immediately
        initFooterAccordion();
    }

    // Observe DOM mutations (in case footer is injected dynamically)
    const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
            if (m.addedNodes && m.addedNodes.length) {
                initFooterAccordion();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
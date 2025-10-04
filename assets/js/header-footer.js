// Enhanced header and footer functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize header scroll effects
    initHeaderScrollEffects();
    
    // Initialize footer animations
    initFooterAnimations();
});

function initHeaderScrollEffects() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let lastScrollTop = 0;
    let scrollTimeout;
    let ticking = false;

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = scrollTop - lastScrollTop;
        
        clearTimeout(scrollTimeout);
        
        if (scrollTop > 50) {
            if (scrollDelta > 0 && scrollTop > 100) {
                header.classList.add('compact');
                header.classList.remove('scrolled');
                
                scrollTimeout = setTimeout(() => {
                    if (scrollTop > lastScrollTop) {
                        header.classList.remove('compact');
                        header.classList.add('scrolled');
                    }
                }, 150);
            } else if (scrollDelta < 0) {
                header.classList.remove('scrolled', 'compact');
            }
        } else {
            header.classList.remove('scrolled', 'compact');
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 100 && header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
            header.classList.add('compact');
        }
    });
}

function initFooterAnimations() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    // Add intersection observer for footer animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    const footerSections = footer.querySelectorAll('.footer-section');
    footerSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(section);
    });
}

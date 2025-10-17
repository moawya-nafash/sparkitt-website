// Header and Footer Loader
// This script handles loading header and footer for all pages

function loadHeader() {
    const headerDiv = document.getElementById('header');
    if (!headerDiv) return;

    // Get current page path to determine correct links
    const currentPath = window.location.pathname;
    const isInPagesFolder = currentPath.includes('/pages/');
    
    // Determine correct paths based on current location
    const homePath = isInPagesFolder ? '../index.html' : 'index.html';
    // use logo.png (no spaces in filename) for consistent path across pages
    const logoPath = isInPagesFolder ? '../media/images/logo.png' : 'media/images/logo.png';
    
    const headerHTML = `
        <header>
            <div class="header-container">
                <div class="logo">
                    <a href="${homePath}">
                        <img src="${logoPath}" alt="Logo" />
                    </a>
                </div>
                <nav class="nav-links">
                    <a href="${homePath}">Home</a>
                    <a href="${isInPagesFolder ? 'about.html' : 'pages/about.html'}">About Us</a>
                    <a href="${isInPagesFolder ? 'services.html' : 'pages/services.html'}">Services</a>
                    <a href="${isInPagesFolder ? 'case-study.html' : 'pages/case-study.html'}">Case Study</a>
                    <a href="${isInPagesFolder ? 'profile.html' : 'pages/profile.html'}">Company Profile</a>
                </nav>
                <div class="demo-btn">
                    <a href="${isInPagesFolder ? 'book-demo.html' : 'pages/book-demo.html'}">Book For Free Demo</a>
                </div>
            </div>
        </header>
    `;
    
    headerDiv.innerHTML = headerHTML;
    initScrollEffect();
}

function loadFooter() {
    const footerDiv = document.getElementById('footer');
    if (!footerDiv) return;

    // Get current page path to determine correct links
    const currentPath = window.location.pathname;
    const isInPagesFolder = currentPath.includes('/pages/');
    
    // Determine correct paths based on current location
    const homePath = isInPagesFolder ? '../index.html' : 'index.html';
    
    const footerHTML = `
        <footer>
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>About Sparkitt</h3>
                        <p>We are a leading technology company committed to delivering innovative solutions and exceptional services to our clients worldwide.</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <p><a href="${homePath}">Home</a></p>
                        <p><a href="${isInPagesFolder ? 'about.html' : 'pages/about.html'}">About Us</a></p>
                        <p><a href="${isInPagesFolder ? 'services.html' : 'pages/services.html'}">Services</a></p>
                        <p><a href="${isInPagesFolder ? 'case-study.html' : 'pages/case-study.html'}">Case Study</a></p>
                        <p><a href="${isInPagesFolder ? 'profile.html' : 'pages/profile.html'}">Company Profile</a></p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Contact Info</h3>
                        <p><i class="icon-phone"></i> Phone: +962 789719248</p>
                        <p><i class="icon-email"></i> Email: growth@sparkitt.info</p>
                        <p><i class="icon-website"></i> Website: www.sparkitt.info</p>
                        <p><i class="icon-location"></i> Address: Jordan, Amman</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Social Media</h3>
                        <div class="social-links">
                            <a href="https://web.facebook.com/profile.php?id=61567060547596" target="_blank" rel="noopener">
                                <i class="icon-facebook"></i> Facebook
                            </a>
                            <a href="https://twitter.com/Sparkittjo" target="_blank" rel="noopener noreferrer">
                                <i class="icon-twitter"></i> Twitter
                            </a>
                            <a href="https://www.linkedin.com/company/sparkitt" target="_blank" rel="noopener noreferrer">
                                <i class="icon-linkedin"></i> LinkedIn
                            </a>
                            <a href="https://www.instagram.com/sparkitt.jo/" target="_blank" rel="noopener">
                                <i class="icon-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Book a Demo</h3>
                        <p>Ready to see our solutions in action?</p>
                        <a href="${isInPagesFolder ? 'book-demo.html' : 'pages/book-demo.html'}" class="booking-btn">Book Free Demo</a>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 Sparkitt. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
    
    footerDiv.innerHTML = footerHTML;
}

// Header scroll effect function
function initScrollEffect() {
    let lastScrollTop = 0;
    let scrollTimeout;
    const header = document.querySelector('header');
    if (!header) return;
    
    let ticking = false;

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = scrollTop - lastScrollTop;
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        if (scrollTop > 50) {
            // Scrolling down - add compact mode first, then hide
            if (scrollDelta > 0 && scrollTop > 100) {
                header.classList.add('compact');
                header.classList.remove('scrolled');
                
                // Hide header after a short delay
                scrollTimeout = setTimeout(() => {
                    if (scrollTop > lastScrollTop) {
                        header.classList.remove('compact');
                        header.classList.add('scrolled');
                    }
                }, 150);
            } else if (scrollDelta < 0) {
                // Scrolling up - show header immediately
                header.classList.remove('scrolled', 'compact');
            }
        } else {
            // At top - always show header in normal mode
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

    // Add scroll event listener with throttling
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Add mouse movement detection to show header when hovering
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 100 && header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
            header.classList.add('compact');
        }
    });
}

// Auto-load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initAnimations();
});

// Also load immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadHeader();
        loadFooter();
        initAnimations();
    });
} else {
    loadHeader();
    loadFooter();
    initAnimations();
}

// Animation effects for page elements
function initAnimations() {
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe case study cards
    document.querySelectorAll('.case-study-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe process steps
    document.querySelectorAll('.process-step').forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(step);
    });

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}
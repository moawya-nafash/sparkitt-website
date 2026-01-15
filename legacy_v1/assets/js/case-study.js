// Script for case-study page: intersection observers and modal popup
document.addEventListener('DOMContentLoaded', function () {
    // Set animation delay index for each card
    document.querySelectorAll('.case-study-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    // Build compact thumbnail for each card (grid view) while keeping full details hidden for modal
    document.querySelectorAll('.case-study-card').forEach(card => {
        // If there's already a thumb, skip
        if (card.querySelector('.card-thumb')) return;

        // Determine image source: data-images (first), or any <img> inside card
            // Use data-thumb for thumbnail if present, else fallback to first image in data-images, else fallback
            let thumbSrc = card.getAttribute('data-thumb');
            if (!thumbSrc) {
                const dataImages = card.getAttribute('data-images');
                if (dataImages) {
                    const arr = dataImages.split(',').map(s => s.trim()).filter(Boolean);
                    if (arr.length) thumbSrc = arr[0];
                }
            }
            if (!thumbSrc) {
                const firstImg = card.querySelector('img');
                if (firstImg) thumbSrc = firstImg.src;
            }

            // Create thumbnail element
            const thumb = document.createElement('img');
            thumb.className = 'card-thumb';
            thumb.alt = card.querySelector('h3') ? card.querySelector('h3').innerText + ' thumbnail' : 'Case study image';
            thumb.src = thumbSrc || '../media/images/Logos/logo.png'; // fallback

        // Wrap existing visible content into .card-content so CSS padding applies
        let contentWrapper = card.querySelector('.card-content');
        if (!contentWrapper) {
            contentWrapper = document.createElement('div');
            contentWrapper.className = 'card-content';
            // move industry and h3 into wrapper (they are visible in compact view)
            const industry = card.querySelector('.industry');
            const title = card.querySelector('h3');
            if (industry) contentWrapper.appendChild(industry);
            if (title) contentWrapper.appendChild(title);
            // move any short excerpt paragraph marked as .card-summary if present
            const p = card.querySelector('.card-summary');
            if (p) contentWrapper.appendChild(p);
            // insert wrapper at end of thumb position
            card.appendChild(contentWrapper);
        }

        // prepend thumb to card
        card.insertBefore(thumb, card.firstChild);
    });

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
        // keep cards visible by default so newly added cards render immediately
        // but still add a transition so intersection observer can animate them
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe process steps
    document.querySelectorAll('.process-step').forEach(step => {
        // don't hide steps by default to avoid invisible elements if scripts run twice
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(step);
    });

    // --- Modal popup for case-study-card ---
    const modalOverlay = document.getElementById('caseModal');
    const modal = modalOverlay && modalOverlay.querySelector('.modal');
    const slidesContainer = modalOverlay && modalOverlay.querySelector('.slides');
    const titleEl = modalOverlay && modalOverlay.querySelector('.modal-title');
    const summaryEl = modalOverlay && modalOverlay.querySelector('.modal-summary');
    const statsEl = modalOverlay && modalOverlay.querySelector('.modal-stats');
    const recsEl = modalOverlay && modalOverlay.querySelector('.modal-recommendations');
    const closeBtn = modalOverlay && modalOverlay.querySelector('.modal-close');
    const prevBtn = modalOverlay && modalOverlay.querySelector('.slide-prev');
    const nextBtn = modalOverlay && modalOverlay.querySelector('.slide-next');

    let currentSlide = 0;
    let autoplayInterval = null;

    function openModalFromCard(card) {
        if (!modalOverlay) return;
        // Populate title & summary
        const title = card.querySelector('h3') ? card.querySelector('h3').innerText : '';
        // prefer an explicitly marked summary paragraph to avoid picking other <p> inside technologies
        const cardSummaryEl = card.querySelector('.card-summary');
        const summary = cardSummaryEl ? cardSummaryEl.innerText : '';
        titleEl.textContent = title;
        // write into the modal's summary element (summaryEl is the modal element from outer scope)
        if (summaryEl) summaryEl.textContent = summary;

        // Clone stats
        const stats = card.querySelector('.case-study-stats');
        statsEl.innerHTML = '';
        if (stats) {
            statsEl.appendChild(stats.cloneNode(true));
        }

        // Clone recommendations / technologies
        const recs = card.querySelector('.technologies');
        recsEl.innerHTML = '';
        if (recs) {
            const heading = document.createElement('h4');
            heading.textContent = '';
            recsEl.appendChild(heading);
            recsEl.appendChild(recs.cloneNode(true));
        }

        // Build slides: look for data-images attribute or <img> inside card
        slidesContainer.innerHTML = '';
            const dataImages = card.getAttribute('data-images');
            let images = [];
            if (dataImages) images = dataImages.split(',').map(s => s.trim()).filter(Boolean);
            else {
                card.querySelectorAll('img').forEach(img => images.push(img.src));
            }

        if (images.length === 0) {
            // create placeholder slide
            const placeholder = document.createElement('div');
            placeholder.className = 'slide placeholder';
            placeholder.textContent = title;
            slidesContainer.appendChild(placeholder);
        } else {
            images.forEach(src => {
                const img = document.createElement('img');
                img.className = 'slide';
                img.src = src;
                img.alt = title + ' image';
                slidesContainer.appendChild(img);
            });
        }

            currentSlide = 0;
            updateSlides();

            // start autoplay if multiple images
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
            const slidesForAutoplay = slidesContainer.querySelectorAll('.slide');
            if (slidesForAutoplay.length > 1) {
                autoplayInterval = setInterval(() => {
                    currentSlide++;
                    if (currentSlide >= slidesForAutoplay.length) {
                        currentSlide = 0;
                    }
                    updateSlides();
                }, 3000);
            }

            modalOverlay.classList.add('open');
            modalOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modalOverlay) return;
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
        modalOverlay.classList.remove('open');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function updateSlides() {
        const slides = slidesContainer.querySelectorAll('.slide');
        slides.forEach((s, i) => {
            s.style.display = (i === currentSlide) ? 'block' : 'none';
        });
    }

    function prevSlide() {
        const slides = slidesContainer.querySelectorAll('.slide');
        if (slides.length) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        }
    }

    function nextSlide() {
        const slides = slidesContainer.querySelectorAll('.slide');
        if (slides.length) {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });

    // Close when clicking outside modal content
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
        // لا توقف التلقائي عند تحريك الماوس فوق المودال
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Open modal when clicking a card
    document.querySelectorAll('.case-study-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Prevent clicks on links inside cards from opening modal
            const tag = e.target.tagName.toLowerCase();
            if (tag === 'a' || e.target.closest('a')) return;
            openModalFromCard(card);
        });
    });
});

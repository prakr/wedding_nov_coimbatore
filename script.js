// ===================================
// Countdown Timer
// ===================================
function initCountdown() {
    // Set wedding date (November 27, 2026 - Cocktail Party Start)
    const weddingDate = new Date('2026-11-27T18:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            // Wedding has passed
            document.getElementById('countdown').innerHTML = '<p style="font-size: 1.5rem; color: var(--primary-color);">We\'re Married! 💕</p>';
            return;
        }

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===================================
// Smooth Scroll Navigation
// ===================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Scroll Animations (Intersection Observer)
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections with fade effect
    const fadeElements = document.querySelectorAll('.section-fade');
    fadeElements.forEach(el => observer.observe(el));
}

// ===================================
// RSVP Form Handling
// ===================================
function initRSVPForm() {
    const form = document.getElementById('rsvpForm');
    const guestsGroup = document.getElementById('guestsGroup');
    const dietaryGroup = document.getElementById('dietaryGroup');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');

    // Get all event checkboxes
    const eventCheckboxes = document.querySelectorAll('input[name^="event_"]');
    const noneCheckbox = document.getElementById('noneCheckbox');
    const eventDayCheckboxes = Array.from(eventCheckboxes).filter(cb => cb !== noneCheckbox);

    // Handle "None" checkbox - uncheck others when selected
    noneCheckbox.addEventListener('change', function() {
        if (this.checked) {
            eventDayCheckboxes.forEach(cb => cb.checked = false);
            guestsGroup.style.display = 'none';
            dietaryGroup.style.display = 'none';
        }
    });

    // Handle event checkboxes - uncheck "None" when any event is selected
    eventDayCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                noneCheckbox.checked = false;
                guestsGroup.style.display = 'block';
                dietaryGroup.style.display = 'block';
            } else {
                // Check if any event is still checked
                const anyChecked = eventDayCheckboxes.some(cb => cb.checked);
                if (!anyChecked) {
                    guestsGroup.style.display = 'none';
                    dietaryGroup.style.display = 'none';
                }
            }
        });
    });

    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Reset message
        formMessage.textContent = '';
        formMessage.className = 'form-message';

        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const anyEventChecked = Array.from(eventCheckboxes).some(cb => cb.checked);

        if (!name || !email) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        if (!anyEventChecked) {
            showMessage('Please select which events you will attend.', 'error');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Submit form using Formspree (or handle locally)
        submitForm(new FormData(form));
    });

    function submitForm(formData) {
        // Check if Formspree is configured
        const formAction = form.getAttribute('action');

        if (formAction.includes('YOUR_FORM_ID')) {
            // Formspree not configured - simulate success
            console.log('Form data:', Object.fromEntries(formData));

            setTimeout(() => {
                showMessage('Thank you for your RSVP! We look forward to celebrating with you! 🎉', 'success');
                form.reset();
                guestsGroup.style.display = 'none';
                dietaryGroup.style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit RSVP';
            }, 1000);
            return;
        }

        // Real Formspree submission
        fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showMessage('Thank you for your RSVP! We look forward to celebrating with you! 🎉', 'success');
                form.reset();
                guestsGroup.style.display = 'none';
                dietaryGroup.style.display = 'none';
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            showMessage('Oops! There was a problem submitting your RSVP. Please try again or contact us directly.', 'error');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit RSVP';
        });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
    }
}

// ===================================
// Active Navigation Highlight
// ===================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        let current = '';
        const navHeight = document.querySelector('.nav').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '';
            link.style.borderBottomColor = '';

            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--primary-color)';
                link.style.borderBottomColor = 'var(--primary-color)';
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Call once on load
}

// ===================================
// Scroll to Top on Page Load
// ===================================
function scrollToTop() {
    window.scrollTo(0, 0);
}

// ===================================
// Initialize All Features
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top on page load
    scrollToTop();

    // Initialize all features
    initCountdown();
    initSmoothScroll();
    initScrollAnimations();
    initRSVPForm();
    initActiveNavigation();

    // Log message for developers
    console.log('%c💍 Wedding Invitation Website', 'color: #d4a574; font-size: 20px; font-weight: bold;');
    console.log('%cTo configure form submission, update the Formspree action in index.html', 'color: #666;');
});

// ===================================
// Handle Browser Back/Forward
// ===================================
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Page was loaded from cache
        scrollToTop();
    }
});

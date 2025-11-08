// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksElement = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinksElement) {
    mobileMenuBtn.addEventListener('click', () => {
        const currentDisplay = window.getComputedStyle(navLinksElement).display;
        navLinksElement.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
        navLinksElement.style.flexDirection = 'column';
        navLinksElement.style.position = 'absolute';
        navLinksElement.style.top = '100%';
        navLinksElement.style.left = '0';
        navLinksElement.style.width = '100%';
        navLinksElement.style.background = 'rgba(26, 31, 58, 0.98)';
        navLinksElement.style.padding = '1rem';
    });
}

// Asegurar que los textos sean visibles al cargar
document.addEventListener('DOMContentLoaded', () => {
    // Forzar visibilidad de elementos con fade-in
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});


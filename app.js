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

// Sistema de Traducción
let currentLang = localStorage.getItem('cv-lang') || 'es';

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((o, p) => o && o[p], obj);
}

function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('cv-lang', lang);
    
    const t = translations[lang];
    if (!t) return;
    
    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Traducir todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(t, key);
        
        if (translation) {
            if (element.hasAttribute('data-translate-html')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Inicializar traducción al cargar
document.addEventListener('DOMContentLoaded', () => {
    // Cargar idioma guardado
    translatePage(currentLang);
    
    // Event listeners para botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
    
    // Forzar visibilidad de elementos con fade-in
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});


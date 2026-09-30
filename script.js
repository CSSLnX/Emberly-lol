// ============================================
// CONFIGURATION - EDITABLE
// ============================================

// Download URL - Replace with actual download URL
const DOWNLOAD_URL = "https://cold4.gofile.io/download/web/5043becf-f1f2-4ea2-a449-843579868a2c/Bootstrapper.zip";

// Discord URL
const DISCORD_URL = "https://discord.gg/Jkj6xTSMRr";

// Language translations
const translations = {
    en: {
        current: "English",
        title: "Emberly",
        description: "An Executor Built Beyond The Usual.",
        badge1: "100% sUNC",
        badge2: "99% UNC",
        badge3: "Smooth",
        badge4: "Stable",
        download: "Download",
        discord: "Discord",
        feature1Title: "Smooth",
        feature1Desc: "Designed to feel responsive and lightweight.",
        feature2Title: "Stable",
        feature2Desc: "Built with stability and consistency in mind.",
        feature3Title: "Performance",
        feature3Desc: "100% sUNC and 99% UNC."
    },
    es: {
        current: "Español",
        title: "Emberly",
        description: "Un ejecutor construido más allá de lo habitual.",
        badge1: "100% sUNC",
        badge2: "99% UNC",
        badge3: "Suave",
        badge4: "Estable",
        download: "Descargar",
        discord: "Discord",
        feature1Title: "Suave",
        feature1Desc: "Diseñado para sentirse responsivo y ligero.",
        feature2Title: "Estable",
        feature2Desc: "Construido con estabilidad y consistencia en mente.",
        feature3Title: "Rendimiento",
        feature3Desc: "100% sUNC y 99% UNC."
    },
    pt: {
        current: "Português",
        title: "Emberly",
        description: "Um Executor construído além do convencional.",
        badge1: "100% sUNC",
        badge2: "99% UNC",
        badge3: "Suave",
        badge4: "Estável",
        download: "Baixar",
        discord: "Discord",
        feature1Title: "Suave",
        feature1Desc: "Projetado para ser responsivo e leve.",
        feature2Title: "Estável",
        feature2Desc: "Construído com estabilidade e consistência em mente.",
        feature3Title: "Desempenho",
        feature3Desc: "100% sUNC e 99% UNC."
    },
    de: {
        current: "Deutsch",
        title: "Emberly",
        description: "Een executeur die uitblinkt boven het gewone.",
        badge1: "100% sUNC",
        badge2: "99% UNC",
        badge3: "Sanft",
        badge4: "Stabil",
        download: "Herunterladen",
        discord: "Discord",
        feature1Title: "Sanft",
        feature1Desc: "Entwickelt, um sich reaktionsschnell und leicht anzufühlen.",
        feature2Title: "Stabil",
        feature2Desc: "Mit Stabilität und Konsistenz im Hinterkopf entwickelt.",
        feature3Title: "Leistung",
        feature3Desc: "100% sUNC und 99% UNC."
    },
    fr: {
        current: "Français",
        title: "Emberly",
        description: "Un exécuteur testamentaire hors du commun.",
        badge1: "100% sUNC",
        badge2: "99% UNC",
        badge3: "Fluide",
        badge4: "Stable",
        download: "Télécharger",
        discord: "Discord",
        feature1Title: "Fluide",
        feature1Desc: "Conçu pour être réactif et léger.",
        feature2Title: "Stable",
        feature2Desc: "Conçu avec la stabilité et la cohérence à l'esprit.",
        feature3Title: "Performance",
        feature3Desc: "100% sUNC et 99% UNC."
    }
};

// ============================================
// DOM ELEMENTS
// ============================================

// Language selector
const languageButton = document.getElementById('languageButton');
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const languageText = document.querySelector('.language-text[data-lang="current"]');

// Download button
const downloadButton = document.getElementById('downloadButton');

// Modal elements
const termsButton = document.getElementById('termsButton');
const termsModal = document.getElementById('termsModal');
const termsOverlay = document.getElementById('termsOverlay');
const termsClose = document.getElementById('termsClose');

const privacyButton = document.getElementById('privacyButton');
const privacyModal = document.getElementById('privacyModal');
const privacyOverlay = document.getElementById('privacyOverlay');
const privacyClose = document.getElementById('privacyClose');

// ============================================
// LANGUAGE SELECTOR FUNCTIONALITY
// ============================================

let currentLang = 'en';

function toggleLanguageDropdown() {
    const isActive = languageDropdown.classList.contains('active');
    languageDropdown.classList.toggle('active');
    languageButton.setAttribute('aria-expanded', !isActive);
}

function closeLanguageDropdown() {
    languageDropdown.classList.remove('active');
    languageButton.setAttribute('aria-expanded', 'false');
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    const translation = translations[lang];
    
    // Update current language display
    languageText.textContent = translation.current;
    
    // Update all translatable elements
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('emberly-lang', lang);
    
    closeLanguageDropdown();
}

// Language button click
languageButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLanguageDropdown();
});

// Language option clicks
languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
        closeLanguageDropdown();
    }
});

// Load saved language preference
const savedLang = localStorage.getItem('emberly-lang');
if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
}

// ============================================
// DOWNLOAD BUTTON FUNCTIONALITY
// ============================================

downloadButton.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = DOWNLOAD_URL;
});

// ============================================
// MODAL FUNCTIONALITY
// ============================================

function openModal(modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        setTimeout(() => closeBtn.focus(), 100);
    }
}

function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Terms of Service modal
termsButton.addEventListener('click', () => openModal(termsModal));
termsOverlay.addEventListener('click', () => closeModal(termsModal));
termsClose.addEventListener('click', () => closeModal(termsModal));

// Privacy Policy modal
privacyButton.addEventListener('click', () => openModal(privacyModal));
privacyOverlay.addEventListener('click', () => closeModal(privacyModal));
privacyClose.addEventListener('click', () => closeModal(privacyModal));

// Close modals with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (termsModal.classList.contains('active')) {
            closeModal(termsModal);
        }
        if (privacyModal.classList.contains('active')) {
            closeModal(privacyModal);
        }
    }
});

// ============================================
// PARALLAX EFFECT FOR BOTANICAL ELEMENTS
// ============================================

let ticking = false;

function updateParallax(e) {
    if (ticking) return;
    
    ticking = true;
    
    requestAnimationFrame(() => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const leaves = document.querySelectorAll('.botanical-leaf');
        const vines = document.querySelectorAll('.botanical-vine');
        const stems = document.querySelectorAll('.botanical-stem');
        
        // Subtle parallax movement for leaves
        leaves.forEach((leaf, index) => {
            const speed = 3 + (index * 0.5);
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            // Add to existing transform from animation
            const currentTransform = leaf.style.transform || '';
            leaf.style.transform = `${currentTransform} translate(${x}px, ${y}px)`;
        });
        
        // Subtle parallax movement for vines
        vines.forEach((vine, index) => {
            const speed = 2 + (index * 0.3);
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            const currentTransform = vine.style.transform || '';
            vine.style.transform = `${currentTransform} translate(${x}px, ${y}px)`;
        });
        
        // Subtle parallax movement for stems
        stems.forEach((stem, index) => {
            const speed = 1.5 + (index * 0.2);
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            const currentTransform = stem.style.transform || '';
            stem.style.transform = `${currentTransform} translate(${x}px, ${y}px)`;
        });
        
        ticking = false;
    });
}

// Only enable parallax if user doesn't prefer reduced motion
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener('mousemove', updateParallax);
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ACCESSIBILITY: VISIBLE FOCUS STATES
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ============================================
// INITIALIZATION
// ============================================

// Ensure botanical elements are visible after page load
window.addEventListener('load', () => {
    const leaves = document.querySelectorAll('.botanical-leaf');
    const vines = document.querySelectorAll('.botanical-vine');
    const stems = document.querySelectorAll('.botanical-stem');
    
    // Elements are already styled with CSS opacity, no need to set manually
    // This is kept for any future initialization needs
});

console.log('Emberly website loaded successfully');

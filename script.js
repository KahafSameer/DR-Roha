// Romantic Website JavaScript
class RomanticWebsite {
    constructor() {
        this.musicPlaying = false;
        this.music = document.getElementById('backgroundMusic');
        this.musicToggle = document.getElementById('musicToggle');
        this.musicIcon = document.getElementById('musicIcon');
        this.musicText = document.getElementById('musicText');
        this.floatingElements = document.getElementById('floatingElements');
        this.rosePetals = document.getElementById('rosePetals');
        this.easterEggModal = document.getElementById('easterEggModal');
        this.heartButton = document.getElementById('heartButton');
        this.closeModal = document.getElementById('closeModal');
        this.scrollDown = document.getElementById('scrollDown');
        this.imageModal = document.getElementById('imageModal');
        this.closeImageModal = document.getElementById('closeImageModal');
        this.darkModeToggle = document.getElementById('darkModeToggle');
        this.darkModeIcon = document.getElementById('darkModeIcon');
        this.body = document.getElementById('body');
        
        this.init();
    }

    init() {
        this.hideLoadingScreen();
        this.setupMusicToggle();
        this.createFloatingElements();
        this.createRosePetals();
        this.loadGalleryImages();
        this.setupCountdownTimer();
        this.setupEasterEgg();
        this.setupScrollAnimations();
        this.setupImageLazyLoading();
        this.setupScrollDown();
        this.setupImageModal();
        this.setupDarkMode();
        this.setupGSAPAnimations();
        this.attemptMusicAutoplay();
        this.testImageLoading();
    }

    // Test image loading
    testImageLoading() {
        console.log('Testing image loading...');
        const testImages = [
            'assets/her/IMG-20250929-WA0021.jpg',
            'assets/we/IMG-20251021-WA0026.jpg'
        ];
        
        testImages.forEach(src => {
            const img = new Image();
            img.onload = () => console.log('✅ Image loaded:', src);
            img.onerror = () => console.log('❌ Image failed:', src);
            img.src = src;
        });
    }

    // Hide Loading Screen
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transition = 'opacity 1s ease-out';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000);
            }
        }, 2000);
    }

    // Music Toggle Functionality
    setupMusicToggle() {
        this.musicToggle.addEventListener('click', () => {
            if (this.musicPlaying) {
                this.music.pause();
                this.musicIcon.textContent = '🔇';
                this.musicText.textContent = 'Play Our Song';
                console.log('Music paused');
            } else {
                this.music.volume = 0.3;
                this.music.play().then(() => {
                    this.musicPlaying = true;
                    this.musicIcon.textContent = '💖';
                    this.musicText.textContent = 'Playing Our Song';
                    console.log('Music started playing!');
                }).catch(e => {
                    console.log('Audio play failed:', e);
                    this.musicText.textContent = 'Click to Enable Music';
                });
            }
        });

        // Handle music events
        this.music.addEventListener('play', () => {
            this.musicPlaying = true;
            this.musicIcon.textContent = '🎵';
        });

        this.music.addEventListener('pause', () => {
            this.musicPlaying = false;
            this.musicIcon.textContent = '🔇';
        });
    }

    // Floating Elements Animation
    createFloatingElements() {
        const symbols = ['❤️', '💕', '💖', '💗', '💝', '🌸', '🦋', '✨', '💫', '🌟', '💘', '💞', '💟', '🌺', '🌻', '🌷', '🌹'];
        
        setInterval(() => {
            if (this.floatingElements.children.length < 30) {
                const element = document.createElement('div');
                element.className = 'floating-heart';
                element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                
                // Random position and properties
                element.style.left = Math.random() * 100 + '%';
                element.style.top = '100%';
                element.style.fontSize = (Math.random() * 20 + 15) + 'px';
                element.style.animationDuration = (Math.random() * 3 + 5) + 's';
                element.style.animationDelay = Math.random() * 1 + 's';
                element.style.filter = 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.8))';
                
                this.floatingElements.appendChild(element);
                
                // Remove element after animation
                setTimeout(() => {
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                    }
                }, 8000);
            }
        }, 800);
    }

    // Rose Petals Animation
    createRosePetals() {
        const petals = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌿', '🍀'];
        
        setInterval(() => {
            if (this.rosePetals.children.length < 25) {
                const petal = document.createElement('div');
                petal.className = 'rose-petal';
                petal.textContent = petals[Math.floor(Math.random() * petals.length)];
                
                // Random position and properties
                petal.style.left = Math.random() * 100 + '%';
                petal.style.top = '-50px';
                petal.style.fontSize = (Math.random() * 15 + 12) + 'px';
                petal.style.animationDuration = (Math.random() * 3 + 6) + 's';
                petal.style.animationDelay = Math.random() * 2 + 's';
                petal.style.filter = 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.6))';
                
                this.rosePetals.appendChild(petal);
                
                // Remove petal after animation
                setTimeout(() => {
                    if (petal.parentNode) {
                        petal.parentNode.removeChild(petal);
                    }
                }, 10000);
            }
        }, 1200);
    }

    // Music Autoplay Attempt
    attemptMusicAutoplay() {
        // Try to autoplay music with user interaction
        const playMusic = () => {
            this.music.volume = 0.3;
            this.music.play().then(() => {
                this.musicPlaying = true;
                this.musicIcon.textContent = '💖';
                this.musicText.textContent = 'Playing Our Song';
                console.log('Music started playing!');
            }).catch(e => {
                console.log('Autoplay prevented:', e);
                this.musicText.textContent = 'Click to Play Our Song';
            });
        };

        // Try autoplay after a short delay
        setTimeout(playMusic, 2000);

        // Also try on first user interaction
        document.addEventListener('click', playMusic, { once: true });
        document.addEventListener('touchstart', playMusic, { once: true });
        document.addEventListener('keydown', playMusic, { once: true });
    }

    // Load Gallery Images
    async loadGalleryImages() {
        const herGallery = document.getElementById('herGallery');
        const weGallery = document.getElementById('weGallery');
        
        // Her photos - Your actual images with poetic captions
        const herImages = [
            { src: 'assets/her/IMG-20250929-WA0021.jpg', caption: 'Her radiant smile lights up my world' },
            { src: 'assets/her/IMG-20251021-WA0021.jpg', caption: 'Every glance from her eyes is poetry' },
            { src: 'assets/her/IMG-20251021-WA0022.jpg', caption: 'She is my sunshine on the cloudiest days' },
            { src: 'assets/her/IMG-20251021-WA0023.jpg', caption: 'Her beauty takes my breath away' },
            { src: 'assets/her/IMG-20251021-WA0024.jpg', caption: 'She makes my heart skip a beat' },
            { src: 'assets/her/IMG-20251021-WA0025.jpg', caption: 'Her laughter is my favorite melody' }
        ];
        
        // Our photos - Your actual images with romantic captions
        const weImages = [
            { src: 'assets/we/IMG-20251021-WA0026.jpg', caption: 'Our love story continues to unfold' },
            { src: 'assets/we/IMG-20251021-WA0027.jpg', caption: 'Together we are unstoppable' },
            { src: 'assets/we/IMG-20251021-WA0028.jpg', caption: 'Every day with you is a precious gift' },
            { src: 'assets/we/IMG-20251021-WA0029.jpg', caption: 'You and me against the world' },
            { src: 'assets/we/IMG-20251021-WA0030.jpg', caption: 'Our memories are treasures beyond measure' },
            { src: 'assets/we/IMG-20251021-WA0031.jpg', caption: 'Forever and always, my love' },
            { src: 'assets/we/IMG-20251021-WA0032.jpg', caption: 'In your arms, I found my home' },
            { src: 'assets/we/IMG-20251021-WA0033.jpg', caption: 'Our journey together is just beginning' },
            { src: 'assets/we/IMG-20251021-WA0034.jpg', caption: 'You complete me in every way' },
            { src: 'assets/we/IMG-20251021-WA0035.jpg', caption: 'With you, every moment is magical' },
            { src: 'assets/we/IMG-20251021-WA0036.jpg', caption: 'Our love grows stronger each day' },
            { src: 'assets/we/IMG-20251021-WA0037.jpg', caption: 'You are my greatest adventure' },
            { src: 'assets/we/IMG-20251021-WA0038.jpg', caption: 'Together we create beautiful memories' },
            { src: 'assets/we/IMG-20251021-WA0039.jpg', caption: 'Our bond is unbreakable' },
            { src: 'assets/we/IMG-20251021-WA0040.jpg', caption: 'In your eyes, I see forever' },
            { src: 'assets/we/IMG-20251021-WA0041.jpg', caption: 'You are my heart\'s greatest treasure' },
            { src: 'assets/we/IMG-20251021-WA0042.jpg', caption: 'Our love story is my favorite' },
            { src: 'assets/we/IMG-20251021-WA0043.jpg', caption: 'With you, I am complete' },
            { src: 'assets/we/IMG-20251021-WA0044.jpg', caption: 'Every day with you is a blessing' },
            { src: 'assets/we/IMG-20251022-WA0007.jpg', caption: 'Our love is written in the stars' }
        ];

        // Create gallery items for her photos
        console.log('Loading her photos:', herImages);
        if (herImages.length > 0) {
            herImages.forEach((imageData, index) => {
                const galleryItem = this.createGalleryItem(imageData.src, imageData.caption, true);
                herGallery.appendChild(galleryItem);
            });
        } else {
            herGallery.innerHTML = '<div class="col-span-full text-center text-pink-600 text-xl">No photos found in assets/her/ folder</div>';
        }

        // Create gallery items for our photos
        console.log('Loading our photos:', weImages);
        if (weImages.length > 0) {
            weImages.forEach((imageData, index) => {
                const galleryItem = this.createGalleryItem(imageData.src, imageData.caption, false);
                weGallery.appendChild(galleryItem);
            });
        } else {
            weGallery.innerHTML = '<div class="col-span-full text-center text-pink-600 text-xl">No photos found in assets/we/ folder</div>';
        }
    }

    createGalleryItem(src, caption, isHerPhoto = false) {
        const item = document.createElement('div');
        item.className = 'gallery-item group';
        
        item.innerHTML = `
            <img src="${src}" alt="${caption}" loading="lazy" class="transition-transform duration-300 group-hover:scale-110" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div class="gallery-overlay">
                <div class="text-center">
                    <div class="text-4xl mb-2">💕</div>
                    <div class="text-sm">${caption}</div>
                </div>
            </div>
            <div class="gallery-caption poetic-captions">
                ${caption}
            </div>
            <div class="error-message" style="display: none; padding: 2rem; text-align: center; color: #ec4899;">
                <div class="text-4xl mb-2">📷</div>
                <div>Image loading...</div>
            </div>
        `;
        
        // Add click to enlarge functionality
        item.addEventListener('click', () => {
            this.showImageModal(src, caption);
        });
        
        // Add image load success handler
        const img = item.querySelector('img');
        img.addEventListener('load', () => {
            console.log('Image loaded successfully:', src);
        });
        
        img.addEventListener('error', () => {
            console.log('Image failed to load:', src);
        });
        
        return item;
    }

    showImageModal(src, caption) {
        const modalImage = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        
        modalImage.src = src;
        modalImage.alt = caption;
        modalCaption.textContent = caption;
        
        this.imageModal.classList.remove('hidden');
    }

    // Setup Image Modal
    setupImageModal() {
        this.closeImageModal.addEventListener('click', () => {
            this.imageModal.classList.add('hidden');
        });
        
        this.imageModal.addEventListener('click', (e) => {
            if (e.target === this.imageModal) {
                this.imageModal.classList.add('hidden');
            }
        });
    }

    // Setup Scroll Down Button
    setupScrollDown() {
        this.scrollDown.addEventListener('click', () => {
            document.getElementById('gallery').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Countdown Timer
    setupCountdownTimer() {
        // Set the date when you first met (you can change this)
        const startDate = new Date('2024-01-01'); // Change this to your actual date
        
        const updateCountdown = () => {
            const now = new Date();
            const timeDiff = now - startDate;
            
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            
            this.updateCountdownDisplay('days', days);
            this.updateCountdownDisplay('hours', hours);
            this.updateCountdownDisplay('minutes', minutes);
        };
        
        updateCountdown();
        setInterval(updateCountdown, 60000); // Update every minute
    }

    updateCountdownDisplay(elementId, newValue) {
        const element = document.getElementById(elementId);
        const currentValue = parseInt(element.textContent);
        
        if (currentValue !== newValue) {
            element.classList.add('animate-flip');
            setTimeout(() => {
                element.textContent = newValue;
                element.classList.remove('animate-flip');
            }, 300);
        }
    }

    // Easter Egg Functionality
    setupEasterEgg() {
        let clickCount = 0;
        
        this.heartButton.addEventListener('click', () => {
            clickCount++;
            
            if (clickCount === 1) {
                this.heartButton.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.heartButton.style.transform = 'scale(1)';
                }, 200);
            } else if (clickCount === 3) {
                this.showEasterEgg();
                clickCount = 0;
            }
        });
        
        this.closeModal.addEventListener('click', () => {
            this.easterEggModal.classList.add('hidden');
        });
        
        this.easterEggModal.addEventListener('click', (e) => {
            if (e.target === this.easterEggModal) {
                this.easterEggModal.classList.add('hidden');
            }
        });
    }

    showEasterEgg() {
        this.easterEggModal.classList.remove('hidden');
        
        // Add confetti effect
        this.createConfetti();
        
        // Play a sound effect if available
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBS13yO/eizEIHWq+8+OWT');
        audio.play().catch(e => console.log('Audio play failed:', e));
    }

    createConfetti() {
        const colors = ['#ec4899', '#9333ea', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'];
        const shapes = ['💕', '💖', '💗', '💝', '✨', '💫', '🌟', '🦋', '🌸', '🌹', '🌺', '🌻'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.fontSize = (Math.random() * 25 + 15) + 'px';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-50px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.userSelect = 'none';
            confetti.style.filter = 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))';
            
            document.body.appendChild(confetti);
            
            // Enhanced confetti animation with GSAP
            gsap.to(confetti, {
                y: window.innerHeight + 100,
                x: (Math.random() - 0.5) * 300,
                rotation: Math.random() * 1080,
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0,
                duration: Math.random() * 4 + 3,
                ease: "power2.out",
                onComplete: () => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }
            });
        }
        
        // Add rose petals for extra romance
        this.createRosePetalsBurst();
    }

    createRosePetalsBurst() {
        const petals = ['🌹', '🌺', '🌻', '🌷', '🌸'];
        
        for (let i = 0; i < 30; i++) {
            const petal = document.createElement('div');
            petal.style.position = 'fixed';
            petal.style.fontSize = (Math.random() * 15 + 12) + 'px';
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * window.innerWidth + 'px';
            petal.style.top = '-30px';
            petal.style.pointerEvents = 'none';
            petal.style.zIndex = '9998';
            petal.style.userSelect = 'none';
            
            document.body.appendChild(petal);
            
            gsap.to(petal, {
                y: window.innerHeight + 50,
                x: (Math.random() - 0.5) * 150,
                rotation: Math.random() * 360,
                opacity: 0,
                duration: Math.random() * 3 + 4,
                ease: "power1.out",
                onComplete: () => {
                    if (petal.parentNode) {
                        petal.parentNode.removeChild(petal);
                    }
                }
            });
        }
    }

    // Dark Mode Toggle
    setupDarkMode() {
        this.darkModeToggle.addEventListener('click', () => {
            this.body.classList.toggle('dark-mode');
            
            if (this.body.classList.contains('dark-mode')) {
                this.darkModeIcon.textContent = '☀️';
                localStorage.setItem('darkMode', 'enabled');
            } else {
                this.darkModeIcon.textContent = '🌙';
                localStorage.setItem('darkMode', 'disabled');
            }
        });

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            this.body.classList.add('dark-mode');
            this.darkModeIcon.textContent = '☀️';
        }
    }

    // Setup GSAP Animations
    setupGSAPAnimations() {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animations
        gsap.timeline()
            .from('.hero-title', { duration: 1.5, y: 100, opacity: 0, ease: "power3.out" })
            .from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, ease: "power2.out" }, "-=1")
            .from('.hero-buttons', { duration: 1, y: 30, opacity: 0, ease: "power2.out" }, "-=0.5");
        
        // Gallery animations
        gsap.from('.gallery-item', {
            duration: 0.8,
            y: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#gallery',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Poetry section animations
        gsap.from('.poetry-card', {
            duration: 1,
            y: 80,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#poetry',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Countdown animations
        gsap.from('.countdown-card', {
            duration: 1,
            scale: 0.8,
            opacity: 0,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: '#countdown',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Floating elements continuous animation
        gsap.to('.floating-heart', {
            duration: 4,
            y: -100,
            x: (Math.random() - 0.5) * 100,
            rotation: 360,
            opacity: 0,
            ease: "power1.out",
            repeat: -1,
            yoyo: false
        });
    }

    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    // Lazy Loading for Images
    setupImageLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('loading');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.classList.add('loading');
            imageObserver.observe(img);
        });
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RomanticWebsite();
    
    // Add some romantic touches
    document.body.style.cursor = 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIxLjM1TDEwLjU1IDE5LjkwQzUuNCAxNS4zNiAyIDEyLjI3IDIgOC41QzIgNS40MSA0LjQyIDMgNy41IDNDOS4yNCAzIDEwLjkxIDMuODEgMTIgNS4wOEMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzQzE5LjU4IDMgMjIgNS40MSAyMiA4LjVDMjIgMTIuMjcgMTguNiAxNS4zNiAxMy40NSAxOS45TDEyIDIxLjM1WiIgZmlsbD0iI2VjNDg5OSIvPgo8L3N2Zz4K"), auto';
});

// Add some romantic console messages
console.log('%c💕 For My Beloved Roha 💕', 'color: #ec4899; font-size: 20px; font-weight: bold;');
console.log('%cYou are my favorite bug — unpredictable, irresistible, and I never want to debug you 💖', 'color: #9333ea; font-size: 14px;');
console.log('%cWill you be my forever deploy? 💕', 'color: #f472b6; font-size: 16px; font-style: italic;');

// Add romantic cursor
document.body.style.cursor = 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIxLjM1TDEwLjU1IDE5LjkwQzUuNCAxNS4zNiAyIDEyLjI3IDIgOC41QzIgNS40MSA0LjQyIDMgNy41IDNDOS4yNCAzIDEwLjkxIDMuODEgMTIgNS4wOEMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzQzE5LjU4IDMgMjIgNS40MSAyMiA4LjVDMjIgMTIuMjcgMTguNiAxNS4zNiAxMy40NSAxOS45TDEyIDIxLjM1WiIgZmlsbD0iI2VjNDg5OSIvPgo8L3N2Zz4K"), auto';

// Add romantic page title animation
let titleIndex = 0;
const romanticTitles = [
    "For My Beloved Roha ❤️",
    "Our Love Story 💕",
    "Forever & Always 💖",
    "You & Me 💗",
    "My Heart 💝"
];

setInterval(() => {
    titleIndex = (titleIndex + 1) % romanticTitles.length;
    document.title = romanticTitles[titleIndex];
}, 3000);

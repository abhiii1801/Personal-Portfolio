// Navigation scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('nav');
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
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

        // Fade in animation on scroll
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

        // Enhanced hover effects for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Interactive skill category effects
        document.querySelectorAll('.skill-category').forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                skill.style.transform = 'translateY(-10px) rotateY(5deg)';
            });
            
            skill.addEventListener('mouseleave', () => {
                skill.style.transform = 'translateY(0) rotateY(0deg)';
            });
        });

        // Dynamic background effect for hero
        const hero = document.querySelector('.hero');
        let mouseX = 0;
        let mouseY = 0;

        hero.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 100;
            mouseY = (e.clientY / window.innerHeight) * 100;
            
            hero.style.background = `
                radial-gradient(circle at ${mouseX}% ${mouseY}%, 
                rgba(64, 150, 255, 0.12) 0%, 
                rgba(24, 144, 255, 0.06) 30%, 
                transparent 70%),
                linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)
            `;
        });

        // Typing effect for hero greeting
        const greeting = document.querySelector('.hero-greeting');
        const originalGreeting = greeting.textContent;
        greeting.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeGreeting = () => {
                if (i < originalGreeting.length) {
                    greeting.textContent += originalGreeting.charAt(i);
                    i++;
                    setTimeout(typeGreeting, 100);
                }
            };
            typeGreeting();
        }, 1000);

        // Animated counter for experience items
        const animateCounters = () => {
            const counters = document.querySelectorAll('.experience-item');
            counters.forEach((counter, index) => {
                counter.style.animationDelay = `${index * 0.2}s`;
            });
        };

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            animateCounters();
        });

        // Contact form hover effects
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px) scale(1.05)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Resume button click animation
        document.querySelector('.resume-button').addEventListener('click', (e) => {
            e.preventDefault();
            const button = e.target;
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                // Here you would typically trigger the actual download
                alert('Resume download would start here!');
            }, 150);
        });

        // Parallax effect for sections
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-photo');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
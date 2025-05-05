document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle.js for subtle floating background
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: ['#1a1a2e', '#dc2430']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.2,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#1a1a2e',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 6,
                        duration: 2,
                        opacity: 0.4,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced reveal animations on scroll
    const revealElements = document.querySelectorAll('.section-header, .card, .timeline-item, .stat, .faq-item');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };
    
    // Add reveal class to elements for CSS transitions
    revealElements.forEach(element => {
        element.classList.add('reveal-element');
    });
    
    // Check on initial load
    revealOnScroll();
    
    // Enhanced parallax effect for elements
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    
    const handleParallax = () => {
        const scrollPosition = window.scrollY;
        
        parallaxElements.forEach(element => {
            if (element.classList.contains('parallax-slow')) {
                element.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            } else if (element.classList.contains('parallax-medium')) {
                element.style.transform = `translateY(${scrollPosition * 0.03}px)`;
            } else if (element.classList.contains('parallax-fast')) {
                element.style.transform = `translateY(${scrollPosition * 0.01}px)`;
            }
        });
    };
    
    // Throttle scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(() => {
            revealOnScroll();
            handleParallax();
        });
    });

    // Add dynamic gradient effect to the hero section
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const gradientX = Math.floor((x / rect.width) * 100);
            const gradientY = Math.floor((y / rect.height) * 100);
            
            hero.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(220, 36, 48, 0.05) 0%, rgba(255, 255, 255, 0) 70%)`;
        });
    }

    // Enhanced 3D hover effects for cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate the rotation values based on mouse position
            const rotateY = ((x / rect.width) - 0.5) * 10;
            const rotateX = ((y / rect.height) - 0.5) * -10;
            
            // Apply the 3D transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            
            // Add dynamic highlight based on mouse position
            const gradientX = Math.floor((x / rect.width) * 100);
            const gradientY = Math.floor((y / rect.height) * 100);
            
            card.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 255, 255, 1) 0%, rgba(248, 249, 250, 0.8) 70%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset the transform when mouse leaves
            card.style.transform = '';
            card.style.background = '#ffffff';
            
            // Re-add the float animation class if it had one
            if (card.classList.contains('float')) {
                card.style.animation = 'floatAnimation 3s ease-in-out infinite';
                
                if (card.classList.contains('float-delay-1')) {
                    card.style.animationDelay = '0.5s';
                } else if (card.classList.contains('float-delay-2')) {
                    card.style.animationDelay = '1s';
                }
            }
        });
        
        card.addEventListener('mouseenter', () => {
            const siblings = Array.from(card.parentNode.children).filter(el => el !== card);
            siblings.forEach(sibling => {
                sibling.style.opacity = '0.7';
                sibling.style.transform = 'scale(0.98)';
            });
            
            // Pause float animation while hovering
            if (card.classList.contains('float')) {
                card.style.animation = 'none';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const siblings = Array.from(card.parentNode.children);
            siblings.forEach(sibling => {
                sibling.style.opacity = '1';
                sibling.style.transform = '';
            });
        });
    });

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Toggle FAQ answers
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle the clicked FAQ
            item.classList.toggle('active');
        });
    });
    
    // Add parallax effect to the background
    const gradientBg = document.querySelector('.gradient-bg');
    
    if (gradientBg) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            gradientBg.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        });
    }
    
    // Custom cursor spotlight effect for certain sections
    const cursorSections = document.querySelectorAll('.cta-section, .journey-section');
    
    cursorSections.forEach(section => {
        section.addEventListener('mousemove', (e) => {
            const spotlight = document.createElement('div');
            spotlight.classList.add('cursor-spotlight');
            spotlight.style.left = `${e.pageX}px`;
            spotlight.style.top = `${e.pageY}px`;
            
            // Use appropriate color based on section
            if (section.classList.contains('cta-section')) {
                spotlight.style.background = 'radial-gradient(circle, rgba(220, 36, 48, 0.4) 0%, rgba(220, 36, 48, 0) 70%)';
            } else {
                spotlight.style.background = 'radial-gradient(circle, rgba(220, 36, 48, 0.2) 0%, rgba(220, 36, 48, 0) 70%)';
            }
            
            document.body.appendChild(spotlight);
            
            setTimeout(() => {
                spotlight.remove();
            }, 1000);
        });
    });
});

// Add CSS for reveal animations and cursor spotlight
const style = document.createElement('style');
style.textContent = `
    .reveal-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .card {
        transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease, background 0.3s ease;
    }
    
    #particles-js {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        pointer-events: none;
    }
    
    .cursor-spotlight {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        animation: spotlightFadeOut 1s forwards;
    }
    
    @keyframes spotlightFadeOut {
        0% {
            opacity: 0.7;
            width: 30px;
            height: 30px;
        }
        100% {
            opacity: 0;
            width: 100px;
            height: 100px;
        }
    }
    
    @keyframes fadeIn {
        from { 
            opacity: 0; 
            transform: translateY(20px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
    
    .hero h1, .hero .subtitle, .hero .cta-button {
        animation: fadeIn 1s ease-out forwards;
    }
    
    .hero .subtitle {
        animation-delay: 0.3s;
    }
    
    .hero .cta-button {
        animation-delay: 0.6s;
        opacity: 0;
    }
`;
document.head.appendChild(style); 
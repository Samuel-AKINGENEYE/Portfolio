document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Animate skill bars on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const progressBar = item.querySelector('.skill-progress');
            const targetWidth = item.style.getPropertyValue('--target-width');
            
            if (isElementInViewport(item)) {
                progressBar.style.width = targetWidth;
            }
        });
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Initial check and then on scroll
    animateSkills();
    window.addEventListener('scroll', animateSkills);
    
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize animations when elements come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item');
        
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Set current year in footer
    const yearElement = document.querySelector('.footer-bottom');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.querySelector('p').textContent = `© ${currentYear} Samuel Akingeneye. All Rights Reserved.`;
    }
});
const typedTextSpan = document.querySelector(".typed-text");

  const textArray = [
    "Hi, I'm Samuel AKINGENEYE",
    "Full stack web developer,",
    "UI & UX designer,",
    "Cybersecurity enthusiast,",
    "Data analyst,",
    "Email marketing specialist,",
    "Environmental health practitioner."
  ];

  const typingDelay = 100; // Delay between typing each character
  const erasingDelay = 50; // Delay between erasing each character
  const newTextDelay = 1500; // Delay after typing a line before erasing
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500); // Delay before typing the next line
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000); // Initial delay before starting
  });
  function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    btn.textContent = btn.textContent === '✖' ? '☰' : '✖';
  }
  
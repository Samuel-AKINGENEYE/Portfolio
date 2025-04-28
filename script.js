// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

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

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter items
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For this example, we'll just log it and show an alert
    console.log({ name, email, subject, message });
    
    alert('Thank you for your message, ' + name + '! I will get back to you soon.');
    contactForm.reset();
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
// Animate progress bars when they come into view
document.addEventListener('DOMContentLoaded', function() {
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 100);
});
};

// Run animation when skills section is in view
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
    }
});
}, { threshold: 0.2 });

const skillsSection = document.querySelector('.skills-container');
if (skillsSection) {
observer.observe(skillsSection);
}
});
// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
// Animate elements on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load

// Enhanced hover effects for footer links
const footerLinks = document.querySelectorAll('.footer-links a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateX(5px)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
    });
});
});
// Animate skills when they come into view
document.addEventListener('DOMContentLoaded', function() {
const skillItems = document.querySelectorAll('.skill-item');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
    }
});
}, { threshold: 0.2 });

skillItems.forEach(item => {
observer.observe(item);
});
});
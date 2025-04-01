
// Navigation scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.parentElement.classList.toggle('menu-open');
  navLinks.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.parentElement.classList.remove('menu-open');
    navLinks.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, footer');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
  });

  // Add CSS for animation
  const style = document.createElement('style');
  style.textContent = `
    .section-hidden {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .in-view {
      opacity: 1;
      transform: translateY(0);
    }
    
    body.no-scroll {
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
});

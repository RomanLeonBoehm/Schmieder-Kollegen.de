// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-menu');
if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
  });
}

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Add year to footer
const yearEl = document.querySelector('.year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

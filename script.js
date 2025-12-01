// script.js

// ===== Mobile Navigation Toggle =====
const menuBtn = document.querySelector('#menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Image Slider (Showcase Shutters) =====
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.style.display = (i === slideIndex) ? 'block' : 'none';
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
if (slides.length > 0) showSlides();

// ===== Contact Form Validation =====
const form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', function(e) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
  });
}

// ===== Scroll Animation (Fade-in sections) =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
function sendWhatsAppMessage() {
  const name = document.getElementById('name').value.trim();
  const phone_number = document.getElementById('phonenumber').value.trim();
  const requirements = document.getElementById('requirements').value.trim();
  
  const businessPhone = "919894861777"; // YOUR business number
  const now = new Date().toLocaleString();
  
  // Format the message without the email line
  const message = `📩 Supreme Rolling Shutters Quote Request\n\n👤 Name: ${name}\n📞 User Phone: ${phonenumber}\n📝 Details: ${requirements}\n\n🕒 Sent on: ${now}`;
  
  const url = `wa.me{businessPhone}?text=${encodeURIComponent(message)}`;
  
  window.open(url, '_blank');
  
  // Close modal and clear fields
  document.getElementById('quoteModal').style.display = 'none';
  document.getElementById('name').value = '';
  document.getElementById('phonenumber').value = '';
  document.getElementById('requirements').value = '';
}

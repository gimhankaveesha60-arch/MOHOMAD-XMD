const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", nav.classList.contains("open"));
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));

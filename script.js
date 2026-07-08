// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.onclick = function () {
    navLinks.classList.toggle("active");
};

// Carousel logic — works for every card automatically
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const images = track.querySelectorAll('img');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  let index = 0;

  images.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('span');

  function goTo(i) {
    index = (i + images.length) % images.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  carousel.querySelector('.prev').addEventListener('click', () => goTo(index - 1));
  carousel.querySelector('.next').addEventListener('click', () => goTo(index + 1));
});
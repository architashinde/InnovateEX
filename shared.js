// shared.js — InnovateEX

// ── 1. Navbar scroll shadow ──────────────────────────────────────────────────
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── 2. Scroll reveal (IntersectionObserver) ──────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        entry.target.style.transitionDelay = `${i * 60}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

// ── 3. Live clock (shown on index.html hero) ─────────────────────────────────
const clockEl = document.getElementById('liveClock');
if (clockEl) {
  const tick = () => {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('en-IN', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'Asia/Kolkata'
    });
  };
  tick();
  setInterval(tick, 1000);
}
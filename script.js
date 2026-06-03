// Newline Therapy — script.js
// Vanilla, no dependencies. Progressive enhancement only.

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Sticky header state ----------
  const header = document.getElementById('site-header');
  const setHeaderState = () => {
    if (!header) return;
    header.dataset.state = window.scrollY > 80 ? 'solid' : 'transparent';
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  // ---------- Mobile menu ----------
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.dataset.open = String(open);
    if (open) menu.removeAttribute('hidden');
    else setTimeout(() => { if (menu.dataset.open !== 'true') menu.setAttribute('hidden', ''); }, 320);
    document.body.dataset.menuOpen = String(open);
  };
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMenu(!isOpen);
    });
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') setMenu(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // ---------- Hero stagger via custom property ----------
  document.querySelectorAll('.hero .reveal').forEach((el) => {
    const d = parseInt(el.dataset.delay || '0', 10);
    el.style.setProperty('--delay', d.toString());
  });

  // ---------- IntersectionObserver scroll reveals ----------
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const reveals = document.querySelectorAll('.reveal:not(.hero .reveal)');
    const io = new IntersectionObserver((entries) => {
      let staggerIndex = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply small stagger when multiple reveals appear together
          entry.target.style.setProperty('--reveal-delay', `${staggerIndex * 60}ms`);
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
          staggerIndex++;
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });
    reveals.forEach((el) => io.observe(el));
  } else {
    // No IO or reduced motion: show everything
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }
})();

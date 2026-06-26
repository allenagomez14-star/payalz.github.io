/* ============================================================
   She Wanders — script.js
   All interactivity: photo tooltips, destination photo swap,
   smooth nav, and any future JS enhancements.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. COUNTRY TAG PHOTO TOOLTIPS
     ─────────────────────────────────────────────────────────
     Add  data-photo="photos/countries/france.jpg"  to any
     .country-tag element and a hover preview will appear.
     The JS reads that attribute and sets the CSS custom
     property --tag-photo so the ::after pseudo-element
     can render the image without any extra HTML.
  ---------------------------------------------------------- */
  document.querySelectorAll('.country-tag[data-photo]').forEach(tag => {
    const url = tag.getAttribute('data-photo');
    tag.style.setProperty('--tag-photo', `url('${url}')`);
  });


  /* ----------------------------------------------------------
     2. DESTINATION CARD PHOTO SWAP
     ─────────────────────────────────────────────────────────
     Add  data-photo="photos/destinations/paris.jpg"  to any
     .dest-bg element to replace the gradient with a real photo.
     Gradient fallback is kept as background — if the image
     fails to load the gradient still shows underneath.
  ---------------------------------------------------------- */
  document.querySelectorAll('.dest-bg[data-photo]').forEach(bg => {
    const url = bg.getAttribute('data-photo');
    const img = new Image();
    img.onload = () => {
      bg.style.backgroundImage = `url('${url}')`;
      bg.style.backgroundSize = 'cover';
      bg.style.backgroundPosition = 'center';
    };
    img.src = url;
  });


  /* ----------------------------------------------------------
     3. ACTIVE NAV LINK HIGHLIGHT on scroll
     ─────────────────────────────────────────────────────────
     Highlights the correct nav link as you scroll through
     sections.
  ---------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));


  /* ----------------------------------------------------------
     4. NAV LINK ACTIVE STYLE (injected so no extra CSS file
        edit is needed)
  ---------------------------------------------------------- */
  const style = document.createElement('style');
  style.textContent = `.nav-links a.active { color: var(--teal); }`;
  document.head.appendChild(style);

});

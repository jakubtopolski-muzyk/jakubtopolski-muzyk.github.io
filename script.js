const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const siteHeader = document.querySelector('.site-header');

const storedTheme = localStorage.getItem('jakub-theme');
if (storedTheme === 'night') {
  body.classList.add('night');
  themeToggle.setAttribute('aria-pressed', 'true');
  themeIcon.textContent = '◐';
  themeLabel.textContent = 'DAY';
}

themeToggle.addEventListener('click', () => {
  const isNight = body.classList.toggle('night');
  themeToggle.setAttribute('aria-pressed', String(isNight));
  themeIcon.textContent = isNight ? '◐' : '☼';
  themeLabel.textContent = isNight ? 'DAY' : 'NIGHT';
  localStorage.setItem('jakub-theme', isNight ? 'night' : 'day');

    const track = document.querySelector('.marquee-text');
  
  if (track) {
    // Dajemy przeglądarce 150ms na wyrenderowanie tła, filtra ziarna i czcionek
    setTimeout(() => {
      // Uruchamiamy animację dopiero, gdy procesor ukończył najcięższe zadania
      track.style.animationPlayState = 'running';
    }, 150);
  }
});

if (mobileMenuToggle && siteHeader) {
  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('is-menu-open');
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  siteHeader.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      siteHeader.classList.remove('is-menu-open');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mobileMenuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

document.querySelectorAll('.play-button').forEach((button) => {
  button.addEventListener('click', () => {
    const isPlaying = button.classList.toggle('is-playing');
    button.querySelector('span').textContent = isPlaying ? 'Ⅱ' : '▶';
  });
});

document.querySelector('.back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
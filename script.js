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

const tickerTrack = document.querySelector('.ticker-track');

if (tickerTrack) {
  const tickerWords = ['SESSION KEYS', 'LIVE ELECTRONICS', 'SOUND DESIGN', 'ARRANGEMENT'];

  const buildTickerGroup = () => {
    const group = document.createElement('div');
    group.className = 'ticker-group';

    tickerWords.forEach((word, index) => {
      const wordElement = document.createElement('span');
      wordElement.className = 'ticker-word';
      wordElement.textContent = word;
      group.appendChild(wordElement);

      if (index < tickerWords.length - 1) {
        const separator = document.createElement('span');
        separator.className = 'ticker-separator';
        separator.textContent = '✳';
        group.appendChild(separator);
      }
    });

    return group;
  };

  const firstGroup = buildTickerGroup();
  const secondGroup = buildTickerGroup();
  secondGroup.setAttribute('aria-hidden', 'true');

  tickerTrack.innerHTML = '';
  tickerTrack.appendChild(firstGroup);
  tickerTrack.appendChild(secondGroup);
}

document.querySelector('.back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

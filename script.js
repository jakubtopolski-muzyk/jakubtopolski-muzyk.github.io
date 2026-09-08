const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');

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

document.querySelectorAll('.play-button').forEach((button) => {
  button.addEventListener('click', () => {
    const isPlaying = button.classList.toggle('is-playing');
    button.querySelector('span').textContent = isPlaying ? 'Ⅱ' : '▶';
  });
});

document.querySelector('.back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

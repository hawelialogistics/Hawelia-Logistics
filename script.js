const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
    if (menu) menu.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav) {
    nav.classList.remove('open');
    if (menu) menu.setAttribute('aria-expanded', 'false');
  }
});

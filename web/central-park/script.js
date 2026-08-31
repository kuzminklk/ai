const form = document.querySelector('#booking-form');
const feedback = document.querySelector('.form-feedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name').trim();
  feedback.textContent = `${name}, спасибо! Ваша заявка принята.`;
  form.reset();
});

document.querySelector('.menu-toggle').addEventListener('click', (event) => {
  const nav = document.querySelector('.desktop-nav');
  const isOpen = nav.classList.toggle('nav-open');
  nav.style.display = isOpen ? 'flex' : '';
  nav.style.position = isOpen ? 'absolute' : '';
  nav.style.top = isOpen ? '70px' : '';
  nav.style.left = isOpen ? '0' : '';
  nav.style.right = isOpen ? '0' : '';
  nav.style.padding = isOpen ? '26px 24px 30px' : '';
  nav.style.background = isOpen ? 'var(--cream)' : '';
  nav.style.flexDirection = isOpen ? 'column' : '';
  nav.style.gap = isOpen ? '18px' : '';
  event.currentTarget.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.desktop-nav a').forEach((link) => link.addEventListener('click', () => {
  const nav = document.querySelector('.desktop-nav');
  nav.classList.remove('nav-open');
  nav.removeAttribute('style');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
}));

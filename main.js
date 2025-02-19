const app = document.getElementById('app');
const form = document.getElementById('form');
const successPage = document.getElementById('success-page');
const email = document.getElementById('email');
const buttonDismiss = document.getElementById('button-dismiss');
const emailError = document.getElementById('email-error');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  successPage.classList.remove('hidden');
  app.classList.add('hidden');
})

buttonDismiss.addEventListener('click', (event) => {
  event.preventDefault();

  successPage.classList.add('hidden');
  app.classList.remove('hidden');
});

emailError.classList.add('error-message');
emailError.style.display = 'block';

emailInput.classList.add('error-input');
emailInput.style.display = 'block';

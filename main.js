const app = document.getElementById('app');
const form = document.getElementById('form');
const successPage = document.getElementById('success-page');
const email = document.getElementById('email');
const buttonDismiss = document.getElementById('button-dismiss');
const emailError = document.getElementById('email-error');

function handleSubmit(e) {
  e.preventDefault();

  const data = email.value;
  const isValidEmail = /^\S+@\S+$/g;

  if (!isValidEmail.test(data)) {
    emailError.classList.add('error-message');
    emailError.style.display = 'block';
    email.classList.add('error-input');
    email.style.display = 'block';
  } else {
    successPage.classList.remove('hidden');
    app.classList.add('hidden');
  }
}

form.addEventListener('submit', handleSubmit);

buttonDismiss.addEventListener('click', (event) => {
  event.preventDefault();

  successPage.classList.add('hidden');
  app.classList.remove('hidden');
  email.value = '';
  emailError.style.display = 'none';
  emailError.classList.remove('error-message');
  email.classList.remove('error-input');
});

const app = document.getElementById('app');
const form = document.getElementById('form');
const successPage = document.getElementById('success-page');
const email = document.getElementById('email');
const buttonDismiss = document.getElementById('button-dismiss');

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

import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[type="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
inputEl.addEventListener('input', onInputEmail);
textareaEl.addEventListener('input', throttle(onTexAreaInput, 1000));

populateTexttArea();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTexAreaInput(event) {
  const message = event.target.value;
  console.log(message);

  localStorage.setItem(STORAGE_KEY, message);
}

function onInputEmail(event) {
  const message = event.target.value;
  console.log(message);

  localStorage.setItem(STORAGE_KEY, message);
}

function populateTexttArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    textareaEl.value = savedMessage;
  }
}

import throttle from 'lodash.throttle';

// Варіант № 1

// const formEl = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('input[type="email"]');
// const textareaEl = document.querySelector('textarea[name="message"]');

// const STORAGE_KEY = 'feedback-form-state';

// formEl.addEventListener('submit', onFormSubmit);
// inputEl.addEventListener('input', onInput);
// textareaEl.addEventListener('input', throttle(onInput, 1000));

// function onInput(event) {
//   const { name, value } = event.target;
//   updateLocalStorage(STORAGE_KEY, { [name]: value });
// }

// function updateLocalStorage(key, newData) {
//   const data = JSON.parse(localStorage.getItem(key)) || {};
//   localStorage.setItem(key, JSON.stringify({ ...data, ...newData }));
// }

// initForm();

// function initForm() {
//   const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

//   for (const [name, value] of Object.entries(data)) {
//     formEl.elements[name].value = value;
//   }
// }

// function onFormSubmit(event) {
//   event.preventDefault();

//   for (const { name, value } of this.elements) {
//     if (name) {
//       console.log(name, value);
//     }
//   }

//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// Варіант № 2

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[type="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(formDataFromLocalStorage, 500));

populateTexttArea();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function formDataFromLocalStorage(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTexttArea() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (savedData) {
    inputEl.value = parsedData.email;
    textareaEl.value = parsedData.name;
  }
}

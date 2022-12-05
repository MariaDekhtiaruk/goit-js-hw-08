import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener(`submit`, onFormSubmit);
window.addEventListener('load', onPageLoad);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const mail = formElements.email.value;
  const message = formElements.message.value;

  const formData = {
    mail,
    message,
  };
  console.log(formData);
  form.reset();
  localStorage.clear();
}

function onFormInput(evt) {
  let formState = localStorage.getItem('feedback-form-state');
  if (!formState) {
    formState = {
      email: ``,
      message: ``,
    };
  } else {
    formState = JSON.parse(formState);
  }
  formState[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}
function onPageLoad(evt) {
  let formState = localStorage.getItem('feedback-form-state');
  if (formState) {
    formState = JSON.parse(formState);
    form.elements.email.value = formState.email;
    form.elements.message.value = formState.message;
  }
}
// console.log(form.elements.email, form.elements.message);

//const currentTime = localStorage.getItem('videoplayer-current-time');

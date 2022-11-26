const form = document.querySelector(`.feedback-form`);
form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(evt) {
  event.preventDefault();

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

const onFormInput = evt => {
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
};

form.addEventListener('input', onFormInput);
//const currentTime = localStorage.getItem('videoplayer-current-time');

const localStorageKey = 'feedback-form-data';
const formData = {
  email: '',
  message: ''
}

const feedbackForm = document.querySelector('.feedback-form');

 document.querySelector('.feedback-form').addEventListener('load', () => {
  const formDataTmp = JSON.parse(localStorage.getItem(localStorageKey));
  if(formDataTmp){
    formData.email = formDataTmp.email;
    formData.message = formDataTmp.message;
  }

  for(const key in formData) {
    feedbackForm.elements[key] = formData[key];
  }
 });

 feedbackForm.addEventListener('change', (event) => {
  const { target: element } = event;
  formData[element.name] = element.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
 });

 feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if(!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  feedbackForm.reset();
 });
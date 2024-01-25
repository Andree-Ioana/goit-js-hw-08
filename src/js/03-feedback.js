import throttle from 'lodash.throttle';
import _throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const emailForm = feedbackForm.querySelector('input[name = "email"]');
const messageForm = feedbackForm.querySelector('textarea[name = "message"]');

const localStorageKey = 'feedback-form-state';

const load = () => {
    const dataSave = localStorage.getItem(localStorageKey);
    if(dataSave){
        const{email, message} = JSON.parse(dataSave);
        emailForm.value = email; 
        messageForm.value = message;
    }
};

feedbackForm.addEventListener("input", () => {
    saveDataForm();
});

const saveDataForm = throttle(() => {
    let formValue = {
        email: emailForm.value,
        message: messageForm.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formValue));
}, 500);

feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formValue = {
        email: emailForm.value,
        message: messageForm.value,
    };
    console.log("form uploaded:", formValue);
    localStorage.removeItem(localStorageKey);

});

load();

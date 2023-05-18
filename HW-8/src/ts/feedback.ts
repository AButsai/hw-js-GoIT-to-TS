import throttle from 'lodash.throttle';
import { IFeedbackFormObj } from './feedbackType';

const formFeedbackEl: HTMLFormElement | null =
  document.querySelector('.feedback-form');
const emailInputEl: HTMLInputElement | null =
  document.querySelector('[name="email"]');
const messageInputEl: HTMLTextAreaElement | null =
  document.querySelector('[name="message"]');

const KEY_LOCAL_STORAGE = 'feedback-form-state';

const dataInLocalStorage = localStorage.getItem(KEY_LOCAL_STORAGE);

if (dataInLocalStorage) {
  const data = JSON.parse(dataInLocalStorage);
  if (emailInputEl && messageInputEl) {
    emailInputEl.value = data.email;
    messageInputEl.value = data.message;
  }
}

const feedbackFormObj: IFeedbackFormObj = {
  email: 'email',
  message: 'message',
};

formFeedbackEl?.addEventListener(
  'input',
  throttle(() => {
    entryLocalStorage();
  }, 500)
);

function entryLocalStorage() {
  feedbackFormObj.email = emailInputEl?.value ?? '';
  feedbackFormObj.message = messageInputEl?.value ?? '';
  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(feedbackFormObj));
}

formFeedbackEl?.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  if (emailInputEl?.value !== '' && messageInputEl?.value !== '') {
    console.log(feedbackFormObj);

    formFeedbackEl.reset();
    localStorage.removeItem(KEY_LOCAL_STORAGE);
  }
});

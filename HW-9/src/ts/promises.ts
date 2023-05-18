import Notiflix from 'notiflix';
import { IArgsForPromise } from './promisesTypes';

const refsForm: HTMLFormElement | null = document.querySelector('.form');

Notiflix.Notify.init({
  useIcon: false,
});

const handleSubmitForm = (e: Event) => {
  e.preventDefault();

  const targetElement = e.target as HTMLFormElement;
  if (targetElement) {
    const delayInput = targetElement.delay as HTMLInputElement;
    const stepInput = targetElement.step as HTMLInputElement;
    const amountInput = targetElement.amount as HTMLInputElement;

    let delayForPromise = Number(delayInput.value);
    const stepForPromise = Number(stepInput.value);
    const amountForPromise = Number(amountInput.value);

    for (let i = 1; i <= amountForPromise; i += 1) {
      createPromise(i, delayForPromise)
        .then((value: unknown) => {
          const { position, delay } = value as IArgsForPromise;
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch((value: unknown) => {
          const { position, delay } = value as IArgsForPromise;
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });

      delayForPromise += stepForPromise;
    }
  }
};

function createPromise(position: number, delay: number) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}

refsForm?.addEventListener('submit', handleSubmitForm);

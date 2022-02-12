import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

function createPromise(position, delay){
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};

function onSuccess(result) {
  Notiflix.Notify.success(result);
}

function onError(error) {
  Notiflix.Notify.failure(error);
}

formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let delay = parseInt(delayEl.value);
  let step = parseInt(stepEl.value);
  let amount = parseInt(amountEl.value);

  setTimeout(() => {
    for (let i = 1; i <=  amount; i++) {
      createPromise(i, delay)
      .then(onSuccess)
      .catch(onError);

      delay += step;
    }
  }, delay);
});
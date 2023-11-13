import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputDelay = form.elements.delay;
const inpuStep = form.elements.step;
const inpuAmount = form.elements.amount;
const btnPromiss = document.querySelector('button');

btnPromiss.addEventListener('click', submit);

// form.addEventListener('submit', submit);

function submit(evt) {
  evt.preventDefault();
  let delay = Number(inputDelay.value);
  let step = Number(inpuStep.value);
  let amount = Number(inpuAmount.value);
  let position;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

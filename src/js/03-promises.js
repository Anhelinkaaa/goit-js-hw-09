import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let delay = form.elements.delay;
let step = form.elements.step;
let amound = form.elements.amound;
const btnPromiss = document.querySelector('button');

// btnPromiss.addEventListener('click', submit);

form.addEventListener('submit', submit);

function submit(evt) {
  evt.preventDefault();
  const delay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const amound = Number(evt.currentTarget.elements.amound.value)
  for (let i = 1; i <= amound; i += 1) {
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

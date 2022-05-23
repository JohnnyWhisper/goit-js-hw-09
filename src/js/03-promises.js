import Notiflix from 'notiflix';


const formEl = document.querySelector('.form');


formEl.addEventListener('submit', onCreatePromises);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}

function onCreatePromises(event) {
  event.preventDefault();

  let step = Number(event.currentTarget.step.value);
  let delay = Number(event.currentTarget.delay.value);
  let amount = Number(event.currentTarget.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(success => console.log('✅ Fulfilled promise'))
      .catch(error => console.log('❌ Rejected promise'));
    delay += step;
  }
}


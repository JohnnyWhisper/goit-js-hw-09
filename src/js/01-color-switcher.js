
const bodyEl = document.querySelector("body");
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const INTERVAL_TIME = 1000;
let intervalId = null;

buttonStop.disabled = true;

const startChangingColor =()=> {
    intervalId = setInterval( () => {
        bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
        buttonStart.disabled = true;
        buttonStop.disabled = false;
    }, INTERVAL_TIME);
};


const stopChangingColor = () => {
   clearInterval(intervalId);
   buttonStart.disabled = false;
   buttonStop.disabled = true;
}


buttonStart.addEventListener('click', startChangingColor);
buttonStop.addEventListener('click', stopChangingColor);
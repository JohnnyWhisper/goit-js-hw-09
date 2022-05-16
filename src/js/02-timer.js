import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector("#datetime-picker");
const buttonEl = document.querySelector('button[data-start]');
const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

buttonEl.disabled = true;


  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  
  function convertMs(ms) {
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  let intervalId = null;


  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates, dateStr, instance) {
        const calculateTime = selectedDates[0] - instance.now;

        if (calculateTime <= 0) {
        Notiflix.Notify.failure('Please choose a date in the future');
        }

        if (calculateTime > 0) {
            buttonEl.disabled = false;
            const timerOn = () => {
        
              intervalId = setInterval(() => {
                const currentTime = Date.now();
        
                const calculatedTimeInMS = selectedDates[0] - currentTime;
        
                let updatedTime = convertMs(calculatedTimeInMS);
                const { days, hours, minutes, seconds } = updatedTime
        
                timerDays.textContent = days;
                timerHours.textContent = hours;
                timerMinutes.textContent = minutes;
                timerSeconds.textContent = seconds;
        
                if (calculatedTimeInMS < 999) {
                  clearInterval(intervalId);
                }
              }, 1000);
            };
            buttonEl.addEventListener('click', timerOn);
        }
    },
  }

  flatpickr(inputEl, options);



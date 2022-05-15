import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector("#datetime-picker");
console.log(inputEl);

const buttonEl = document.querySelector('button[data-start]');
console.log(buttonEl);

const days = document.querySelector('span[data-days]');
console.log(days);

const hours = document.querySelector('span[data-hours]');
console.log(hours);

const minutes = document.querySelector('span[data-minutes]');
console.log(minutes);

const seconds = document.querySelector('span[data-seconds]');
console.log(seconds);

buttonEl.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

      const currentTime = this.defaultDate.getTime();
      console.log(currentTime);

      if (selectedDates[0] >= this.defaultDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
          buttonEl.disabled = true;
      } 
      buttonEl.disabled = false;
    },
  };

  flatpickr(inputEl, options);



//   buttonEl.addEventListener('click', handleclick);




// days.textContent = date.getDay();
// hours.textContent = date.getHours();
// minutes.textContent = date.getMinutes();
// seconds.textContent = date.getSeconds();




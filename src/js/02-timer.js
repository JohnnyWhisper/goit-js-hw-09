import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

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

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates <= this.defaultDate) {
          alert("Please choose a date in the future");
          buttonEl.disabled = true;
      } 
      buttonEl.disabled = false;
    },
  };

  flatpickr(inputEl, options);






// days.textContent = date.getDay();
// hours.textContent = date.getHours();
// minutes.textContent = date.getMinutes();
// seconds.textContent = date.getSeconds();




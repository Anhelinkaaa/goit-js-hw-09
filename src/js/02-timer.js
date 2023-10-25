import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');

let dayTime = document.querySelector('span[data-days]');
let hourTime = document.querySelector('span[data-hours]');
let minuteTime = document.querySelector('span[data-minutes]');
let secondTime = document.querySelector('span[data-seconds]');

const currentData = new Date();
button.disabled = true;

const fp = flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - currentData.getTime() < 0) {
      Notiflix.Report.warning('Please choose a date in the future');
    } else {
      button.disabled = false;
      button.addEventListener('click', () => {
        const timeId = setInterval(() => {
          const currentTime = new Date();
          const ms = selectedDates[0].getTime() - currentTime.getTime();
          dayTime.textContent = addLeadingZero(convertMs(ms).days);
          hourTime.textContent = addLeadingZero(convertMs(ms).hours);
          minuteTime.textContent = addLeadingZero(convertMs(ms).minutes);
          secondTime.textContent = addLeadingZero(convertMs(ms).seconds);
          if (ms < 1000) {
            clearInterval(timeId);
            // hourTime.textContent = '00';
            // minuteTime.textContent = '00';
          }
        }, 1000);
      });
    }
  },
});

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

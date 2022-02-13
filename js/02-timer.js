import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';


const reft {
input: document.querySelector('#datatime-picker');
start: document.querySelector('button[data-start]');
timer: document.querySelector('timer');
days: document.querySelector('span[data-days]');
hours: document.querySelector('span[data-hours]');
minutes: document.querySelector('span[data-minutes]');
seconds: document.querySelector('span[data-seconds]');
};

let interValId = 0;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const date = new Date();
      timeStope = selectedDates[0].getTime();
      if (selectedDates[0] < date) {
      window.alert('будущая дата')
    }
  },
};
     flatpickr(reft.input, options) 
     reft.start.addEventLister('click', countDown);

     function countDown() {
      let interValId = null;
       reft.start.setAttribute('disabled', 'disabled');
       interValId = setInterval(startTimer, 1000);
       function startTimer() {
         const currentDate = Date.now();
         const deltaTime = timeStope - currentDate
         console.log(deltaTime);
        if (deltaTime < 1000) {
          clearInterval(interValId);
        }
const timeUpDate = convertMs(deltaTime);
updateClock(timeUpDate)
       }
     }

     function updateClock ({days, hours, minutes, seconds}) {
      reft.days.textContent = days;
      reft.hours.textContent = hours;
      reft.minutes.textContent = minutes;
      reft.seconds.textContent = seconds;

     }

     function convertMs(ms) {
       const second = 1000;
       const minute = second * 60;
       const hour = minute * 60;
       const day= hour * 24;
     

     const day = addLeadingZero(Math.floor(ms / day));
     const hour = addLeadingZero(Math.floor((ms % day) / hour));
     const minute = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
     const second = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

     return {days, hours, minutes, seconds}
    }
function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}
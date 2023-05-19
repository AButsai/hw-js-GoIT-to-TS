import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateTimePicker: HTMLButtonElement | null =
  document.querySelector('#datetime-picker');
const btnStart: HTMLButtonElement | null =
  document.querySelector('[data-start]');
const timerDays: Element | null = document.querySelector('[data-days]');
const timerHours: Element | null = document.querySelector('[data-hours]');
const timerMinutes: Element | null = document.querySelector('[data-minutes]');
const timerSeconds: Element | null = document.querySelector('[data-seconds]');

let selectedTime = 0;

Notiflix.Notify.init({
  position: 'center-center',
  useIcon: false,
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates: Date[]) {
    const selectedTimestamps = selectedDates.map(date => date.getTime());
    if (Date.now() > selectedTimestamps[0]) {
      return Notiflix.Notify.warning('Please choose a date in the future');
    }
    selectedTime = selectedTimestamps[0];
    if (btnStart) {
      btnStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

const startTimer = () => {
  if (btnStart && dateTimePicker) {
    btnStart.disabled = true;
    dateTimePicker.disabled = true;
  }

  const timerId = setInterval(() => {
    const date = Date.now();
    const timeToShow = selectedTime - date;
    if (timeToShow <= 0 && btnStart && dateTimePicker) {
      btnStart.disabled = false;
      dateTimePicker.disabled = false;
      clearInterval(timerId);
      return Notiflix.Notify.info('Time is over!');
    }
    const timeForTimer = convertMs(timeToShow);
    timeToDisplay(timeForTimer);
  }, 1000);
};

function addLeadingZero(value: number) {
  return String(value).padStart(2, '0');
}

function convertMs(ms: number) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function timeToDisplay({
  days,
  hours,
  minutes,
  seconds,
}: {
  [key: string]: string;
}) {
  if (timerDays && timerHours && timerMinutes && timerSeconds) {
    timerDays.textContent = days;
    timerHours.textContent = hours;
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = seconds;
  }
}

btnStart?.addEventListener('click', startTimer);

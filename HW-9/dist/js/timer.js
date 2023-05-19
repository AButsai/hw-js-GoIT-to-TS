import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
var dateTimePicker = document.querySelector('#datetime-picker');
var btnStart = document.querySelector('[data-start]');
var timerDays = document.querySelector('[data-days]');
var timerHours = document.querySelector('[data-hours]');
var timerMinutes = document.querySelector('[data-minutes]');
var timerSeconds = document.querySelector('[data-seconds]');
var selectedTime = 0;
Notiflix.Notify.init({
    position: 'center-center',
    useIcon: false,
});
var options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: function (selectedDates) {
        var selectedTimestamps = selectedDates.map(function (date) { return date.getTime(); });
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
var startTimer = function () {
    if (btnStart && dateTimePicker) {
        btnStart.disabled = true;
        dateTimePicker.disabled = true;
    }
    var timerId = setInterval(function () {
        var date = Date.now();
        var timeToShow = selectedTime - date;
        if (timeToShow <= 0 && btnStart && dateTimePicker) {
            btnStart.disabled = false;
            dateTimePicker.disabled = false;
            clearInterval(timerId);
            return Notiflix.Notify.info('Time is over!');
        }
        var timeForTimer = convertMs(timeToShow);
        timeToDisplay(timeForTimer);
    }, 1000);
};
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var days = addLeadingZero(Math.floor(ms / day));
    var hours = addLeadingZero(Math.floor((ms % day) / hour));
    var minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    var seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
}
function timeToDisplay(_a) {
    var days = _a.days, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
    if (timerDays && timerHours && timerMinutes && timerSeconds) {
        timerDays.textContent = days;
        timerHours.textContent = hours;
        timerMinutes.textContent = minutes;
        timerSeconds.textContent = seconds;
    }
}
btnStart === null || btnStart === void 0 ? void 0 : btnStart.addEventListener('click', startTimer);
//# sourceMappingURL=timer.js.map
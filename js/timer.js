/*
 * Реализовать таймер, показывающий сколько времени прошло с дня рождения юзера
 * `${days} days / ${hours} hours / ${mins} minutes / ${secs} seconds`
 * 10562 days / 05 hours / 30 minutes / 10 seconds
 * Часы, минуты и секунды должны быть с нулями
 */

const timerRef = document.querySelector(".timer");
const birthDateRef = document.querySelector(".birthday");

const userBirthDate = "2000-02-28";
birthDateRef.textContent = userBirthDate;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const userDate = new Date(userBirthDate);

const renderTime = () => {
  const currentDate = new Date();

  const diff = currentDate - userDate;

  const { days, hours, minutes, seconds } = convertMs(diff);

  timerRef.textContent = `${days} days / ${hours} hours / ${minutes} minutes / ${seconds} seconds`;
};

renderTime();
setInterval(renderTime, 1000);

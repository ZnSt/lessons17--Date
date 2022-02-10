/*
  1) стандартный код
  2) с алертом в коде
  3) с нулевой задержкой
*/

// const start = Date.now();

// console.log('First', Date.now() - start);

// setTimeout(() => {
//   console.log('Second', Date.now() - start);
// }, 1000);

// // alert('Delay!');

// console.log('Third', Date.now() - start);

///////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/////////////////////////////////////////////////////////////

/*
 * Есть бутсраповский тост - https://getbootstrap.com/docs/5.0/components/toasts/#usage
 * Нужно показать его (bsToast.show()) через 1 секунду после открытия странички и скрыть (bsToast.hide()) через 2 секунды после того, как он появился
 * (привязка контекста при закрытии без анонимки)
 * Это сообщение нужно показать юзеру только один раз
 */

// const toastRef = document.querySelector(".toast");
// const bsToast = new bootstrap.Toast(toastRef, { autohide: false });

// const timeoutId = setTimeout(() => {
//   bsToast.show();

//   setTimeout(() => {
//     bsToast.hide();
//   }, 2000);
// }, 2000);

// setTimeout(() => {
//   clearTimeout(timeoutId);
// }, 1000);

// const showMessage = (string) => console.log(string);

// setTimeout(showMessage, 1000, "Hello");
///////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/////////////////////////////////////////////////////////////

/*
 * Сделать секундомер (stopwatch)
 * По нажатию на кнопку "Start" запускать счетчик, который будет увеличиваться на 1 каждую секунду.
 * Пока таймер запущен на кнопке должен быть текст "Pause", когда не запущен - "Start"
 * По нажатию на кнопку "Pause" останавливать счетчик на текущем значении, по нажатию на кнопку "Start" запускать снова.
 */

// const timerRef = document.querySelector('.timer');
// const btnRef = document.querySelector('[data-action="handle-timer"]');

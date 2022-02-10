// По нажатию на кнопку .js-time показывать, сколько секунд прошло после открытия странички (`You opened this page ${sec} seconds ago`);

// const btnRef = document.querySelector('.js-time');

////////////////////////////////////////////

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
//
//
//
//
//////////////////////////////////////////////

// Выведите в консоль текущие день, месяц и год в формате '2022-02-09'.

// const padNum = num => String(num).padStart(2, 0);

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
//
//
//
//
//
////////////////////////////////////////////////

// Выведите в консоль количество часов, прошедшее между 8 февраля и текущим моментом

// const currData = new Date();
// const pastData = new Date("2022/02/08");

// currDate.sethours =
//   (currData.getHours(), currData.getMinutes(), currData.getSeconds(), currData.getMilliseconds());
// console.log("pastData", pastData);

// const hoursDiff = Math.round((currData - pastData) / 1000 / 60 / 60 / 24);
// console.log("hoursDiff", hoursDiff);
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
//////////////////////////////////////////////////

/*
 * Есть инпут, в который пользователь вводит дату своего рождения в формате '1995-12-31' (с конкретным годом).
 * По нажатию кнопки выведите под инпутом сколько дней осталось до его дня рождения: `${diff} days left`
 * Если Unix время юзера и сегодня совпадают после сброса в обеих датах часов, минут, сек и милисек в 0, (или если дата и месяц совпадают с сегодняшним) - вывести 'Today is your birthday!')
 * * Проверять формат - если неверный, то выводить сообщение 'Wrong format' и очистить resultRef
 */

// const btnRef = document.querySelector('[data-action="count-days"]');
// const resultRef = document.querySelector(".days-left");
// const inputRef = document.querySelector(".date");

// inputRef.value = "2000-02-13";

// const onClick = () => {
//   if (!Date.parse(inputRef.value)) {
//     alert("Wrong format! Try again");
//     return;
//   }
//   const currentDate = new Date();
//     const userDate = new Date(inputRef.value);
//     const currentYear = currentDate.getFullYear();

//     currentDate.setHours(0, 0, 0, 0);
//       userDate.setHours(0, 0, 0, 0);

//     if (userDate.getTime() === currentDate.getTime()) {
//         resultRef.innerHTML = `<b>Happy Birthday</b>`;
//         return;

//   }

//     if (userDate < currentDate) {
//         userDate.setFullYear(currentYear + 1);

//     }

//     const diff = (userDate - currentDate) / 1000 / 60 / 60 / 24;
//     resultRef.textContent = `${diff}`

// };

// btnRef.addEventListener("click", onClick);

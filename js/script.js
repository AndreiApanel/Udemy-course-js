// first: for (let i = 0; i < 3; i++) {
//   .log(`first level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     .log(`second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       .log(`third level: ${k}`);
//     }
//   }
// }
// let i = 2;
// do {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     .log(i);
//   }
// } while (i <= 16);

// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//   arrayOfNumbers.push(i);
//   .log(arrayOfNumbers);
// }
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i]);
// }
// .log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = data.length - 1; i >= 0; i--) {
//   result.push(data[i]);
// }

// let result = '';
// const line = 5;
// for (let i = 0; i <= line; i++) {
//   for (let j = 0; j < line - i; j++) {
//     result += ' ';
//   }
//   for (let k = 0; k < 2 * i + 1; k++) {
//     result += '*';
//   }

//   result += '\n';
// }
// .log(result);

// let result = '';
// const line = 5;
// for (let i = 0; i <= line; i++) {
//   for (let j = 0; j < line - i; j++) {
//     result += ' ';
//   }
//   for (let k = 0; k < i + 1; k++) {
//     result += '*';
//   }
//   for (let l = 0; l < i; l++) {
//     result += '*';
//   }
//   result += '\n';
// }
// .log(result);

// function sayHello(name) {
//   return `Привет, ${name}`;
// }
// .log(sayHello('Saniya'));
// Пример: вызов функции returnNeighboringNumbers(5)

// function returnNeighboringNumbers(n) {
//   let num = [];
//   num[0] = n - 1;
//   num[1] = n;
//   num[2] = n + 1;
//   return num;
// }
// .log(returnNeighboringNumbers(5));

// function getMathResult(num, inc) {
//   let result = '';
//   let a = 0;
//   if (inc <= 0 || typeof inc !== 'number') {
//     return num;
//   }

//   for (let i = 0; i < inc; i++) {
//     a += num;
//     result += a + '---';
//   }
//   return result.substring(0, result.length - 3);
// }

// .log(getMathResult(10, 5));

// function calculateVolumeAndArea(a) {
//   if (typeof a !== 'number' || a <= 0 || Number.isInteger(a) === false) {
//     return 'При вычислении произошла ошибка';
//   }
//   let kvadrat = Math.pow(a, 2);
//   let kub = Math.pow(a, 3);
//   let cubeArea = 6 * kvadrat;
//   return `Объем куба: ${kub}, площадь всей поверхности: ${cubeArea}`;
// }

// .log(calculateVolumeAndArea(15));

// function getCoupeNumber(b) {
//   if (typeof b !== 'number' || b < 0 || Number.isInteger(b) === false) {
//     return 'Ошибка. Проверьте правильность введенного номера места';
//   }
//   if (b == 0 || b > 36) {
//     return 'Таких мест в вагоне не существует';
//   }
//   const numberVagon = [
//     (1, 2, 3, 4),
//     (5, 6, 7, 8),
//     (9, 10, 11, 12),
//     (13, 14, 15, 16),
//     (17, 18, 19, 20),
//     (21, 22, 23, 24),
//     (25, 26, 27, 28),
//     (29, 30, 31, 32),
//     (33, 34, 35, 36),
//   ];
//   .log(numberVagon.indexOf(b));

//   const result = numberVagon.findIndex((el) => el.includes(b));
//   return result;
// }
// .log(getCoupeNumber(2));
// function getCoupeNumber(b) {
//   if (typeof b !== 'number' || b < 0 || Number.isInteger(b) === false) {
//     return 'Ошибка. Проверьте правильность введенного номера места';
//   }
//   if (b == 0 || b > 36) {
//     return 'Таких мест в вагоне не существует';
//   }
//   if (0 < b && b < 5) return 1;
//   else if (5 <= b && b < 9) return 2;
//   else if (9 <= b && b < 13) return 3;
//   else if (13 <= b && b < 17) return 4;
//   else if (17 <= b && b < 21) return 5;
//   else if (21 <= b && b < 25) return 6;
//   else if (25 <= b && b < 29) return 7;
//   else if (29 <= b && b < 33) return 8;
//   else if (33 <= b && b < 37) return 9;
// }
// .log(getCoupeNumber(37));

// function getTimeFromMinutes(min) {
//   if (typeof min !== 'number' || min < 0 || Number.isInteger(min) === false) {
//     return 'Ошибка, проверьте данные';
//   }
//   let c = '';
//   let a = Math.floor(min / 60);
//   let b = min - a * 60;

//   if (a == 2 || a == 3 || a == 4) {
//     c = 'часа';
//   } else if (a == 1) {
//     c = 'час';
//   } else {
//     c = 'часов';
//   }

//   return `Это ${a} ${c} и ${b} минут`;
// }
// .log(getTimeFromMinutes(60));

// function findMaxNumber(a, b, c, d) {
//   let max;
//   if (typeof (a, b, c, d) !== 'number' || (a, b, c, d) == null) return 0;

//   if (a > b && a > c && a > d) return (max = a);
//   else if (b > c && b > d) return (max = b);
//   else if (c > d) return (max = c);
//   else return (max = d);
// }
// .log(findMaxNumber(1, 5, 6.6));

// function fib(f) {
//   let x = 0;
//   let y = 1;
//   let str = '';
//   if (typeof f !== 'number' || Number.isInteger(f) === false) {
//     return '';
//   }
//   if (f == 1) return '0';
//   if (f == 0) return '';
//   for (let i = 0; i < f; i++) {
//     str += x + ' ';
//     x = x + y;
//     y = x - y;
//   }

//   return str.substring(0, str.length - 1);
// }
// .log(fib(7));
// const personalPlanPeter = {
//   name: 'Peter',
//   age: '29',
//   skills: {
//     languages: ['ru', 'ua', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%',
//     },
//     exp: '1 month',
//   },
//   showAgeAndLangs: function (plan) {
//     let { languages } = personalPlanPeter.skills;
//     let { age } = plan;
//     let str = `Мне ${age} и я владею языками: `;
//     for (let key in languages) {
//       str += languages.join(' ', key).toUpperCase();
//       break;
//     }
//     return str;
//   },
// };
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };
// .log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showProgrammingLangs(plan) {
//   let lang = plan.skills.programmingLangs;
//   let results = '';
//   for (let key in lang) {
//     results += `\nЯзык ${[key]} изучен на ${lang[key]}`;
//   }
//   return results;
// }
// .log(showProgrammingLangs(personalPlanPeter));

// const family = [];

// function showFamily(arr) {
//   if (Object.keys(arr).length === 0) {
//     return `Семья пуста`;
//   }
//   let str = '';
//   str = arr.join(' ');

//   return `Семья состоит из: ${str}`;
// }

// .log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach((el) => {
//     .log(el.toLowerCase());
//   });
// }
// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//   let a = [];
//   if (typeof str !== 'string') return 'Ошибка!';
//   for (let i = 0; i < str.length; i++) {
//     a.push(str[i]);
//   }
//   let result = '';
//   return (result = a.reverse().join(''));
// }
// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//   let a = '';
//   if (Object.keys(arr).length === 0) {
//     return (a = 'Нет доступных валют');
//   } else {
//     a = 'Доступные вылюты:\n';
//   }
//   arr.forEach((element) => {
//     if (element !== missingCurr) {
//       a += `${element}\n`;
//     }
//   });

//   return a;
// }
// availableCurr(additionalCurrencies, 'CNY');
// -----------------------------------------------------------------

// function start () {
//   numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
//   }
// }
// start();

// let i = 0;
// while (i < 2) {
//   i++;
//   const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//     yourOpinies = prompt('На сколько оцените его?', '');
//   if (
//     lastFilm != null &&
//     yourOpinies != null &&
//     lastFilm != '' &&
//     yourOpinies != '' &&
//     lastFilm.length < 50
//   ) {
//     personalMovieDB.movies[lastFilm] = yourOpinies;
//     .log('Done');
//   } else {
//     .log('error');
//     i--;
//   }
// }

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//       yourOpinies = prompt('На сколько оцените его?', '');
//     if (
//       lastFilm != null &&
//       yourOpinies != null &&
//       lastFilm != '' &&
//       yourOpinies != '' &&
//       lastFilm.length < 50
//     ) {
//       personalMovieDB.movies[lastFilm] = yourOpinies;
//       .log('Done');
//     } else {
//       .log('error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     .log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     .log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     .log('Вы киноман');
//     50;
//   } else {
//     .log('Произошла ошибка');
//     5;
//   }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     .log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//     personalMovieDB.genres[i - 1] = genre;
//   }
// }
// writeYourGenres();

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
//     while (
//       personalMovieDB.count == '' ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt(
//         'Сколько фильмов вы уже просмотрели?',
//         ''
//       );
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//         yourOpinies = prompt('На сколько оцените его?', '');
//       if (
//         lastFilm != null &&
//         yourOpinies != null &&
//         lastFilm != '' &&
//         yourOpinies != '' &&
//         lastFilm.length < 50
//       ) {
//         personalMovieDB.movies[lastFilm] = yourOpinies;
//         .log('Done');
//       } else {
//         .log('error');
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       .log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       .log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//       .log('Вы киноман');
//       50;
//     } else {
//       .log('Произошла ошибка');
//       5;
//     }
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat === false;
//     } else personalMovieDB.privat === true;
//   },

//   showMyDB: function (hidden) {
//     if (!hidden) {
//       .log(personalMovieDB);
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 1; i <= 2; i++) {
// let genre = prompt(`Ваш любимый жанр под номером ${i}`);
// if (genre == '' || genre == null) {
//   .log('Вы ввели некорректные данные или не ввели их вовсе');
//   i--;
// } else {
//   personalMovieDB.genres[i - 1] = genre;
// }
//       let genres = prompt(
//         `Введите ваши любимые жанры через запятую`
//       ).toLowerCase();
//       if (genre == '' || genre == null) {
//         .log('Вы ввели некорректные данные или не ввели их вовсе');
//         i--;
//       } else {
//         personalMovieDB.genres = genres.split(',');
//         personalMovieDB.genres.sort();
//       }
//     }

//     personalMovieDB.genres.forEach((el, i) => {
//       .log(`Любимый жанр # ${i + 1} - это ${el}`);
//     });
//   },
// };
// ------------------------------------------------------------------------

// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//   let placeholder = 0;
//   let volume = 0;
//   data.shops.forEach((el) => {
//     placeholder += el.width * el.length;
//   });
//   volume = placeholder * data.height;
//   if (data.budget - volume * data.moneyPer1m3 >= 0) {
//     return 'Бюджета достаточно';
//   } else {
//     return 'Бюджета недостаточно';
//   }
// }

// .log(isBudgetEnough(shoppingMallData));
// ------------------------------------------------------------------------
// const students = [
//   'Peter',
//   'Andrew',
//   'Ann',
//   'Mark',
//   'Josh',
//   'Sandra',
//   'Cris',
//   'Bernard',
//   'Sam',
//   'John',
//   'Samb',
// ];

// function sortStudentsByGroups(arr) {
//   let result = [];
//   let size = 3;
//   let str = 'Оствашиеся студенты: ';
//   arr.sort();
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   if (result.length > 3) {
//     result[3] = str + result[3].join(', ');
//   } else {
//     result[3] = str + '-';
//   }
//   return result;
// }
// .log(sortStudentsByGroups(students));

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// sortStudentsByGroups(students);
// ----------------------------------------------------------------------------------

//
// Нам просто нужно менять весь массив данных,
// а не лезть напрямую менять каждого из сотрудников
// Так как это верхний уровень объекта, то значение
// будет меняться только у копии
//   copy.waitors = [{ name: 'Mike', age: 32 }];
//   return copy;
// }
// transferWaitors(restorantData);
// =========================================================================================
// const box = document.getElementById('box');
// btns = document.getElementsByTagName('button');
// circles = document.getElementsByClassName('circle');
// wrapper = document.querySelector('.wrapper');
// hearts = wrapper.querySelectorAll('.heart');
// oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'Blue';
// box.style.width = '500px';
// box.style.cssText = 'background-color: blue;width: 500px';
// btns[2].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'green';
// }
// hearts.forEach((element) => {
//   element.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');
// div.classList.add('black');
// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = '<h1>Hello world</h1>';
// div.textContent = 'Hello';

// div.insertAdjacentHTML('beforeend', '<h2>HELLO</h2');
// ------------------------recursion-------------------------------------------------
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(2, 2));
// console.log(pow(3, 2));
// console.log(pow(4, 2));
// console.log(pow(5, 2));

// let students = {
//   js: [
//     {
//       name: 'John',
//       progress: 100,
//     },
//     {
//       name: 'Ivan',
//       progress: 60,
//     },
//   ],

//   html: {
//     basic: [
//       {
//         name: 'Peter',
//         progress: 20,
//       },
//       {
//         name: 'Ann',
//         progress: 18,
//       },
//     ],
//     pro: [
//       {
//         name: 'Sam',
//         progress: 10,
//       },
//     ],
//   },
// };
// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;
//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length;
//         for (let i = 0; i < students.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }
//   return total / students;
// }
// console.log(getTotalProgressByIteration(students));
// ----------------------TASK----------
// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   }
//   if (Number.isInteger(n) === false || typeof n !== 'number') {
//     return 'Вы ввели не правильное число';
//   }
//   if (n === 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));

// function amountOfPages(summary) {
//   let n = '';
//   let result = '';
//   for (let i = 1; i <= summary; i++) {
//     if (n.length < summary) {
//       n += i;
//       result = i;
//       continue;
//     }
//   }
//   return result;
// }
// console.log(amountOfPages(25));

// Задание:

// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу по возможности без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

// Пример:

// isPangram(«The quick brown fox jumps over the lazy dog») => true

// isPangram(«Hello world») => false
// function isPangram(string) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let regex = /\s/g;
//   let result = string.toLowerCase().replace(regex, '');
//   for (let i = 0; i < alphabet.length; i++) {
//     if (result.indexOf(alphabet[i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// Задание:

// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

// deepCount([1, 5, 3]) => 3

// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// deepCount([1, 2, [3, 4, [5]]]) => 7

// deepCount([]) => 0

// deepCount([[[[[[[[[]]]]]]]]]) => 8

// function deepCount(a) {
//   if (a.length === 0) return 0;
//   let result = a.length;
//   for (let key of a) {
//     if (Array.isArray(key)) {
//       result += deepCount(key);
//     }
//   }
//   return result;
// }

// console.log(deepCount([1, 2, [3, 4, [5]]]));
const btns = document.querySelectorAll('button');
btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
});

// let numberOfFilms;
// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
//   }
// }
// start();
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
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
//     console.log('Done');
//   } else {
//     console.log('error');
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
//       console.log('Done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
//     50;
//   } else {
//     console.log('Произошла ошибка');
//     5;
//   }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
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

// first: for (let i = 0; i < 3; i++) {
//   console.log(`first level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`third level: ${k}`);
//     }
//   }
// }
// let i = 2;
// do {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// } while (i <= 16);

// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//   arrayOfNumbers.push(i);
//   console.log(arrayOfNumbers);
// }
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i]);
// }
// console.log(result);

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
// console.log(result);

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
// console.log(result);

// function sayHello(name) {
//   return `Привет, ${name}`;
// }
// console.log(sayHello('Saniya'));
// Пример: вызов функции returnNeighboringNumbers(5)

// function returnNeighboringNumbers(n) {
//   let num = [];
//   num[0] = n - 1;
//   num[1] = n;
//   num[2] = n + 1;
//   return num;
// }
// console.log(returnNeighboringNumbers(5));

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

// console.log(getMathResult(10, 5));

// function calculateVolumeAndArea(a) {
//   if (typeof a !== 'number' || a <= 0 || Number.isInteger(a) === false) {
//     return 'При вычислении произошла ошибка';
//   }
//   let kvadrat = Math.pow(a, 2);
//   let kub = Math.pow(a, 3);
//   let cubeArea = 6 * kvadrat;
//   return `Объем куба: ${kub}, площадь всей поверхности: ${cubeArea}`;
// }

// console.log(calculateVolumeAndArea(15));

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
//   console.log(numberVagon.indexOf(b));

//   const result = numberVagon.findIndex((el) => el.includes(b));
//   return result;
// }
// console.log(getCoupeNumber(2));
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
// console.log(getCoupeNumber(37));

function getTimeFromMinutes(min) {
  if (typeof min !== 'number' || min < 0 || Number.isInteger(min) === false) {
    return 'Ошибка, проверьте данные';
  }
  let c = '';
  let a = Math.floor(min / 60);
  let b = min - a * 60;

  if (a == 2 || a == 3 || a == 4) {
    c = 'часа';
  } else if (a == 1) {
    c = 'час';
  } else {
    c = 'часов';
  }

  return `Это ${a} ${c} и ${b} минут`;
}
console.log(getTimeFromMinutes(60));

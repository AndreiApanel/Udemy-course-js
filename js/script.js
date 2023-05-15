let numberOfFilms;
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
let i = 0;
while (i < 2) {
  i++;
  const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    yourOpinies = prompt('На сколько оцените его?', '');
  if (
    lastFilm != null &&
    yourOpinies != null &&
    lastFilm != '' &&
    yourOpinies != '' &&
    lastFilm.length < 50
  ) {
    personalMovieDB.movies[lastFilm] = yourOpinies;
    console.log('Done');
  } else {
    console.log('error');
    i--;
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
      yourOpinies = prompt('На сколько оцените его?', '');
    if (
      lastFilm != null &&
      yourOpinies != null &&
      lastFilm != '' &&
      yourOpinies != '' &&
      lastFilm.length < 50
    ) {
      personalMovieDB.movies[lastFilm] = yourOpinies;
      console.log('Done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
    50;
  } else {
    console.log('Произошла ошибка');
    5;
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();

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

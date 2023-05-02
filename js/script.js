const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const yourOpinies = prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilm] = yourOpinies;

console.log(personalMovieDB);
let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
first: for (let i = 0; i < 3; i++) {
  console.log(`first level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`third level: ${k}`);
    }
  }
}
let i = 2;
do {
  i++;
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
} while (i <= 16);

const arrayOfNumbers = [];
for (let i = 5; i <= 10; i++) {
  arrayOfNumbers.push(i);
  console.log(arrayOfNumbers);
}
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i]);
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for (let i = data.length - 1; i >= 0; i--) {
  result.push(data[i]);
}
console.log(result);

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
const yourOpinies = prompt("На сколько оцените его?", "");
personalMovieDB.movies[lastFilm] = yourOpinies;

console.log(personalMovieDB);
let result = "";
const length = 7;
for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

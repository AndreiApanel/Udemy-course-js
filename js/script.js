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

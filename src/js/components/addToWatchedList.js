import { STORAGE_KEY_WATCHED } from '../globals';
import { onClickBtnWatched } from './libraryBtn';
import { refs } from './refs';

let btn;

export function addToWatchedBtnClickListener(movie) {
  btn = document.querySelector('.add-to-watched');
  if (checkMovieIsInList(movie.id)) {
    btn.textContent = 'remove from Watched';
  }
  btn.addEventListener('click', () => {
    onAddToWatchedBtnClick(movie);
  });
}

function onAddToWatchedBtnClick(movie) {
  if (btn.textContent === 'remove from Watched') {
    removeInLocalStorage(movie);
    btn.textContent = 'add to Watched';
  } else {
    setInLocalStorage(movie);
    btn.textContent = 'remove from Watched';
  }
}

function checkMovieIsInList(movieId) {
  const savedMovies = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
  if (!savedMovies) {
    return false;
  }
  const movieIsInList = savedMovies.some(({ id }) => id === movieId);
  return movieIsInList;
}

function setInLocalStorage(movie) {
  const savedMovies = localStorage.getItem(STORAGE_KEY_WATCHED);
  if (!movie) return;
  if (!savedMovies) {
    const data = [movie];
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(data));
  } else {
    const parsedMovies = JSON.parse(savedMovies);
    parsedMovies.push(movie);
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(parsedMovies));
  }
  if (refs.watchedBtn) {
    onClickBtnWatched();
  }
}

function removeInLocalStorage(movie) {
  const savedMovies = localStorage.getItem(STORAGE_KEY_WATCHED);
  const parsedMovies = JSON.parse(savedMovies);
  const MOVIE_ID = movie.id;
  const index = parsedMovies.findIndex(movie => movie.id === MOVIE_ID);
  if (index !== -1) {
    const newMovies = parsedMovies.splice(index, 1);
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(parsedMovies));
  }
  if (refs.watchedBtn) {
    onClickBtnWatched();
  }
  return;
}

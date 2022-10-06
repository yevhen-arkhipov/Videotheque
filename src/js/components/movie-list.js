import { getGenres } from '../http/getGenres';
import { getMostPopularMovies } from '../http/getMostPopularMovies';
import { renderCard } from '../templates/movie-card';
import { pagination } from './pagination';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from './refs';

const moviesWrapper = document.querySelector('.movie-list');
let isFirstLoad = true;

export const renderMovies = movies => {
  getGenres().then(({ genres }) => {
    const moviesHtml = movies
      .map(movie => {
        return renderCard(movie, genres);
      })
      .join('');

    refs.movieList.innerHTML = moviesHtml;
  });
};

export const renderMostPopularMovies = (page = 1) => {
  getMostPopularMovies(page).then(({ results, total_results }) => {
    Loading.dots({
      svgSize: '150px',
      svgColor: '#ff6b08',
    });
    renderMovies(results, total_results);
    Loading.remove();

    if (isFirstLoad) {
      pagination.reset(total_results);
      isFirstLoad = false;
    }
  });
};

if (moviesWrapper) {
  renderMostPopularMovies();
}

export { moviesWrapper };

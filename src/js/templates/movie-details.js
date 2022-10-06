import { IMAGE_URL } from '../globals';

export const renderMovieDetails = ({
  poster_path,
  title,
  vote_average,
  original_title,
  genres,
  vote_count,
  popularity,
  overview,
}) => {
  const gnrs = genres.map((genre) => genre.name).join(', ');

  return `
    <div class="movie-modal__poster">
      <img class="movie-modal__img" width="375" height="478" src="${IMAGE_URL}${poster_path}" alt="${title}" />
    </div>
    <div class="movie-modal__info">
      <h2 class="movie-modal__title">${title}</h2>
      <table class="movie-modal__info-table">
        <tr>
          <td>Vote / Votes</td>
          <td><span class="movie-modal__rating">${vote_average}</span> / ${vote_count}</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td>${popularity}</td>
        </tr>
        <tr>
          <td>Original Title</td>
          <td>${original_title}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>${gnrs}</td>
        </tr>
      </table>
      <div class="movie-modal__descr">
        <h3 class="movie-modal__descr-title">About</h3>
        <p>
          ${overview}
        </p>
      </div>
      <div class="movie-modal__buttons">
        <button type="button" class="movie-modal__btn btn btn--dark add-to-watched">
          add to Watched
        </button>
        <button type="button" class="movie-modal__btn btn btn--dark add-to-queue">
          add to queue
        </button>
      </div>
    </div>
  `
}
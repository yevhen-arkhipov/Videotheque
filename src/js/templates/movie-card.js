import { IMAGE_URL } from '../globals';
import film_poster from '../../images/film_poster.png'

export const renderCard = (movie, genres) => {
  const currentGenres = movie.genre_ids.map(id => {
    return genres.find(genre => genre.id === id).name;
  });

  return `
    <li class="movie-card">
      <article class="movie-card__article movie-item-js" data-id="${movie.id}">
        <img width="440" height="660" class="movie-card__img" src="${IMAGE_URL}${movie.poster_path}" 
        onerror="this.src='${film_poster}'">
        <div class="movie-card__header">
          <h2 class="movie-card__title">${movie.title}</h2>
          <div class="movie-card__info">
            ${currentGenres.join(', ')} ${
    movie.release_date ? `| ${movie.release_date.substring(0, 4)}` : ''
  }
          </div>
        </div>
      </article>
    </li>
  `;
};

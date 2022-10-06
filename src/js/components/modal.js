import { getMovieDetails } from '../http/getMovieDetails';
import { renderMovieDetails } from '../templates/movie-details';
import { addToQueueBtnClickListener } from './addToQueue';
import { addToWatchedBtnClickListener } from './addToWatchedList';
import { refs } from './refs';

if (refs.movieList) {
  refs.movieList.addEventListener('click', event => {
    const movieItem = event.target.closest('.movie-item-js');

    if (!movieItem) {
      return;
    }

    getMovieDetails(movieItem.dataset.id).then(movie => {
      const movieDetailsHtml = renderMovieDetails(movie);

      refs.movieModalWrapper.innerHTML = movieDetailsHtml;
      refs.modal.classList.remove('visually-hidden');
      addToWatchedBtnClickListener(movie);
      addToQueueBtnClickListener(movie);
    });
  });
}

refs.movieModalClose.addEventListener('click', () => {
  refs.modal.classList.add('visually-hidden');
});

refs.modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    refs.modal.classList.add('visually-hidden');
  }
});


document.addEventListener('keyup', event => {
  if (event.keyCode === 27 && !refs.modal.classList.contains('visually-hidden'))
  {
    refs.modal.classList.add('visually-hidden')
  }
});

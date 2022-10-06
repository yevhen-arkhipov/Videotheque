import { refs } from './refs';
import { fetchFilm } from '../fetchFilm';
import { renderMovies } from './movie-list';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { pagination } from './pagination';
import { showNoMoviesBlock } from './libraryBtn';
import { hideNoMoviesBlock } from './libraryBtn';

const searchFormInput = document.querySelector('.header__form-input');
const searchBtn = document.querySelector('.header__search-btn');
const moviesWrapper = document.querySelector('.movie-list');
const errorMessage = document.querySelector('.error__message');

let isNewSearch = true;

if (searchBtn) {
  searchBtn.addEventListener('click', onSearchBtnClick);
}

let lastInputValue;

export async function fetchSearchResults(inputValue, page) {
  try {
    const { results, total_results } = await fetchFilm(
      inputValue || lastInputValue,
      page
    );

    if (results.length === 0) {
      errorMessage.style.display = 'block';
      showNoMoviesBlock();
      refs.tuiPage.classList.add('visually-hidden');
    } else {
      errorMessage.style.display = 'none';
      hideNoMoviesBlock();
      renderMovies(results);
      refs.tuiPage.classList.remove('visually-hidden');

      if (isNewSearch) {
        isNewSearch = false;
        pagination._paginate(1);
        pagination.reset(total_results);
      }
    }
    Loading.dots({
      svgSize: '150px',
      svgColor: '#ff6b08',
    });
    Loading.remove();
  } catch (error) {
    errorMessage.style.display = 'block';
    refs.tuiPage.classList.add('visually-hidden');
  } finally {
    // decided to avoid input reset. For example, google search doesn't.
    // searchFormInput.value = '';
  }
}

async function onSearchBtnClick(e) {
  document.body.dataset.paginationMode = 'search';
  e.preventDefault();
  cleanGallery();
  isNewSearch = true;
  const inputValue = searchFormInput.value.trim();

  if (inputValue === '') {
    errorMessage.style.display = 'block';
    showNoMoviesBlock();
    refs.tuiPage.classList.add('visually-hidden');
    return;
  }
  lastInputValue = inputValue;
  fetchSearchResults(inputValue);
}

function cleanGallery() {
  moviesWrapper.innerHTML = '';
}

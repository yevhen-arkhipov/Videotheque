import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { renderMostPopularMovies, renderMovies } from './movie-list';
import { fetchSearchResults } from './searchMovie';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import jump from 'jump.js';

export const createPagination = (page, totalItems, itemsPerPage = 20) => {
  const options = {
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    page,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', ({ page }) => {
    switch (document.body.dataset.paginationMode) {
      case 'search':
        jump('header');
        Loading.dots({
          svgSize: '150px',
          svgColor: '#ff6b08',
        });
        fetchSearchResults(null, page);
        Loading.remove();
        break;
      default:
        jump('header');
        Loading.dots({
          svgSize: '150px',
          svgColor: '#ff6b08',
        });
        renderMostPopularMovies(page);
        Loading.remove();
    }
  });
  return pagination;
};

const pagination = createPagination(1, 0);

export { pagination };

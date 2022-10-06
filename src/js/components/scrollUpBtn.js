import { refs } from './refs';

export function showScrollBtn() {
  if (window.scrollY > 200) {
    refs.scrollBtn.style.display = 'flex';
    refs.scrollBtn.addEventListener('click', scrollUpToTop);
  } else {
    refs.scrollBtn.style.display = 'none';
  }
}

function scrollUpToTop() {
  refs.header.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export { scrollUpToTop };

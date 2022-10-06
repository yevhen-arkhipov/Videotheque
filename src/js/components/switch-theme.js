import { refs } from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.toggle.addEventListener('change', onChecked);

changePagesTheme();

function changePagesTheme() {
  const pageName = document.location.pathname;
  if (
    pageName.includes('') ||
    pageName.includes('index') ||
    pageName.includes('library.html')
  ) {
    checkLocalStorage();
  }
}

function checkLocalStorage() {
  if (localStorage.getItem('checked') === 'true') {
    refs.toggle.checked = true;
    document.body.classList.add('dark-theme');
    refs.footer.classList.add('dark-theme');
    refs.movieModal.classList.add('dark-theme');
    refs.teamModal.classList.add('dark-theme');
    refs.tuiPage.classList.add('dark-theme');
  } else {
    refs.toggle.checked = false;
    document.body.classList.add('light-theme');
    refs.footer.classList.add('light-theme');
    refs.movieModal.classList.add('light-theme');
    refs.teamModal.classList.add('light-theme');
    refs.tuiPage.classList.add('light-theme');
  }
}

function onChecked(event) {
  if (refs.toggle.checked) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    refs.footer.classList.remove('light-theme');
    refs.footer.classList.add('dark-theme');
    refs.movieModal.classList.remove('light-theme');
    refs.movieModal.classList.add('dark-theme');
    refs.teamModal.classList.remove('light-theme');
    refs.teamModal.classList.add('dark-theme');
    refs.tuiPage.classList.remove('light-theme');
    refs.tuiPage.classList.add('dark-theme');

    localStorage.setItem('Theme', 'DARK');
    localStorage.setItem('checked', 'true');
    refs.toggle.checked = true;
    return;
  }

  refs.body.classList.remove('dark-theme');
  refs.body.classList.add('light-theme');
  refs.footer.classList.remove('dark-theme');
  refs.footer.classList.add('light-theme');
  refs.movieModal.classList.remove('dark-theme');
  refs.movieModal.classList.add('light-theme');
  refs.teamModal.classList.remove('light-theme');
  refs.teamModal.classList.add('dark-theme');
  refs.tuiPage.classList.remove('dark-theme');
  refs.tuiPage.classList.add('light-theme');

  localStorage.setItem('Theme', 'LIGHT');
  localStorage.setItem('checked', 'false');
  refs.toggle.checked = false;
  return;
}

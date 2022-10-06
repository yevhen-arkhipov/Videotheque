import { get } from './http';
let genres = null;

export const getGenres = () => {
  if (!genres) {
    return get('/genre/movie/list').then(data => {
      genres = data;
      return data;
    });
  }

  return Promise.resolve(genres);
};

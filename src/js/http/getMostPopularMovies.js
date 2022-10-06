import { get } from './http';

export const getMostPopularMovies = (page = 1) => {
  return get('/trending/movie/day', { page });
};

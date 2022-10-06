import { get } from './http';

export const getMovieDetails = (id) => {
  return get(`/movie/${id}`);
};

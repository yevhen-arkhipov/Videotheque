const KEY = 'ae750ece0804f05464dc1609a148e97e';
const url = new URL('https://api.themoviedb.org/3/search/movie');
url.searchParams.append('api_key', KEY);
url.searchParams.append('language', 'en-US');
url.searchParams.append('include_adult', 'false');

import axios from 'axios';

export async function fetchFilm(searchQuery, page = 1) {
  const fetchFilmUrl = new URL(url);
  fetchFilmUrl.searchParams.append('query', searchQuery);
  fetchFilmUrl.searchParams.append('page', page);

  try {
    const response = await axios.get(fetchFilmUrl.toString());
    return response.data;
  } catch (error) {
    throw error;
  }
}

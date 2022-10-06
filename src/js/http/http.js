const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ae750ece0804f05464dc1609a148e97e';

export const get = (url, query) => {
  const q = new URLSearchParams({
    ...query,
    api_key: API_KEY,
  });

  return fetch(`${API_URL}${url}?${q}`)
    .then(resp => {
      return resp.json();
    })
    .catch(err => {
      console.log(`Err: ${err}`);
    });
};

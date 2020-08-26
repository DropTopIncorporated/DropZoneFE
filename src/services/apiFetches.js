const localUrl = 'http://localhost:7890/api/v1';
const url = 'https://dropzown-staging.herokuapp.com/api/v1';

export const fetchGamesWithDrops = (search = '') => {
  return fetch(`${url}/games?search=${search}`)
    .then(res => res.json());
};

export const fetchStreamers = (title, search = '') => {
  return fetch(`${url}/streams/${title}?search=${search}`)
    // .then(console.log)
    .then(res => res.json());
};

export const fetchAllStreamers = () => {
  return fetch(`${url}/streams`)
    .then(res => res.json());
};

// export const fetchSearch = (search) => {
//   return fetch(`${localUrl}/games?search=${search}`)
//     // .then(console.log)
//     .then(res => res.json());
// };

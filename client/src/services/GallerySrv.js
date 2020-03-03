import axios from 'axios';

URL = '/api/v1';

export async function fetchGallery() {
  const { data } = await axios.get(`${URL}/gallery`);
  return data;
}

const gallery = [
  {
    photoID: Math.random()
      .toString(36)
      .substr(2, 9),
    url:
      'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    photoID: Math.random()
      .toString(36)
      .substr(2, 9),
    url:
      'https://images.unsplash.com/photo-1489252614717-e24ec918e368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
  },
  {
    photoID: Math.random()
      .toString(36)
      .substr(2, 9),
    url:
      'https://images.unsplash.com/photo-1483221097671-a95cca65490b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=703&q=80',
  },
  {
    photoID: Math.random()
      .toString(36)
      .substr(2, 9),
    url:
      'https://images.unsplash.com/photo-1464897202529-674b62373651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
  },
];

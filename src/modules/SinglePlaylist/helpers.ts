import axios from 'axios';

let token = localStorage.getItem('access_token');

export const getTracks = async (id: string) => {
  const result = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  console.log(result.data);
  return result.data;
};

import axios from 'axios';

let token = localStorage.getItem('access_token');

export const getPlaylist = async (id: string) => {
  const result = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  console.log(result.data);
  return result.data;
};

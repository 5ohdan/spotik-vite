import axios from 'axios';

let token = localStorage.getItem('access_token');

export const getPlayerState = async () => {
  const result = await axios.get(
    'https://api.spotify.com/v1/me/player/devices',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(result);
  return result;
};

export const play = async () => {
  const result = await axios.put(
    'https://api.spotify.com/v1/me/player/play',
    {
      context_uri: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(result);
  return result;
};

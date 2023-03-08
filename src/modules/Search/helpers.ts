import axios from 'axios';

const token = localStorage.getItem('access_token');

export const getSearchResults = async (input: string) => {
  const result = await axios.get(
    `https://api.spotify.com/v1/search?q=${input}&type=album,track,artist`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return result;
};

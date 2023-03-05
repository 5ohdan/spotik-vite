import { SimplifiedPlaylist } from 'spotify-types';
import axios from 'axios';

export const getSimplifiedPlaylists = async () => {
  const result = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  return result.data.items as SimplifiedPlaylist[];
};

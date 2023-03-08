import axios from 'axios';

import { Playlist, SimplifiedPlaylist } from 'spotify-types';

let token = localStorage.getItem('access_token');

export const getSimplifiedPlaylists = async () => {
  const token = localStorage.getItem('access_token');

  const result = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return result.data.items as SimplifiedPlaylist[];
};

export const getPlaylist = async (id: string) => {
  const result = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return result.data as Playlist;
};

import axios from 'axios';
import { useEffect, useState } from 'react';

import { PlaylistsItem } from './PlaylistsItem';

import { SimplifiedPlaylist } from 'spotify-types';
import { Modal } from '../ui/Modal';
import { useStore } from '../store';

export const Playlists = () => {
  const { selectedPlaylist, setSelectedPlaylist } = useStore();

  const [playlists, setPlaylists] = useState<SimplifiedPlaylist[]>();

  const getPlaylists = async () => {
    const result = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    setPlaylists(result.data.items);
  };

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div>
      {typeof selectedPlaylist === 'string' && (
        <Modal playlistId={selectedPlaylist} />
      )}
      <ul className="flex flex-row gap-5 flex-wrap pt-4">
        {playlists &&
          playlists.map((playlist) => {
            return (
              <PlaylistsItem
                playlistItem={playlist}
                key={playlist.id}
                setPlaylist={() => setSelectedPlaylist(playlist.id)}
              />
            );
          })}
      </ul>
    </div>
  );
};

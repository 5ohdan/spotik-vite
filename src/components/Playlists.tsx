import axios from 'axios';
import autoAnimate from '@formkit/auto-animate';

import { useEffect, useState, useRef } from 'react';

import { PlaylistsItem } from './PlaylistsItem';

import { SimplifiedPlaylist } from 'spotify-types';
import { Modal } from '../ui/Modal';
import { useStore } from '../store';

export const Playlists = () => {
  const { selectedPlaylist, setSelectedPlaylist } = useStore();

  const [playlists, setPlaylists] = useState<SimplifiedPlaylist[]>();
  const parent = useRef(null);

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

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="my-4" ref={parent}>
      {typeof selectedPlaylist === 'string' && <Modal />}
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
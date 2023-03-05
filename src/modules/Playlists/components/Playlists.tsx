import autoAnimate from '@formkit/auto-animate';
import { SimplifiedPlaylist } from 'spotify-types';
import { useEffect, useState, useRef } from 'react';

import { PLaylistItemsList } from './PlaylistItemsList';
import { useStore } from '../../../store';
import { getSimplifiedPlaylists } from '../helpers';

import { PlaylistsItem } from './PlaylistsItem';

export const Playlists = () => {
  const { selectedPlaylist, setSelectedPlaylist } = useStore();

  const [playlists, setPlaylists] = useState<SimplifiedPlaylist[]>();

  const parent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getSimplifiedPlaylists().then((result) => setPlaylists(result));
  }, []);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent}>
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
      {typeof selectedPlaylist === 'string' && <PLaylistItemsList />}
    </div>
  );
};

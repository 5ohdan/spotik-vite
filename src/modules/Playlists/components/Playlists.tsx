import autoAnimate from '@formkit/auto-animate';
import { SimplifiedPlaylist } from 'spotify-types';
import { useEffect, useState, useRef } from 'react';

import { PlaylistItemsList } from './PlaylistItemsList';
import { useStore } from '../../../store';
import { getSimplifiedPlaylists } from '../helpers';

import { PlaylistsItem } from './PlaylistsItem';

export const Playlists = () => {
  const shownPlaylistId = useStore((state) => state.shownPlaylistId);
  const setShownPlaylistId = useStore((state) => state.setShownPlaylistId);

  const [playlists, setPlaylists] = useState<SimplifiedPlaylist[]>();

  const parent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getSimplifiedPlaylists().then((result) => setPlaylists(result));
  }, []);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="p-6" ref={parent}>
      <ul className="flex flex-row gap-5 flex-wrap">
        {playlists &&
          playlists.map((playlist) => {
            return (
              <PlaylistsItem
                playlistItem={playlist}
                key={playlist.id}
                setPlaylist={() => setShownPlaylistId(playlist.id)}
              />
            );
          })}
      </ul>
      {shownPlaylistId && <PlaylistItemsList />}
    </div>
  );
};

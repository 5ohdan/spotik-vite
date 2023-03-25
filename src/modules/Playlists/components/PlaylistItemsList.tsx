import { useEffect, useState } from 'react';
import { Playlist } from 'spotify-types';
import { useStore } from '../../../store';
import { getPlaylist } from '../helpers';
import { X } from 'lucide-react';

export const PlaylistItemsList = () => {
  const shownPlaylistId = useStore((state) => state.shownPlaylistId);
  const setShownPlaylistId = useStore((state) => state.setShownPlaylistId);
  const [playlist, setPlaylist] = useState<Playlist>();

  useEffect(() => {
    shownPlaylistId &&
      getPlaylist(shownPlaylistId).then((result) => setPlaylist(result));
  }, [shownPlaylistId]);

  useEffect(() => {
    shownPlaylistId && getPlaylist(shownPlaylistId);
  }, [shownPlaylistId]);

  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 my-4">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{playlist?.name}</span>
        <button
          className="bg-green-500 p-2 rounded-md"
          onClick={() => setShownPlaylistId(null)}
        >
          <X />
        </button>
      </div>
      <ul>
        {/*@ts-ignore*/}
        {playlist?.tracks?.items?.map((track) => (
          <li className="bg-gray-700 rounded-md p-2 my-2" key={track.track.id}>
            {track.track.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { Playlist } from 'spotify-types';
import { useStore } from '../../../store';
import { getPlaylist } from '../helpers';
import { X } from 'lucide-react';

export const PLaylistItemsList = () => {
  const { selectedPlaylist, setSelectedPlaylist } = useStore();
  const [playlist, setPlaylist] = useState<Playlist>();

  useEffect(() => {
    selectedPlaylist &&
      getPlaylist(selectedPlaylist).then((result) => setPlaylist(result));
  }, [selectedPlaylist]);

  useEffect(() => {
    selectedPlaylist && getPlaylist(selectedPlaylist);
  }, [selectedPlaylist]);

  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 my-4">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{playlist?.name}</span>
        <button
          className="bg-green-500 p-2 rounded-md"
          onClick={() => setSelectedPlaylist(null)}
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

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Playlist } from 'spotify-types';
import { useStore } from '../store';

export const Modal = () => {
  const { selectedPlaylist, setSelectedPlaylist } = useStore();
  const [playlist, setPlaylist] = useState<Playlist>();

  const getPlaylist = async (id: string) => {
    const result = await axios.get(
      `https://api.spotify.com/v1/playlists/${id}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    setPlaylist(result.data);
  };

  useEffect(() => {
    selectedPlaylist && getPlaylist(selectedPlaylist);
  }, [selectedPlaylist]);
  {
    /*@ts-ignore*/
    console.log(playlist?.tracks.items);
  }

  return (
    <div className="bg-gray-800 text-white rounded-lg p-4">
      <span className="text-2xl font-bold">{playlist?.name}</span>
      <button
        className="bg-green-500 p-2 m-2"
        onClick={() => setSelectedPlaylist(null)}
      >
        X
      </button>
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

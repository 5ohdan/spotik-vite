import axios from 'axios';
import { useEffect, useState } from 'react';
import { Playlist } from 'spotify-types';

interface ModalProps {
  playlistId: string;
}

export const Modal = ({ playlistId }: ModalProps) => {
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
    getPlaylist(playlistId);
  }, [playlistId]);

  console.log(playlist?.tracks.items);

  return (
    <div>
      <span>{playlist?.name}</span>
      <ul>
        {/*@ts-ignore*/}
        {playlist?.tracks?.items?.map((track) => (
          <li key={track.track.id}>{track.track.name}</li>
        ))}
      </ul>
    </div>
  );
};

import { useEffect } from 'react';
import { Header } from './components/Header';
import { useStore } from '../../store';
import { getTracks } from './helpers';

export const SinglePlaylist = () => {
  const selectedPlaylistId = useStore((state) => state.selectedPlaylistId);

  useEffect(() => {
    selectedPlaylistId && getTracks(selectedPlaylistId);
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

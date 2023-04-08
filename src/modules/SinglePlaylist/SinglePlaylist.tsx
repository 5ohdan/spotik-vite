import { useLoaderData } from 'react-router-dom';
import { Playlist } from 'spotify-types';

import { Header } from './components/Header';
import { Tracks } from './components/Tracks';

export const SinglePlaylist = () => {
  const { name, tracks, images } = useLoaderData() as Playlist;
  console.log({ name, tracks });
  return (
    <div className="p-4">
      <Header name={name} image={images[0].url} />
      {/*@ts-ignore */}
      <Tracks tracks={tracks.items} />
    </div>
  );
};

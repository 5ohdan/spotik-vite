import { useEffect, useState } from 'react';
import { getSimplifiedPlaylists } from '../Playlists/helpers';
import { SimplifiedPlaylist } from 'spotify-types';
import { SidebarLayout } from '../../ui/Layout/SidebarLayout';

export const Sidebar = () => {
  const [playlistList, setPlaylistList] = useState<SimplifiedPlaylist[]>([]);

  useEffect(() => {
    getSimplifiedPlaylists().then((result) => setPlaylistList(result));
  }, [playlistList]);

  return (
    <SidebarLayout>
      <div>
        <ul>
          {playlistList.map((item) => (
            <a href={`/playlist/${item.id}`} key={item.id}>
              <li className="text-white hover:underline">{item.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </SidebarLayout>
  );
};

import { useEffect, useState } from 'react';
import { getSimplifiedPlaylists } from '../Playlists/helpers';
import { SimplifiedPlaylist } from 'spotify-types';
import { SidebarLayout } from '../../ui/Layout/SidebarLayout';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [playlistList, setPlaylistList] = useState<SimplifiedPlaylist[]>([]);

  useEffect(() => {
    getSimplifiedPlaylists().then((result) => setPlaylistList(result));
  }, []);

  return (
    <SidebarLayout>
      <div>
        <ul>
          {playlistList.map((item) => (
            <Link to={`/playlist/${item.id}`} key={item.id}>
              <li className="text-white hover:underline">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </SidebarLayout>
  );
};

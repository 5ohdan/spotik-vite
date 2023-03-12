 import { Card } from '../../../ui/Card';
import { SimplifiedPlaylist } from 'spotify-types';

interface PlaylistProps {
  playlistItem: SimplifiedPlaylist;
  setPlaylist: (id: string) => void;
}

export const PlaylistsItem = ({ playlistItem, setPlaylist }: PlaylistProps) => {
  return (
    <li>
      <a
        style={{ backgroundImage: `url(${playlistItem.images[0].url})` }}
        href={playlistItem.href}
        onClick={(event) => {
          event.preventDefault();
          setPlaylist(playlistItem.id);
        }}
      >
        <Card>
          <img
            className="w-max"
            src={playlistItem.images[0].url}
            alt={playlistItem.name}
          />
          <span>{playlistItem.name}</span>
        </Card>
      </a>
    </li>
  );
};

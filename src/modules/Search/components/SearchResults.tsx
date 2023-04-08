import { Album, Artist, Track } from 'spotify-types';

interface SearchResultsProps {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
}

export const SearchResults = ({
  albums,
  artists,
  tracks,
}: SearchResultsProps) => {
  return (
    <div className="flex flex-col gap-10 p-4">
      {tracks && tracks.length > 0 && (
        <div>
          <span className="text-white text-lg font-semibold">Songs</span>
          <ul className="pt-3">
            {tracks.map((track) => (
              <li
                className="flex gap-4 py-2 hover:bg-gray-800 p-2"
                key={track.id}
              >
                <img
                  className="w-16 h-16"
                  src={track.album.images[0].url}
                  alt={track.album.name}
                />
                <div className="flex flex-col justify-center">
                  <span className="text-white text-lg">{track.name}</span>
                  <span className="text-gray-400 hover:underline hover:cursor-pointer">
                    {track.artists[0].name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {artists && artists.length > 0 && (
        <div>
          <span className="text-white text-lg font-semibold">Artists</span>
          <ul className="pt-2 flex flex-wrap gap-5">
            {artists.map((artist) => (
              <li
                className="bg-gray-900 hover:bg-gray-800 flex flex-col p-4 justify-between gap-10"
                key={artist.id}
              >
                <img
                  className="w-48 h-48 rounded-full"
                  src={artist?.images[0]?.url}
                  alt={artist.name}
                />
                <p className="text-white truncate">{artist.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {albums && albums.length > 0 && (
        <div>
          <span className="text-white text-lg font-semibold">Albums</span>
          <ul className="flex flex-wrap gap-6 pt-2">
            {albums.map((album) => (
              <li
                className="flex flex-col gap-4 bg-gray-900 hover:bg-gray-800 p-4"
                key={album.id}
              >
                <img
                  src={album.images[0].url}
                  alt={album.name}
                  className="w-36 h-36"
                />
                <span className="text-white text-ellipsis max-w-[144px] hover:underline">
                  {album.release_date.split('-')[0]} | {album.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

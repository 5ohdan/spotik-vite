import { Track } from 'spotify-types';

export const Tracks = ({ tracks }: { tracks: Track[] }) => {
  return (
    <div className="pt-3">
      <ul className="bg-gray-900 p-3 list-decimal">
        {tracks.map((track) => (
          <li
            /*@ts-ignore */
            key={track.track.id}
            className="hover:underline hover:bg-gray-700  py-1"
          >
            <div className="flex flex-col gap-1">
              <span className="text-lg text-white font-semibold">
                {/*@ts-ignore */}
                {track.track.name}
              </span>
              <span className="text-gray-600">
                {/*@ts-ignore */}
                {track.track.artists[0].name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

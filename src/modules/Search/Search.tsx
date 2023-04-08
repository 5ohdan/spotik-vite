import { FormEvent, useEffect, useState } from 'react';
import { SearchInput } from './components/SearchInput';
import { SearchResults } from './components/SearchResults';
import { getSearchResults } from './helpers';
import { Album, Artist, Track } from 'spotify-types';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [albums, setAlbums] = useState<Album[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('search')) {
      const param = searchParams.get('search');
      param &&
        getSearchResults(param).then((result) => {
          setAlbums(() => result.albums);
          setArtists(() => result.artists);
          setTracks(() => result.tracks);
        });
    }
  }, []);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const result = await getSearchResults(inputValue.trim());
    setSearchParams({ search: inputValue.trim() });

    setAlbums(() => result.albums);
    setArtists(() => result.artists);
    setTracks(() => result.tracks);
  };

  return (
    <div className="bg-black min-h-screen">
      <SearchInput
        value={inputValue}
        setValue={setInputValue}
        formSubmit={submitHandler}
      />
      <SearchResults
        /*@ts-ignore */
        albums={albums.items}
        /*@ts-ignore */
        artists={artists.items}
        /*@ts-ignore */
        tracks={tracks.items}
      />
    </div>
  );
};

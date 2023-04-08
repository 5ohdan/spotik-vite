import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import './index.css';
import Auth from './modules/Auth';
import Playlists from './modules/Playlists';
import Search from './modules/Search';
import SinglePlaylist from './modules/SinglePlaylist';
import { getPlaylist } from './modules/SinglePlaylist/helpers';
import { Playlist } from 'spotify-types/typings/playlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'playlists',
        element: <Playlists />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'playlist/:playlistId',
        element: <SinglePlaylist />,
        loader: async ({ params }) => {
          const { name, tracks, images } = (await getPlaylist(
            params.playlistId!
          )) as Playlist;
          return { name, tracks, images };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

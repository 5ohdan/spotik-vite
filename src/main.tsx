import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './modules/Auth';
import Playlists from './modules/Playlists';
import Search from './modules/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/playlists',
    element: <Playlists />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { useState } from 'react';
import Login from './pages/Auth';
import { Playlists } from './pages/Playlists/components/Playlists';

function App() {
  return (
    <>
      <div className="p-6">
        <Login />
        <Playlists />
      </div>
    </>
  );
}

export default App;

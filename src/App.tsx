import { useState } from 'react';
import { Auth } from './pages/Auth';
import { Playlists } from './components/Playlists';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <div className="p-6">
        <Auth />

        <Playlists />
      </div>
    </>
  );
}

export default App;

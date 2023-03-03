import { useState } from 'react';
import Login from './pages/Auth';
import { Playlists } from './components/Playlists';

function App() {
  const [isLogged, setIsLogged] = useState(false);

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

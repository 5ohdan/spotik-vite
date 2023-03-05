import { useEffect } from 'react';
import Login from './modules/Auth';
import Playlists from './modules/Playlists';
import { isUserAuthenticated } from './utils/helpers';

function App() {
  useEffect(() => {
    isUserAuthenticated();
  }, []);
  return (
    <div className="p-6">
      <Login />
      <Playlists />
    </div>
  );
}

export default App;

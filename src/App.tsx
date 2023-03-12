import { useEffect } from 'react';
import Login from './modules/Auth';
import Playlists from './modules/Playlists';
import { isUserAuthenticated } from './utils/helpers';
import Sidebar from './modules/Sidebar';

function App() {
  useEffect(() => {
    isUserAuthenticated();
  }, []);
  return (
    <div className="bg-black min-h-screen min-w-screen">
      <Sidebar />
    </div>
  );
}

export default App;

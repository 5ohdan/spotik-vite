import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { isUserAuthenticated } from '../utils/helpers';
import Sidebar from './modules/Sidebar';
import Player from './modules/Player';

function App() {
  useEffect(() => {
    isUserAuthenticated();
  }, []);
  return (
    <>
      <div className="bg-black min-h-screen min-w-screen flex">
        <Sidebar />
        <Outlet />
      </div>
      <Player />
    </>
  );
}

export default App;

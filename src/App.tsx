import Login from './modules/Auth';
import Playlists from './modules/Playlists';

function App() {
  return (
    <div className="p-6">
      <Login />
      <Playlists />
    </div>
  );
}

export default App;

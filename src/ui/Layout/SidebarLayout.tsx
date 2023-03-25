import { ReactElement } from 'react';
import Logo from '../../assets/Green_Logo.png';
import { Link } from 'react-router-dom';

export const SidebarLayout = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <div className="p-6 flex flex-col gap-5 min-h-screen border-r border-gray-800 min-w-max">
      <a href="/">
        <img src={Logo} className="max-w-[130px]" />
      </a>
      <div className="flex flex-col">
        <ul className="text-white text-lg">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/search">Search</Link>
          </li>
          <li className="hover:underline">
            <Link to="/playlists">Playlists</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

import { ReactElement } from 'react';
import Logo from '../../assets/Green_Logo.png';

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
            <a href="/">Home</a>
          </li>
          <li className="hover:underline">
            <a href="/search">Search</a>
          </li>
          <li className="hover:underline">
            <a href="/playlists">Playlists</a>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

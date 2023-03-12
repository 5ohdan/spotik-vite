import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactElement } from 'react';

export const HeaderLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex justify-around">
      <div className="flex">
        <button className="bg-gray-700 hover:bg-gray-800 p-2 rounded-full items-center">
          <ChevronLeft color="white" />
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 p-2 rounded-full items-center">
          <ChevronRight color="white" />
        </button>
      </div>
      {children}
    </div>
  );
};

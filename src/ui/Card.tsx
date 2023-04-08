import { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-48 h-64 p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex flex-col justify-between gap-2">
      {children}
    </div>
  );
};

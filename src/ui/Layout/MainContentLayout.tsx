import { ReactElement } from 'react';

export const MainContentLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <div className="p-6">{children}</div>
    </>
  );
};

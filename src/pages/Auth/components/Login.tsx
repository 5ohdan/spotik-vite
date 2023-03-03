import { getAuthProps } from '../helpers';
import { urlParams } from '../constants';

export const Login = () => {
  const url = new URL(import.meta.env.VITE_AUTH_URL);

  getAuthProps();

  return (
    <>
      <button
        // onClick={authHandler}
        className="bg-green-600 rounded-lg p-2 text-lg"
      >
        <a href={`${url.href}?${urlParams}`}>Login</a>
      </button>
    </>
  );
};

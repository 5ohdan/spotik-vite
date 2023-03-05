import { getAuthProps } from '../helpers';
import { urlParams, url } from '../constants';

export const Login = () => {
  const { access_token, token_type, expires_in } = getAuthProps();

  console.log({ access_token, token_type, expires_in });

  return (
    <button className="bg-green-600 rounded-lg p-2 text-lg">
      <a href={`${url.href}?${urlParams}`}>Login</a>
    </button>
  );
};

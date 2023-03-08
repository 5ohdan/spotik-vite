import { authPath } from './constants';

const getAuthProps = () => {
  const searchParams = new URLSearchParams(location.hash.substring(1));
  const access_token = searchParams.get('access_token');
  const token_type = searchParams.get('token_type');
  const expires_in = searchParams.get('expires_in');
  console.log({ access_token, token_type, expires_in });
  return { access_token, token_type, expires_in };
};

export const isUserAuthenticated = async () => {
  let token = localStorage.getItem('access_token');
  const { access_token } = getAuthProps();
  !token && !access_token && location.replace(`${authPath}`);
  token = access_token;
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  response.status === 401 && location.replace(`${authPath}`);
  access_token && localStorage.setItem('access_token', access_token);
  location.hash = '';
};

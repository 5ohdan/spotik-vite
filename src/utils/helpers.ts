import { authPath } from './constants';

const getAuthProps = () => {
  const searchParams = new URLSearchParams(window.location.hash.substring(1));
  const access_token = searchParams.get('access_token');
  const token_type = searchParams.get('token_type');
  const expires_in = searchParams.get('expires_in');
  return { access_token, token_type, expires_in };
};

export const isUserAuthenticated = async () => {
  const { access_token } = getAuthProps();
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}`);
  if (access_token === null) {
    window.location.replace(`${authPath}`);
  }
  if (access_token !== null && response.status !== 401) {
  }
};

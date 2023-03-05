import { url, urlParams } from './constants';
export const getAuthProps = () => {
  const searchParams = new URLSearchParams(window.location.hash.substring(1));
  const access_token = searchParams.get('access_token');
  const token_type = searchParams.get('token_type');
  const expires_in = searchParams.get('expires_in');
  return { access_token, token_type, expires_in };
};

export const getTokenFromStorage = () => {
  localStorage.getItem('access_token') === undefined &&
    window.location.replace(`${url}${urlParams}`);
};

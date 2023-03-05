import { authPath } from '../../utils/constants';

export const getTokenFromStorage = () => {
  localStorage.getItem('access_token') === undefined &&
    window.location.replace(`${authPath}`);
};

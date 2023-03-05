import { authPath } from '../../../utils/constants';

export const Login = () => {
  return (
    <button className="bg-green-600 rounded-lg p-2 text-lg">
      <a href={`${authPath}`}>Login</a>
    </button>
  );
};

export const Login = () => {
  const scopes =
    'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';

  const urlParams = new URLSearchParams({
    response_type: 'token',
    client_id: import.meta.env.VITE_CLIENT_ID,
    redirect_uri: 'http://localhost:5173/',
    scope: scopes,
  });

  const url = new URL(import.meta.env.VITE_AUTH_URL);

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

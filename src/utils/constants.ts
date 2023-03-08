const url = new URL(import.meta.env.VITE_AUTH_URL);

const scopes =
  'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';

const params = new URLSearchParams({
  response_type: 'token',
  client_id: import.meta.env.VITE_CLIENT_ID,
  redirect_uri: `${import.meta.env.VITE_REDIRECT_URI}`,
  scope: scopes,
});

export const authPath = `${url.href}?${params}`;

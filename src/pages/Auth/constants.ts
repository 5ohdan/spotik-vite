const scopes =
  'playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';

export const urlParams = new URLSearchParams({
  response_type: 'token',
  client_id: import.meta.env.VITE_CLIENT_ID,
  redirect_uri: 'http://localhost:5173/',
  scope: scopes,
});

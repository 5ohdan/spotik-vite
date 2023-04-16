import { useEffect, useState } from 'react';

export interface PlayerState {
  playback: any;
  isActive: null | boolean;
  isPaused: null | boolean;
  track: any;
  deviceId: null | string;
}

const INITIAL_STATE = {
  playback: null,
  isActive: null,
  isPaused: null,
  track: null,
  deviceId: null,
};

export const usePlayer = <T = PlayerState>() => {
  const [state, setState] = useState<PlayerState>(INITIAL_STATE);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = localStorage.getItem('access_token');
      const player = new Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb: any) => {
          cb(token);
        },
        volume: 1,
      });

      setState((state) => ({ ...state, playback: player }));

      player.addListener('ready', ({ device_id }: { device_id: string }) => {
        console.log('Ready with Device ID', device_id);
        setState((state) => ({ ...state, deviceId: device_id }));
      });

      player.addListener(
        'not_ready',
        ({ device_id }: { device_id: string }) => {
          console.log('Device ID has gone offline', device_id);
        }
      );

      player.addListener('player_state_changed', (inner_state: unknown) => {
        if (!state) {
          return;
        }

        setState((state) => ({
          ...state,
          track: inner_state.track_window.current_track,
          isPaused: inner_state.paused,
        }));

        player.getCurrentState().then((inner_state: unknown) => {
          setState((state) => ({ ...state, isActive: !!inner_state }));
        });
      });

      player.connect();
    };
  }, []);
  return [state, setState];
};

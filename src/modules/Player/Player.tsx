import { useState, useEffect } from 'react';
import { getPlayerState, play } from './api';
import { PlayerState, usePlayer } from './utils';
import { useStore } from '../../store';
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';

export const Player = () => {
  const [playbackState, setPlaybackState] = usePlayer<PlayerState>();

  const setDeviceId = useStore((state) => state.setDeviceId);

  useEffect(() => {
    setDeviceId(playbackState.deviceId);
  }, [playbackState]);

  return (
    <div className="flex sticky bottom-0 min-w-full bg-zinc-900 h-24 justify-between items-center px-5">
      <div className="flex gap-4 items-center">
        <div className="w-14 h-14 bg-gray-400"></div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-100">Track</span>
          <span className="text-gray-100">Artist</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Volume2 color="gray" />
        <Slider.Root>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb />
        </Slider.Root>
      </div>
    </div>
  );
};

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  isLogged: boolean;
  shownPlaylistId: string | null;
  selectedPlaylistId: string | null;
  deviceId: string | null;
};

type Actions = {
  setIsLogged: (login: State['isLogged']) => void;
  setShownPlaylistId: (id: State['shownPlaylistId']) => void;
  setSelectedPlaylistId: (id: State['selectedPlaylistId']) => void;
  setDeviceId: (id: State['deviceId']) => void;
};

export const useStore = create<State & Actions>()(
  devtools((set) => ({
    isLogged: false,
    shownPlaylistId: null,
    selectedPlaylistId: null,
    deviceId: null,

    setIsLogged: (login) => set(() => ({ isLogged: login })),
    setShownPlaylistId: (id) => set(() => ({ shownPlaylistId: id })),
    setSelectedPlaylistId: (id) => set(() => ({ selectedPlaylistId: id })),
    setDeviceId: (id) => set(() => ({ deviceId: id })),
  }))
);

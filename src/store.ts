import { create } from 'zustand';

type State = {
  isLogged: boolean;
  openedPlaylist: string | null;
};

type Actions = {
  setIsLogged: (login: State['isLogged']) => void;
  setOpenedPlaylist: (id: State['openedPlaylist']) => void;
};

export const useStore = create<State & Actions>()((set) => ({
  isLogged: false,
  openedPlaylist: null,
  setOpenedPlaylist: (id) => set(() => ({ openedPlaylist: id })),
  setIsLogged: (login) => set(() => ({ isLogged: login })),
}));

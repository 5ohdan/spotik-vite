import { create } from 'zustand';

type State = {
  isLogged: boolean;
  selectedPlaylist: string | null;
};

type Actions = {
  setIsLogged: (login: State['isLogged']) => void;
  setSelectedPlaylist: (id: State['selectedPlaylist']) => void;
};

export const useStore = create<State & Actions>()((set) => ({
  isLogged: false,
  selectedPlaylist: null,
  setSelectedPlaylist: (id) => set(() => ({ selectedPlaylist: id })),
  setIsLogged: (login) => set(() => ({ isLogged: login })),
}));

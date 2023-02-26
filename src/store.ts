import { create } from 'zustand';

type State = {
  isLogged: boolean;
  selectedPlaylist: string | null;
};

type Actions = {
  setIsLogged: (isLogged: State['isLogged']) => void;
  setSelectedPlaylist: (id: State['selectedPlaylist']) => void;
};

export const useStore = create<State & Actions>()((set) => ({
  isLogged: false,
  selectedPlaylist: null,
  setSelectedPlaylist: (id: string | null) =>
    set(() => ({ selectedPlaylist: id })),
  setIsLogged: () => {},
}));

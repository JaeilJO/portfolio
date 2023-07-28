import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
    clicked: boolean;
    click: () => void;
}

type State = {
    is_clicked: boolean;
};

type Actions = {
    click: () => void;
};

export const useNavigation = create<State & Actions>((set) => ({
    is_clicked: false,
    click: () => set((state) => ({ is_clicked: !state.is_clicked })),
}));

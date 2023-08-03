import { create } from 'zustand';

type State = {
    alert_status: boolean;
};

type Actions = {
    appearAlert: () => void;
    resetAlert: () => void;
};

export const useAlert = create<State & Actions>((set) => ({
    alert_status: false,
    appearAlert: () => set((state) => ({ alert_status: true })),
    resetAlert: () => set((state) => ({ alert_status: false })),
}));

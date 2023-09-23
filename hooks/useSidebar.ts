import { create } from "zustand";

export type SidebarStore = {
    open: boolean;
    toggle: () => void;
};

export const useSidebar = create<SidebarStore>((set) => ({
    open: false,
    toggle: () => {
        set((state) => ({ open: !state.open }));
    },
}));
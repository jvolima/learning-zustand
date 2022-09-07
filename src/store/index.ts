import create from "zustand";

interface ListState {
  list: [];
}

export const useListStore = create<ListState>((set) => ({
  list: []
}));

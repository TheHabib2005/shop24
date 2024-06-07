import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// State types
interface States {
  searchItems: [];
}

// Action types
interface Actions {
  addRecentSearch: (payload: string) => void;
  //   deleteRecentSearch: () => void;
}

// useBearStore
export const useRecentSearch = create(
  persist<States & Actions>(
    (set) => ({
      searchItems: [],
      addRecentSearch: (payload: string) =>
        set((state) => {
          return { searchItems: [...state.searchItems, payload] };
        }),
      //   deleteRecentSearch: () => set((state) => ({ bears: state.bears - 1 })),
    }),
    {
      name: "recent-search",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

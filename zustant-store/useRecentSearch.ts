import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// State types
interface States {
  searchItems: any;
}

// Action types
interface Actions {
  addRecentSearch: (payload: any) => void;
  deleteRecentSearch: (id: number) => void;
}

// useRecentSearch store
export const useRecentSearch = create(
  persist<States & Actions>(
    (set, get) => ({
      searchItems: [],
      addRecentSearch: (payload: any) => {
        let storeLimit = 3;
        const existingProduct = [...get().searchItems].find(
          (item) => item?.value === payload.value
        );
        let updatedItems: any = [...get().searchItems];
        if (existingProduct) {
          updatedItems = updatedItems.map((item: any) => {
            if (item.value === payload.value) {
              return {
                ...item,
                createdAt: new Date().getTime(),
              };
            } else {
              return {
                ...item,
              };
            }
          });
        } else {
          if (updatedItems.length <= storeLimit) {
            updatedItems.push(payload);
          } else {
            let lastIndex = updatedItems.length - 1;
            updatedItems = updatedItems.filter(
              (item: any, index: any) => index !== lastIndex
            );
            updatedItems.push(payload);
          }
        }
        set((state) => ({
          searchItems: updatedItems,
        }));
      },
      deleteRecentSearch: (id: number) => {
        let updatedItems = [...get().searchItems].filter(
          (item) => item.createdAt !== id
        );
        set((state) => ({
          searchItems: updatedItems,
        }));
      },
    }),
    {
      name: "recent-search",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

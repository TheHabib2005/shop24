import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface tempState {
  isCartBarOpen: boolean;
  setIsCartBarOpen: (value: boolean) => void;
}

export const useGlobalTempState = create<tempState>((set) => ({
  isCartBarOpen: false,
  setIsCartBarOpen: (value: boolean) =>
    set((state) => ({
      isCartBarOpen: value,
    })),
}));

interface LayoutSwitcherTypes {
  isGrid: boolean;
  flexClass: string;
  girdClass: string;
  switchLayout: (value: boolean) => void;
}

export const useLayoutSwitcherState = create<LayoutSwitcherTypes>()(
  devtools(
    persist(
      (set, get) => ({
        isGrid: false,
        flexClass: "px-5 py-5 flex items-center flex-col gap-y-5 w-[100%]",
        girdClass:
          "px-5 py-5 grid xl:grid-cols-4 place-items-center md:grid-cols-2 grid-cols-1 gap-5",

        switchLayout: (value) => {
          set((state) => ({
            isGrid: value,
          }));
        },
      }),
      {
        name: "layout-switcher-state",
      }
    )
  )
);

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<State>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => set(() => ({ token })),
      clearToken: () => set({ token: null }),
    }),
    {
      name: "token",
    }
  )
);

import create from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
  user: any | null;
  setUser: (user: any) => void;
  setIsAuthenticated: (value: boolean) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => set({ user }),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  logout: async () => {
    set({ user: null, isAuthenticated: false });
  },
}));
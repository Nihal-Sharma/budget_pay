import { create } from "zustand";

/* ================= TYPES ================= */

export interface User {
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
  isActive: boolean;
  lastLoginAt?: Date;
  income: number;
  monthlySpend: number;
}

/* ================= STORE ================= */

interface UserStore {
  user: User | null;

  setUser: (user: User) => void;
  updateUser: (data: Partial<User>) => void;
  clearUser: () => void;
}

/* ================= IMPLEMENTATION ================= */

export const useUserStore = create<UserStore>((set) => ({
  user: null,

  // Set full user (login / signup)
  setUser: (user) =>
    set({
      user,
    }),

  // Update partial user fields (profile edit, income update, etc.)
  updateUser: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    })),

  // Clear user (logout)
  clearUser: () =>
    set({
      user: null,
    }),
}));

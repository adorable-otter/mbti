import { create } from 'zustand';

const useAuthUserStore = create((set) => ({
  authUser: null,
  setAuthUser: (newAuthUser) =>
    set(() => ({
      authUser: newAuthUser,
    })),
  removeAuthUser: () =>
    set(() => ({
      authUser: null,
    })),
}));

export default useAuthUserStore;

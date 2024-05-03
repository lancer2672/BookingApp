import create from 'zustand';

const useUserStore = create(set => ({
  user: null,
  setUser: user => set({user: user}),
  removeUser: () => set({user: null}),
}));
export default useUserStore;

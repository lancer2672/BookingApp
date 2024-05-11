import create from 'zustand';

const useUserStore = create(set => ({
  user: {email: 'notadmin@gmail.com', password: '20'},
  setUser: user => set({user: user}),
  removeUser: () => set({user: null}),
}));
export default useUserStore;

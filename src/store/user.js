import create from 'zustand';

const useUserStore = create(set => ({
  user: {email: 'admin2@gmail.com', password: '20', role: 'staff'},
  setUser: user => set({user: user}),
  removeUser: () => set({user: null}),
}));
export default useUserStore;

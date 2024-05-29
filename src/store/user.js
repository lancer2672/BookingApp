import {ROLE} from '@src/utils/constant';
import create from 'zustand';

const useUserStore = create(set => ({
  // user: null,
  user: {email: 'admin@gmail.com', password: '20', role: ROLE.USER},
  setUser: user => set({user: user}),
  removeUser: () => set({user: null}),
}));
export default useUserStore;

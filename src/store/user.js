import {ROLE} from '@src/utils/constant';
import create from 'zustand';

const useUserStore = create(set => ({
  // user: null,
  user: {email: 'admin2@gmail.com', password: '20', role: ROLE.STAFF},
  setUser: user => set({user: user}),
  removeUser: () => set({user: null}),
}));
export default useUserStore;

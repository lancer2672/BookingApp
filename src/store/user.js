import {ROLE} from '@src/utils/constant';
import create from 'zustand';

const useUserStore = create(set => ({
  user: {email: 'admin2@gmail.com', password: '20', role: ROLE.AGENT},
  setUser: user => set({user: user}),
  removeUser: () => set({user: null}),
}));
export default useUserStore;

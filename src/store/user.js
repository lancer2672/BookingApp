import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '@src/utils/constant';
import create from 'zustand';

const useUserStore = create(set => ({
  // user: null,
  user: {email: 'admin@gmail.com', password: '20', role: ROLE.AGENT},
  setUser: user => set({user: user}),
  removeUser: async () => {
    await AsyncStorage.removeItem('accessToken');

    set({user: null});
  },
}));
export default useUserStore;

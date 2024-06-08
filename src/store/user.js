import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROLE } from '@src/utils/constant';
import create from 'zustand';

const useUserStore = create(set => ({
  user: null,
  user: {email: 'admiádfn@gmail.com',id:"testuser4", password: '20',firstName:"Khánh", lastName:"Trần", role: ROLE.USER},
  setUser: user => set({user: user}),
  removeUser: async () => {
    await AsyncStorage.removeItem('accessToken');
    
    set({user: null});
  },
}));
export default useUserStore;

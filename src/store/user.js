import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';

const useUserStore = create(set => ({
  user: null,
  // user: {email: 'admiádfn@gmail.com',id:"testuser4", password: '20',firstName:"Khánh", lastName:"Trần", role: ROLE.AGENT, phoneNumber: '079123123', status:'CREATED'},
  setUser: user => set({user: user}),
  removeUser: async () => {
    await AsyncStorage.removeItem('accessToken');
    
    set({user: null});
  },
}));
export default useUserStore;



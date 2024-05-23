import create from 'zustand';

const useRoomStore = create(set => ({
  rooms: [],
  setRoom: rooms => set({rooms: rooms}),
  removeRoom: () => set({rooms: null}),
}));
export default useRoomStore;

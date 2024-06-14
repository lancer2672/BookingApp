import create from 'zustand';

const useHotelStore = create(set => ({
    hotels: [],
    setHotels: hotels => set({ hotels: hotels }),
    removeHotels: () => set({ hotels: null }),
}));
export default useHotelStore;

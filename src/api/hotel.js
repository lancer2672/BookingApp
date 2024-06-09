import {mappingHotel} from '@src/utils/mapper';
import axiosClient from './axiosClient';

const hotelRoute = '/api/properties';

const hotelApi = {
  getList: async () => {
    try {
      const response = await axiosClient.get(`${hotelRoute}`);
      const hotels = response.data.map(mappingHotel);
      console.log('>>hotels api', hotels[0].avatar);
      return hotels;
    } catch (error) {
      throw error;
    }
  },
  getById: async id => {
    try {
      const response = await axiosClient.get(`${hotelRoute}/${id}`);
      return mappingHotel(response.data);
    } catch (error) {
      throw error;
    }
  },
};

export default hotelApi;

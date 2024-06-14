import { mappingHotel } from '@src/utils/mapper';
import axiosClient from './axiosClient';
import { URL_API_SUB } from '@src/utils/constant';
import axios from 'axios';

const hotelRoute = '/api';

const hotelApi = {
  getList: async (userId) => {
    try {
      const response = await axios.get(`${URL_API_SUB}${hotelRoute}/hotels/${userId}`); 
      return response.data;
    } catch (error) {
      console.log(">>>hotelApi getList err",error.response);
      throw error;
    }
  },
  createHotel: async  body => {
    try {
        const response = await axios.post(`${URL_API_SUB}${hotelRoute}/hotels`, body);
        return response.data;
    } catch (error) {
        console.log(error.response);
        throw error;
    }
  }
};

export default hotelApi;

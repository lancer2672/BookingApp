import { mappingHotel } from '@src/utils/mapper';
import axiosClient from './axiosClient';
import { URL_API_SUB } from '@src/utils/constant';
import axios from 'axios';

const roomRoute = '/api/rooms';

const roomApi = {

    getRoom: async  hotelId => {
    try {
        const response = await axios.get(`${URL_API_SUB}${roomRoute}/${hotelId}`);
        return response.data;
    } catch (error) {
        console.log(error.response);
        throw error;
    }
  }
};

export default roomApi;



import { URL_API_SUB } from '@src/utils/constant';
import axios from 'axios';

const staffRoute = '/api/staffs';

const staffApi = {
  getStaff: async (staffId) => {
    try {
      const response = await axios.get(`${URL_API_SUB}${staffRoute}/${staffId}`);
      return response.data;
    } catch (error) {
      console.log('Get staff error', error);
      throw error;
    }
  },
  createStaff: async  body => {
    try {
        const response = await axios.post(`${URL_API_SUB}${staffRoute}/${staffId}`, body);
        return response.data;
    } catch (error) {
        console.log(error.response);
        throw error;
    }
},
};

export default staffApi;
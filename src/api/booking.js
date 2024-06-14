import { URL_API_SUB } from '@src/utils/constant';
import axios from 'axios';

const bookingRoute = '/api/bookings';


const bookingApi = {
    getListByUser: async userId => {
      try {
        const response = await axios.get(`${URL_API_SUB}${bookingRoute}/user/${userId}`);
        return response.data;
      } catch (error) {
        console.log('booking error', error);
        throw error;
      }
    },
    getListByAgent: async agentId => {
      try {
        const response = await axios.get(`${URL_API_SUB}${bookingRoute}/agent/${agentId}`);
        return response.data;
      } catch (error) {
        console.log('booking error', error);
        throw error;
      }
    },
    updateStatus: async body => {
      try {
        const response = await axios.patch(`${URL_API_SUB}${bookingRoute}`,body);
        return response.data;
      } catch (error) {
        console.log('booking error', error);
        throw error;
      }
    },
    create: async data => {
      console.log("API CALLED",data);
      try {
        const response = await axios.post(
          `${URL_API_SUB}${bookingRoute}`,
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        return response.data;
      } catch (error) {
        console.log('booking error', JSON.stringify(error));

        throw error;
      }
    },
    createv2: async data => {
      console.log("API CALLED",data);
      try {
        const response = await axios.post(
          `${URL_API_SUB}/api/booking/v2`,
          data,
        );
          console.log("response",response);
        return response.data;
      } catch (error) {
        console.log('booking error', JSON.stringify(error));

        throw error;
      }
    },
  };
  

export default bookingApi;
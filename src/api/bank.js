import { URL_API_SUB } from '@src/utils/constant';
import axios from 'axios';
const bookingRoute = '/api';


const bankApi = {
    getList: async (userId) => {
        try {
            const response = await axios.get(`${URL_API_SUB}${bookingRoute}/banks/${userId}`);
            return response.data;
        } catch (error) {
            console.log(error.response);
            throw error;
        }
    },
    createBank: async body => {
        try {
            const response = await axios.post(`${URL_API_SUB}${bookingRoute}/banks/`, body);
            return response.data;
        } catch (error) {
            console.log(error.response);
            throw error;
        }
    },
    updateBank: async (body) => {
        try {
            const response = await axios.put(`${URL_API_SUB}${bookingRoute}/banks/${userId}`, body);
            return response.data;
        } catch (error) {
            console.log(error.response);
            throw error;
        }
    },
};


export default bankApi;
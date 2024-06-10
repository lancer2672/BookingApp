import axiosClient from './axiosClient';

const ratingsRoute = '/api/rating';


const ratingsApi = {
    getRatings: async id => {
      try {
        const response = await axiosClient.get(`${ratingsRoute}/${id}`);
        return response.data;
      } catch (error) {
        console.log('ratings error', error);
        throw error;
      }
    }
  };
  

export default ratingsApi;
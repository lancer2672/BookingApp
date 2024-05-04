import axiosClient from './axiosClient';

const agentRoute = '/api/location';

const agentApi = {
  signUpAgent: async body => {
    try {
      const response = await axiosClient.post(`${agentRoute}/wards`, {
        body,
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

export default agentApi;

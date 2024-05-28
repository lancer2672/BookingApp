import axiosClient from './axiosClient';

const authRoute = '/api';

const authApi = {
  getProfileUser: async () => {
    try {
      const response = await axiosClient.post(`${authRoute}/login`, data);
      return response.data;
    } catch (error) {
      console.log('Login error', error);
      throw error;
    }
  },
  loginUser: async data => {
    try {
      const response = await axiosClient.post(`${authRoute}/login`, data);
      return response;
    } catch (error) {
      console.log('Login error', error);
      throw error;
    }
  },
  registerUser: async data => {
    try {
      const response = await axiosClient.post(`${authRoute}/register`, data);
      return response.data;
    } catch (error) {
      console.log('register error', error);
      throw error;
    }
  },
  registerAgent: async data => {
    try {
      const response = await axiosClient.post(
        `${authRoute}/argent/register`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.log('register error', JSON.stringify(error));
      throw error;
    }
  },
  logoutUser: async () => {
    try {
      const response = await axiosClient.post(`${authRoute}/logout`, {});
      return response.data;
    } catch (error) {
      console.log('Logout error', error);
      throw error;
    }
  },
};
export default authApi;

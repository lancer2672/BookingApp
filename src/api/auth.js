import axiosClient from './axiosClient';

const authRoute = '/api';

const authApi = {
  getProfileUser: async () => {
    try {
      const response = await axiosClient.get(`${authRoute}/profile`);
      return response.data;
    } catch (error) {
      console.log('profile error', error);
      throw error;
    }
  },
  loginUser: async data => {
    try {
      const response = await axiosClient.post(`${authRoute}/login`, data);
      return response.data;
    } catch (error) {
      console.log('Login error', error.response);
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
      console.log('register error data', JSON.stringify(error.response));
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

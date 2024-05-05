import axiosClient from './axiosClient';

const locationRoute = '/api/location';

const locationApi = {
  getWards: async () => {
    try {
      const response = await axiosClient.get(`${locationRoute}/wards`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getWard: async wardId => {
    try {
      const response = await axiosClient.get(
        `${locationRoute}/wards/${wardId}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getProvinces: async () => {
    try {
      const response = await axiosClient.get(`${locationRoute}/provinces`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getProvince: async provinceId => {
    try {
      const response = await axiosClient.get(
        `${locationRoute}/provinces/${provinceId}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getDistricts: async () => {
    try {
      const response = await axiosClient.get(`${locationRoute}/districts`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getDistrict: async districtId => {
    try {
      const response = await axiosClient.get(
        `${locationRoute}/districts/${districtId}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default locationApi;

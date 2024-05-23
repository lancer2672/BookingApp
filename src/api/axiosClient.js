import axios from 'axios';

const baseURL = 'http://54.255.249.131:8080';
const axiosClient = axios.create({
  baseURL,
});
axiosClient.interceptors.request.use(
  async config => {
    // config.headers["x-api-key"] = SERVER_API_KEY;
    // const token = await AsyncStorage.getItem("token");
    // if (token) {
    //   config.headers["Authorization"] = `${JSON.parse(token)}`;
    // }
    // const userId = await AsyncStorage.getItem("userId");
    // if (userId) {
    //   config.headers["x-client-id"] = JSON.parse(userId);
    // }

    return config;
  },
  async error => {},
);

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    //refresh token failed
    return Promise.reject(error);
  },
);

export default axiosClient;

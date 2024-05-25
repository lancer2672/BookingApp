import axios from 'axios';

const baseURL = 'http://54.255.249.131:8080';
const axiosClient = axios.create({
  baseURL,
});
axios.interceptors.response.use(
  function (response) {
    // Xử lý phản hồi thành công (nếu cần)
    return response;
  },
  function (error) {
    // Xử lý lỗi ở đây
    console.log('Lỗi:', error.message);
    // Hoặc bạn có thể ném lỗi để xử lý ở nơi gọi hàm
    return Promise.reject(error);
  },
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

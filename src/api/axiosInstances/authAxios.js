import axios from 'axios';
import { tokenStorage } from '../../modules/tokenStorage';

const authAxios = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

authAxios.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenStorage.clear();
    }
    return Promise.reject(error); // 에러를 다시 던져 호출한 함수에서 추가 처리 가능
  }
);

export default authAxios;

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

export default authAxios;

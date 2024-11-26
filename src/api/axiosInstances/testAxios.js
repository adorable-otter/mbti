import axios from "axios";

const testAxios = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default testAxios;
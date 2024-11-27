import axios from "axios";

const testAxios = axios.create({
  baseURL: 'http://localhost:5001/testResults',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default testAxios;
import authAxios from './axiosInstances/authAxios';

export const register = async (userData) => {
  const response = await authAxios.post('/register', userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await authAxios.post('/login?expiresIn=5m', userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await authAxios.get('/user');
  return response.data;
};

export const updateProfile = async (formData) => {};

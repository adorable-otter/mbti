import authAxios from './axiosInstances/authAxios';

export const register = async (userData) => {
  const response = await authAxios.post('/register', userData);
  return response.data;
};

export const requestLogin = async (userData) => {
  const response = await authAxios.post('/login?expiresIn=240m', userData);
  return response.data;
};

export const getUserProfile = async () => {
  try {
    const response = await authAxios.get('/user');
    return response?.data;
  } catch (err) {
  }
};

export const updateProfile = async (formData) => {};

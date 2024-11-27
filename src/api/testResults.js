import testAxios from './axiosInstances/testAxios';

export const getTestResults = async () => {
  const response = await testAxios.get('/');
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await testAxios.post('/', resultData);
};

export const deleteTestResult = async (id) => {
  const response = await testAxios.delete(`/${id}`);
};

export const updateTestResultVisibility = async ({ id, visible }) => {
  const response = await testAxios.patch(`/${id}`, { visible });
};

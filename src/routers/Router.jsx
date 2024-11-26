import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import publicRoutes from './publicRoutes';
import { authenticatedOnly } from './authenticatedOnly';
import { tokenStorage } from '../modules/tokenStorage';
import { getUserProfile } from '../api/auth';
import Login from '../pages/Login';

const loader = async () => {
  if (tokenStorage.getToken()) {
    // 토큰 유효 확인 필요 만료 시 401 
    try {
      const userProfile = await getUserProfile();
      console.log("🚀 ~ loader ~ userProfile:", userProfile)
      return userProfile;
    } catch (err) {
      console.log("🚀 ~ loader ~ err:", err)
      throw err;
    }
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader,
    errorElement: <Login />,
    children: [...publicRoutes, authenticatedOnly],
  },
]);

export default router;

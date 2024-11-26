import { createBrowserRouter } from 'react-router-dom';
import publicRoutes from './publicRoutes';
import { authenticatedOnly } from './authenticatedOnly';
import { tokenStorage } from '../modules/tokenStorage';
import { getUserProfile } from '../api/auth';
import useAuthUserStore from '../stores/useAuthUserStore';
import Layout from '../components/Layout';

const loader = async () => {
  if (tokenStorage.getToken()) {
    // 토큰 유효 확인 필요 만료 시 401
    try {
      const userProfile = await getUserProfile();
      useAuthUserStore.getState().setAuthUser(userProfile)
    } catch (err) {
      console.log('🚀 ~ loader ~ err:', err);
    }
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader,
    children: [...publicRoutes, authenticatedOnly],
  },
]);

export default router;

import { Navigate, Outlet } from 'react-router-dom';
import useAuthUserStore from '../stores/useAuthUserStore';

const ProtectedRoute = () => {
  const authUser = useAuthUserStore((state) => state.authUser);
  return authUser ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRoute;

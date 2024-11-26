import { Navigate, Outlet, useOutletContext } from 'react-router-dom';

const ProtectedRoute = () => {
  const authUser = useOutletContext();
  return authUser ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRoute;

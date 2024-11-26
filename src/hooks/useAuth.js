import { useNavigate } from 'react-router-dom';
import { tokenStorage } from '../modules/tokenStorage';
import useAuthUserStore from '../stores/useAuthUserStore';

const useAuth = () => {
  const { authUser, setAuthUser } = useAuthUserStore((state) => state);
  const navigate = useNavigate();
  const isLoggedIn = !!authUser;

  const logout = () => {
    setAuthUser(null);
    tokenStorage.clear();
    navigate('/');
  };
  return { authUser, isLoggedIn, logout };
};

export default useAuth;

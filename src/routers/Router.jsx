import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';
import MbtiTest from '../pages/MbtiTest';
import { tokenStorage } from '../modules/tokenStorage';

const Router = () => {
  tokenStorage.getToken();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route pate="/" element={<ProtectedRoute />}>
            <Route path="test" element={<MbtiTest />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

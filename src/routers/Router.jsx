import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import { contentMaxWidth } from '../styles/common';

const Layout = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Wrap>
      <Header>
        <Actions>
          <Link to={'/'}>home</Link>
          {isLoggedIn ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <Link to={'/login'}>로그인</Link>
          )}
        </Actions>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Wrap>
  );
};

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${contentMaxWidth};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 1px 1px;
  height: 30px;
  margin-bottom: 40px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: #f5f3f3;
`;

export default Layout;

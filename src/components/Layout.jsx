import { Link, Outlet, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { contentMaxWidth } from '../styles/common';

const Layout = () => {
  const authUser = useLoaderData();
  return (
    <Wrap>
      <Header>
        <Actions>
          <Link to={'/'}>home</Link>
          <Link to={'/login'}>로그인</Link>
        </Actions>
      </Header>
      <Main>
        <Outlet context={authUser} />
      </Main>
    </Wrap>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: #f5f3f3;
  /* width: 100%; */
`;

export default Layout;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { contentMaxWidth } from '../styles/common';

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header>
        <Actions>
          <Link>home</Link>
          <Link>로그인</Link>
        </Actions>
      </Header>
      <Main>{children}</Main>
    </Wrap>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
`

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
`;

export default Layout;

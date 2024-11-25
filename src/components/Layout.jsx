import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header>
        <button>home</button>
        <Link>로그인</Link>
      </Header>
      <main>{children}</main>
    </Wrap>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
`;

export default Layout;

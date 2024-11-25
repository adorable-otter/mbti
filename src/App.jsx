import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Router from './routers/router';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
`;
export default App;

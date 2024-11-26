import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
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

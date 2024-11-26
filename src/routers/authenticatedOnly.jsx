import MbtiTest from '../pages/MbtiTest';
import ProtectedRoute from './ProtectedRoute';

export const authenticatedOnly = {
  path: '/',
  element: <ProtectedRoute />,
  children: [
    {
      path: '/test',
      element: <MbtiTest />,
    },
  ],
};

import TestPage from '../pages/TestPage';
import ProtectedRoute from './ProtectedRoute';

export const authenticatedOnly = {
  path: '/',
  element: <ProtectedRoute />,
  children: [
    {
      path: '/test',
      element: <TestPage />,
    },
  ],
};

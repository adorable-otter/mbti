import TestPage from '../pages/TestPage';
import TestResultList from '../pages/TestResultList';
import ProtectedRoute from './ProtectedRoute';

export const authenticatedOnly = {
  path: '/',
  element: <ProtectedRoute />,
  children: [
    {
      path: '/test',
      element: <TestPage />,
    },
    {
      path: '/results',
      element: <TestResultList />,
    },
  ],
};

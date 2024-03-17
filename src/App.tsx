import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuizListPage from './components/QuizListPage/QuizListPage';
import ProfilePage from './components/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/learn',
    element: <QuizListPage />,
  },
  {
    path: 'profile',
    element: <ProfilePage />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;

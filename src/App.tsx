import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ProfilePage from './pages/ProfilePage';
import GamePage from './pages/GamePage';
import CompletionPage from './pages/CompletionPage';
import './dayjs';
import './anim.css';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/learn',
    element: <LearnPage />,
  },
  {
    path: 'profile',
    element: <ProfilePage />,
  },
  {
    path: 'game',
    element: <GamePage />,
  },
  {
    path: 'completion',
    element: <CompletionPage />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;

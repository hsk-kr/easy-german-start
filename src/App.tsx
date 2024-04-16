import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ProfilePage from './pages/ProfilePage';
import GamePage from './pages/GamePage';
import CompletePage from './pages/CompletePage';
import './dayjs';
import './anim.css';

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
    path: 'complete',
    element: <CompletePage />,
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

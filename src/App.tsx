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
import { HistoryProvider } from './hooks/useHistory';
import NotFound from './pages/NotFoundPage';

const router = createBrowserRouter(
  [
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
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HistoryProvider>
        <RouterProvider router={router} />
      </HistoryProvider>
    </ChakraProvider>
  );
}

export default App;

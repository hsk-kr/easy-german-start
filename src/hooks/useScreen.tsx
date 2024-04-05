import { useMediaQuery } from '@chakra-ui/react';

const useScreen = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1024px)', {
    ssr: true,
    fallback: false,
  });

  return {
    isDesktop,
  };
};

export default useScreen;

import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';
import '@fontsource/parisienne';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: `'Roboto', sans-serif, 'Parisienne'`,
      },
    }),
  },
});

export default theme;

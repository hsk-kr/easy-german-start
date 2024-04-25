import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: `'Roboto', sans-serif`,
      },
    }),
  },
});

export default theme;

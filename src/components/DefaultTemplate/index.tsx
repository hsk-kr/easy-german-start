import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';

interface DefaultTemplateProps {
  children?: ReactNode;
  disablePadding?: boolean;
  bgGreen?: boolean;
}

function DefaultTemplate({
  children,
  disablePadding = false,
  bgGreen = false,
}: DefaultTemplateProps) {
  const boxProps = disablePadding ? { pt: 16 } : { px: 4, pb: 12, pt: 28 };

  return (
    <Box bg={bgGreen ? 'green.500' : ''}>
      <Header />
      <Box {...boxProps}>{children}</Box>
      <Footer />
    </Box>
  );
}

export default DefaultTemplate;

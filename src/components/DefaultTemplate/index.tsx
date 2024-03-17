import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';

interface DefaultTemplateProps {
  children?: ReactNode;
  disablePadding?: boolean;
}

function DefaultTemplate({
  children,
  disablePadding = false,
}: DefaultTemplateProps) {
  const boxProps = disablePadding ? { pt: 16 } : { px: 4, pb: 12, pt: 28 };

  return (
    <Box>
      <Header />
      <Box {...boxProps}>{children}</Box>
      <Footer />
    </Box>
  );
}

export default DefaultTemplate;

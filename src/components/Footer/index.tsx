import { Box, Container, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box w="100%" color="white" bgColor="blackAlpha.600" fontSize="small">
      <Container p={2} maxW="container.lg">
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{
            base: 'column',
            lg: 'row',
          }}
          columnGap={4}
          justifyContent={{
            base: 'center',
            lg: 'space-between',
          }}
        >
          <Text align="center">
            Easy Start German - Unsure Where To Begin? Simply Solve Quizzes!
          </Text>
          <Link to="https://github.com/hsk-kr" target="_blank">
            <Box display="flex" alignItems="center" columnGap={2}>
              <FaGithub />
              <Text>hsk-kr • hsk.coder@gmail.com</Text>
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

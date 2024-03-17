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
          columnGap={4}
          justifyContent="space-between"
        >
          <Text>
            Easy Start German - Just Follow Instructions and Get Confident!
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

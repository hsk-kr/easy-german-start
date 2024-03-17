import { Box, Container, Avatar, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <Box w="100%" color="white" bgColor="green.500" position="fixed" zIndex={1}>
      <Container p={4} maxW="container.lg">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" columnGap={12} alignItems="center">
            <Link to="/">
              <Text fontWeight="bold" cursor="pointer">
                Easy Start German
              </Text>
            </Link>
            <Navbar />
          </Box>
          <Link to="/profile">
            <Avatar
              src="https://bit.ly/broken-link"
              size="sm"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                opacity: 0.8,
              }}
            />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;

import {
  Box,
  Container,
  Avatar,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import DesktopNavbar from '../DesktopNavbar';
import MobileMenuModal from '../MobileMenuModal';

function Header() {
  const mobileMenuModal = useDisclosure();

  return (
    <Box
      w="100%"
      color="white"
      bgColor="green.500"
      position="fixed"
      zIndex={1}
      h={16}
    >
      <Container
        p={4}
        maxW="container.lg"
        h="100%"
        display="flex"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Box display="flex" columnGap={12} alignItems="center">
            <Link to="/">
              <Text
                fontWeight="bold"
                cursor="pointer"
                p={1}
                transition="all 0.25s"
                borderRadius={4}
                _hover={{
                  textShadow: '0 0 10px #03bcf4, 0 0 20px #04bcf4',
                }}
              >
                Easy Start German
              </Text>
            </Link>
            <DesktopNavbar />
          </Box>
          <Link to="/profile">
            <Avatar
              display={{
                base: 'none',
                md: 'flex',
              }}
              src="https://bit.ly/broken-link"
              size="sm"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                opacity: 0.8,
              }}
            />
          </Link>
          <IconButton
            display={{
              base: 'none',
              sm: 'flex',
              md: 'none',
            }}
            aria-label="mobile-menu"
            bgColor="green.500"
            colorScheme="green"
            color="white"
            fontSize={24}
            icon={<FaBars />}
            onClick={mobileMenuModal.onOpen}
          />
        </Box>
      </Container>
      <MobileMenuModal
        visible={mobileMenuModal.isOpen}
        onClose={mobileMenuModal.onClose}
      />
    </Box>
  );
}

export default Header;

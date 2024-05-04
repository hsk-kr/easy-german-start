import {
  Box,
  Container,
  Avatar,
  Text,
  IconButton,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import DesktopNavbar from '../DesktopNavbar';
import MobileMenuModal from '../MobileMenuModal';
import StreakBadge from '../StreakBadge';
import useHistory from '../../hooks/useHistory';

function Header() {
  const mobileMenuModal = useDisclosure();
  const { streak } = useHistory();

  return (
    <Box
      w="100%"
      color="white"
      bgColor="green.500"
      position="fixed"
      zIndex={5}
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
                Easy German Start
              </Text>
            </Link>
            <DesktopNavbar />
          </Box>
          <Flex
            columnGap={2}
            display={{
              base: 'none',
              md: 'flex',
            }}
          >
            <StreakBadge number={streak.cnt} doneToday={streak.doneToday} />
            <Link to="/profile">
              <Avatar
                size="sm"
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  opacity: 0.8,
                }}
              />
            </Link>
          </Flex>
          <IconButton
            display={{
              base: 'flex',
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

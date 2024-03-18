import { Avatar, Box, Divider, Text, VStack } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MouseEvent, useEffect } from 'react';

interface MobileMenuModalProps {
  visible?: boolean;
  onClose?: VoidFunction;
}

function MobileMenuModal({ visible, onClose }: MobileMenuModalProps) {
  const location = useLocation();

  const handleClose = (e: MouseEvent) => {
    e.preventDefault();
    onClose?.();
  };

  useEffect(() => {
    onClose?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    visible && (
      <Box
        zIndex={2}
        position="fixed"
        top={0}
        bottom={0}
        left={0}
        right={0}
        bgColor="green.500"
      >
        <CloseIcon
          position="absolute"
          w={5}
          h={5}
          top={5}
          right={5}
          onClick={handleClose}
          cursor="pointer"
        />
        <Profile />
        <Divider />
        <Navbar />
      </Box>
    )
  );
}

function Profile() {
  return (
    <Link to="/profile">
      <Box p={4} display="flex" alignItems="center" columnGap={4}>
        <Avatar
          src="https://bit.ly/broken-link"
          size="sm"
          cursor="pointer"
          transition="all 0.2s"
          _hover={{
            opacity: 0.8,
          }}
        />
        <Text>Hello there!</Text>
      </Box>
    </Link>
  );
}

function Navbar() {
  return (
    <VStack divider={<Divider style={{ margin: 0 }} />}>
      <NavLink
        to="/learn"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : '',
          padding: 16,
          textAlign: 'center',
          width: '100%',
        })}
      >
        <Text fontSize="large">Learn</Text>
      </NavLink>
    </VStack>
  );
}

export default MobileMenuModal;

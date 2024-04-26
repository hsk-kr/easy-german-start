import { Avatar, Box, Divider, Text, VStack, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MouseEvent, useEffect } from 'react';
import StreakBadge from '../StreakBadge';
import useHistory from '../../hooks/useHistory';

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
    <Box
      zIndex={2}
      position="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      maxH={visible ? '100%' : '0'}
      transition="all 0.1s"
      overflow="hidden"
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
  );
}

function Profile() {
  const { streak } = useHistory();

  return (
    <Flex p={4} alignItems="center" columnGap={4}>
      <Link to="/profile">
        <Flex columnGap={2}>
          <Avatar
            src="https://bit.ly/broken-link"
            size="sm"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{
              opacity: 0.8,
            }}
          />
          {streak !== undefined && (
            <StreakBadge number={streak.cnt} doneToday={streak.doneToday} />
          )}
        </Flex>
      </Link>
    </Flex>
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

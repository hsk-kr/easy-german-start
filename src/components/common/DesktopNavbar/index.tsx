import { HStack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export function DesktopNavbar() {
  return (
    <HStack spacing="24px" display={['none', 'none', 'block']}>
      <NavLink
        to="/learn"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : '',
        })}
      >
        <Text>Learn</Text>
      </NavLink>
    </HStack>
  );
}

export default DesktopNavbar;

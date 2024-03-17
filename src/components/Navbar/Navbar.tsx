import { HStack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <HStack spacing="24px">
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

export default Navbar;

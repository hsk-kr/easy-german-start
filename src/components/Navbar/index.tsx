import { HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <HStack spacing="24px">
      <Link to="/learn">
        <Text fontSize="large">Learn</Text>
      </Link>
    </HStack>
  );
}

export default Navbar;

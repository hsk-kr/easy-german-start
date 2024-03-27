import { Flex, Text } from '@chakra-ui/react';
import { BsFire } from 'react-icons/bs';

interface StreakBadgeProps {
  number: number;
}

const StreakBadge = ({ number }: StreakBadgeProps) => {
  return (
    <Flex>
      <BsFire />
      <Text fontSize="small" fontWeight="bold">
        {number}
      </Text>
    </Flex>
  );
};

export default StreakBadge;

import { Flex, Text, Tooltip } from '@chakra-ui/react';
import { BsFire } from 'react-icons/bs';

interface StreakBadgeProps {
  number: number;
}

const StreakBadge = ({ number }: StreakBadgeProps) => {
  return (
    <Tooltip label="UTC based">
      <Flex>
        <BsFire />
        <Text fontSize="small" fontWeight="bold">
          {number}
        </Text>
      </Flex>
    </Tooltip>
  );
};

export default StreakBadge;

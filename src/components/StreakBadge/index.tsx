import { Flex, Text, Tooltip } from '@chakra-ui/react';
import { BsFire } from 'react-icons/bs';

interface StreakBadgeProps {
  number: number;
  doneToday: boolean;
}

const StreakBadge = ({ number, doneToday }: StreakBadgeProps) => {
  return (
    <Tooltip label="UTC based">
      <Flex>
        <BsFire color={doneToday ? 'orange' : 'white'} />
        <Text fontSize="small" fontWeight="bold">
          {number}
        </Text>
      </Flex>
    </Tooltip>
  );
};

export default StreakBadge;

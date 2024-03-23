import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
/**
 * what needs to be shown in this list
 *
 * columns
 *
 *
 */

interface ActivityProps {
  no: number;
  title: string;
  desc: string;
  date: dayjs.Dayjs;
}

const RecentActivities = () => {
  const sampleData = [
    {
      no: 5,
      title: 'German 25 words',
      desc: 'German 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 words',
      date: dayjs.utc().subtract(1, 'day'),
    },
    {
      no: 4,
      title: 'German 25 words',
      desc: 'German 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 words',
      date: dayjs.utc().subtract(2, 'day'),
    },
    {
      no: 3,
      title: 'German 25 words',
      desc: 'German 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 words',
      date: dayjs.utc().subtract(3, 'day'),
    },
    {
      no: 2,
      title: 'German 25 words',
      desc: 'German 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 words',
      date: dayjs.utc().subtract(4, 'day'),
    },
    {
      no: 1,
      title: 'German 25 words',
      desc: 'German 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 wordsGerman 25 words',
      date: dayjs.utc().subtract(5, 'day'),
    },
  ];

  return (
    <Box bgColor="green.500" p={4} borderRadius={4} color="white">
      <Text
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="x-large"
        textAlign="center"
      >
        Recent Activities
      </Text>
      <Divider my={4} />
      {sampleData.map((d) => (
        <Activity key={d.no} {...d} />
      ))}
      <Flex justifyContent="center" alignItems="center">
        <Button
          colorScheme="white"
          variant="outline"
          transition="all 0.2s"
          _hover={{
            transform: 'scale(1.05)',
          }}
        >
          MORE
        </Button>
      </Flex>
    </Box>
  );
};

const Activity = ({ no, title, desc, date }: ActivityProps) => {
  const now = dayjs.utc();
  const dateText =
    date <= now.subtract(2, 'day') ? date.format('YYYY-MM-DD') : date.fromNow();

  return (
    <Flex
      bgColor="green.400"
      p={4}
      mb={4}
      borderRadius={8}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      transition="all 0.25s"
      _hover={{
        backgroundColor: 'white',
        color: 'green',
      }}
    >
      <Flex flexDirection="column" justifyContent="center">
        <Text
          fontSize={['large', 'large', 'x-large']}
          fontWeight="bold"
          noOfLines={1}
        >{`${no}.${title}`}</Text>
        <Text
          pl={2}
          noOfLines={1}
          display={['none', 'none', 'block']}
          fontSize="small"
          fontWeight="bold"
          fontStyle="italic"
        >
          {desc}
        </Text>
      </Flex>
      <Text fontSize="small" fontWeight="bold" whiteSpace="nowrap">
        {dateText}
      </Text>
    </Flex>
  );
};
export default RecentActivities;

import { Box, Select, Text, Tooltip } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { ReactNode, useMemo } from 'react';

function ActivityChart() {
  return (
    <Box
      bgColor="green.500"
      color="white"
      overflowX="auto"
      p={4}
      borderRadius={4}
    >
      <ChartHeader />
      <ChartBody />
    </Box>
  );
}

const ChartHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      columnGap={40}
      overflowX="auto"
    >
      <Box display="flex" alignItems="center" whiteSpace="nowrap">
        <Text fontSize="large" fontWeight="bold" mr={1}>
          100
        </Text>
        <Text>quizzes solved in the past year</Text>
      </Box>
      <Box display="flex" alignItems="center" columnGap={2} whiteSpace="nowrap">
        <Text>
          Total activity days: <b>180</b>
        </Text>
        <Text>
          Max streak: <b>20</b>
        </Text>
        <Select
          bgColor="white"
          color="gray.500"
          textAlign="center"
          mr={4}
          w={32}
        >
          <option value="past year">past year</option>
          <option value="2023">2023</option>
        </Select>
      </Box>
    </Box>
  );
};

const ChartBody = () => {
  const activities = useMemo(() => {
    const now = dayjs.utc();
    const oneYearbefore = dayjs.utc().subtract(1, 'year');
    const monthlyActivities: ReactNode[] = [];
    let activities: ReactNode[] = [];
    let cur = oneYearbefore;
    const blockSize = 12; // px
    const gap = 4; // px

    while (cur < now) {
      const numOfActivities = Math.floor(Math.random() * 10);
      const blockColor = getColorFromNumOfActivities(numOfActivities);
      const label = `${numOfActivities} lessons on ${cur.format(
        `MMM MM, YYYY`
      )}`;

      activities.push(
        <Tooltip label={label}>
          <Box
            key={cur.toString()}
            bgColor={blockColor}
            w={`${blockSize}px`}
            h={`${blockSize}px`}
            borderRadius="sm"
          ></Box>
        </Tooltip>
      );

      const prevCur = cur;
      cur = cur.add(1, 'day');

      if (prevCur.get('month') !== cur.get('month') || cur >= now) {
        const NUM_OF_WEEK = 7;
        const width =
          Math.ceil(activities.length / NUM_OF_WEEK) * blockSize +
          Math.floor(activities.length / NUM_OF_WEEK) * gap;
        const height = NUM_OF_WEEK * blockSize + gap * (NUM_OF_WEEK - 1);

        monthlyActivities.push(
          <Box>
            <Text fontWeight="bold" fontSize="small" mb={1}>
              {prevCur.format('MMM')}
            </Text>
            <Box
              key={prevCur.toString()}
              display="flex"
              flexDir="column"
              flexWrap="wrap"
              gap={`${gap}px`}
              minW={`${width}px`}
              h={`${height}px`}
            >
              {activities}
            </Box>
          </Box>
        );

        activities = [];
      }
    }

    return monthlyActivities;
  }, []);

  return (
    <Box display="flex" columnGap={6} p={4} overflowX="auto">
      {activities}
    </Box>
  );
};

const getColorFromNumOfActivities = (n: number) => {
  if (n <= 0) {
    return 'gray.300';
  } else if (n <= 1) {
    return 'orange.600';
  } else if (n <= 3) {
    return 'orange.500';
  } else if (n <= 5) {
    return 'orange.400';
  } else if (n <= 8) {
    return 'orange.300';
  } else {
    return 'orange.200';
  }
};

export default ActivityChart;

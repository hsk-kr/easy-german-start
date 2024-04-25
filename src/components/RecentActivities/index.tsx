import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import useHistory from '../../hooks/useHistory';
import { useEffect, useMemo, useState } from 'react';
import FullscreenLoading from '../FullscreenLoading';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface ActivityProps {
  no: number;
  id: number;
  title: string;
  desc: string;
  date: dayjs.Dayjs;
}

const NUM_OF_HISTORIES_ONE_PAGE = 5;

const RecentActivities = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let num = Number(searchParams.get('num'));
  num =
    Number.isNaN(num) || num < NUM_OF_HISTORIES_ONE_PAGE
      ? NUM_OF_HISTORIES_ONE_PAGE
      : num;
  const [numHistories, setNumHistories] = useState(num);
  const { histories } = useHistory();
  const reversedActivities = useMemo(() => {
    if (histories === undefined) return null;

    return histories.toReversed();
  }, [histories]);
  const activities = useMemo(() => {
    if (reversedActivities === null) return null;

    return reversedActivities.slice(0, numHistories).map((h, hIndex) => ({
      no: reversedActivities.length - hIndex,
      id: reversedActivities.length - hIndex - 1,
      title: h.lessonTitle,
      desc: h.lessonDesc,
      date: dayjs.utc(h.completedDate),
    }));
  }, [reversedActivities, numHistories]);

  const more = () => {
    const nextNumHistories = numHistories + NUM_OF_HISTORIES_ONE_PAGE;
    setNumHistories(nextNumHistories);
  };

  useEffect(() => {
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('num', numHistories.toString());
      return prevSearchParams;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numHistories]);

  const loading = activities === null;
  const hasMore = histories !== undefined && numHistories < histories.length;

  return (
    <Box bgColor="green.500" p={4} borderRadius={4} color="white">
      <FullscreenLoading useRandomInitialLoadingTime visible={loading} />
      <Text
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="x-large"
        textAlign="center"
      >
        Recent Activities
      </Text>
      <Divider my={4} />
      {activities?.map((d) => <Activity key={d.no} {...d} />)}
      {hasMore && (
        <Flex justifyContent="center" alignItems="center">
          <Button
            colorScheme="white"
            variant="outline"
            transition="all 0.2s"
            _hover={{
              transform: 'scale(1.05)',
            }}
            onClick={more}
          >
            MORE
          </Button>
        </Flex>
      )}
    </Box>
  );
};

const Activity = ({ no, id, title, desc, date }: ActivityProps) => {
  const now = dayjs.utc();
  const dateText =
    date <= now.subtract(2, 'day') ? date.format('YYYY-MM-DD') : date.fromNow();
  const navigate = useNavigate();
  const rediredctToCompletionPage = () => navigate(`/completion?id=${id}`);

  return (
    <Flex
      bgColor="green.400"
      p={4}
      mb={4}
      borderRadius={8}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      cursor="pointer"
      transition="all 0.25s"
      _hover={{
        backgroundColor: 'white',
        color: 'green',
      }}
      onClick={rediredctToCompletionPage}
    >
      <Flex flexDirection="column" justifyContent="center">
        <Text
          fontSize={['large', 'large', 'x-large']}
          fontWeight="bold"
          noOfLines={1}
        >{`${no}) ${title}`}</Text>
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

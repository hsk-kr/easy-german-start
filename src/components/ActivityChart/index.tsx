import { Box, Flex, Select, Text, Tooltip } from '@chakra-ui/react';
import dayjs, { Dayjs } from 'dayjs';
import { ChangeEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import { History } from '../../types/history';

const PAST_YEAR = 'past year' as const;

const historyActivityMapKeyFormat = 'YYYY.MM.DD';

type Year = typeof PAST_YEAR | number;

interface ActivityChartProps {
  histories: History[];
  onLoad?: VoidFunction;
}

interface ChartHeaderProps {
  numOfLessonsPerYear?: Map<Year, number>;
  totalActivityDays?: number;
  maxStreak?: number;
  onYearSelect?: (year: typeof PAST_YEAR | number) => void;
  year?: Year;
}

interface ChartBodyProps {
  // Key format: YYYY.MM.DD
  values?: Map<string, number>;
  year?: Year;
}

function ActivityChart({ histories, onLoad }: ActivityChartProps) {
  const [maxStreakPerYear, setMaxStreakPerYear] = useState<Map<Year, number>>(
    new Map()
  );
  const [totalActivityDaysPerYear, setTotalActivityDaysPerYear] = useState<
    Map<Year, number>
  >(new Map());
  const [numOfLessonsPerYear, setNumOfLessonsPerYear] = useState<
    ChartHeaderProps['numOfLessonsPerYear']
  >(new Map());
  const [numOfLessonsPerDay, setNumOfLessonsPerDay] = useState<
    ChartBodyProps['values']
  >(new Map());
  const [currentYear, setCurrentYear] = useState<Year>('past year');
  const [loading, setLoading] = useState(true);

  //! Needs to refactor
  useEffect(() => {
    if (histories === undefined) return;

    const maxStreakPerYear: Map<Year, number> = new Map();
    const totalActivityDaysPerYear: Map<Year, number> = new Map();
    const numOfLessonsPerYear: Map<Year, number> = new Map([
      [PAST_YEAR as Year, 0],
    ]);
    const numOfLessonsPerDayMap: Map<string, number> = new Map();
    const historyActivityMap: ChartBodyProps['values'] = new Map();
    const currentStreak: typeof maxStreakPerYear = new Map();
    let previousHistory: Dayjs | undefined = undefined;

    const calcMaxStreakForPreviousYear = (
      previousYear: Year,
      currentYear: Year
    ) => {
      const previousYearMaxStreak = maxStreakPerYear.get(previousYear) ?? 0;
      const previousYearStreak = currentStreak.get(previousYear) ?? 0;
      if (previousYearStreak > previousYearMaxStreak) {
        maxStreakPerYear.set(previousYear, previousYearStreak);
        currentStreak.set(currentYear, 1);
      }
    };

    const isWithinPastYear = (date: Dayjs) => {
      const pastYear = dayjs.utc().subtract(1, 'year').hour(0);
      return pastYear <= date.hour(23);
    };

    for (const history of histories) {
      // To calculate the exact different day using diff func.
      const completedDateAsDayjs = dayjs
        .utc(history.completedDate.replace(/\./g, '-'))
        .set('hour', 0)
        .set('minute', 0)
        .set('second', 0)
        .set('millisecond', 0);
      const historyActivityMapKey = completedDateAsDayjs.format(
        historyActivityMapKeyFormat
      );
      const currentYear = completedDateAsDayjs.get('year');

      // count on a specific date
      const activityCnt = historyActivityMap.get(historyActivityMapKey);
      historyActivityMap.set(historyActivityMapKey, (activityCnt ?? 0) + 1);

      if (previousHistory !== undefined) {
        const previousYear = previousHistory.year();
        // maxStreak. It assumes the data is sorted in ascending order of date.
        const dateDiff = Math.abs(
          completedDateAsDayjs.diff(previousHistory, 'day')
        );

        if (dateDiff >= 1 && dateDiff < 2) {
          // max streak for PAST_YEAR
          const w = isWithinPastYear(completedDateAsDayjs) ? 1 : 0;
          const pastYearStreak = (currentStreak.get(PAST_YEAR) ?? 0) + w;
          const pastYearMaxStreak = maxStreakPerYear.get(PAST_YEAR) ?? 0;
          currentStreak.set(PAST_YEAR, pastYearStreak);
          if (pastYearStreak > pastYearMaxStreak) {
            maxStreakPerYear.set(PAST_YEAR, pastYearStreak);
          }

          // When the two days have different years,
          // the previous year needs to be done by comparing the maximum number for the last.
          if (currentYear !== previousYear) {
            calcMaxStreakForPreviousYear(previousYear, currentYear);
          } else {
            const currentYearMaxStreak = maxStreakPerYear.get(currentYear) ?? 0;
            const currentYearStreak = (currentStreak.get(currentYear) ?? 0) + 1;

            currentStreak.set(currentYear, currentYearStreak);
            if (currentYearStreak > currentYearMaxStreak) {
              maxStreakPerYear.set(currentYear, currentYearStreak);
            }
          }
        } else if (dateDiff >= 2) {
          currentStreak.set(PAST_YEAR, 1);
          currentStreak.set(currentYear, 1);

          if (currentYear !== previousYear) {
            calcMaxStreakForPreviousYear(previousYear, currentYear);
          }
        }

        // totalActivityDays
        if (dateDiff >= 1) {
          if (isWithinPastYear(completedDateAsDayjs)) {
            totalActivityDaysPerYear.set(
              PAST_YEAR,
              (totalActivityDaysPerYear.get(PAST_YEAR) ?? 0) + 1
            );
          }
          totalActivityDaysPerYear.set(
            currentYear,
            (totalActivityDaysPerYear.get(currentYear) ?? 0) + 1
          );
        }
      } else {
        if (isWithinPastYear(completedDateAsDayjs)) {
          currentStreak.set(PAST_YEAR, 1);
          totalActivityDaysPerYear.set(PAST_YEAR, 1);
        }
        currentStreak.set(currentYear, 1);
        totalActivityDaysPerYear.set(currentYear, 1);
      }

      // count per year
      if (isWithinPastYear(completedDateAsDayjs)) {
        numOfLessonsPerYear.set(
          PAST_YEAR,
          (numOfLessonsPerYear.get(PAST_YEAR) ?? 0) + 1
        );
      }
      numOfLessonsPerYear.set(
        currentYear,
        (numOfLessonsPerYear.get(currentYear) ?? 0) + 1
      );

      // numOfLessonsPerDay
      numOfLessonsPerDayMap.set(
        historyActivityMapKey,
        (numOfLessonsPerDayMap.get(historyActivityMapKey) ?? 0) + 1
      );

      previousHistory = completedDateAsDayjs;
    }

    setMaxStreakPerYear(maxStreakPerYear);
    setTotalActivityDaysPerYear(totalActivityDaysPerYear);
    setNumOfLessonsPerYear(numOfLessonsPerYear);
    setNumOfLessonsPerDay(numOfLessonsPerDayMap);
    setLoading(false);
  }, [histories]);

  useEffect(() => {
    if (loading) return;

    onLoad?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const maxStreak = maxStreakPerYear.get(currentYear) ?? 0;
  const totalActivityDays = totalActivityDaysPerYear.get(currentYear) ?? 0;

  return (
    <Box
      bgColor="green.500"
      color="white"
      overflowX="auto"
      p={4}
      borderRadius={4}
    >
      {!loading && (
        <>
          <ChartHeader
            maxStreak={maxStreak}
            numOfLessonsPerYear={numOfLessonsPerYear}
            onYearSelect={setCurrentYear}
            totalActivityDays={totalActivityDays}
            year={currentYear}
          />
          <ChartBody values={numOfLessonsPerDay} year={currentYear} />
        </>
      )}
    </Box>
  );
}

const ChartHeader = ({
  maxStreak,
  numOfLessonsPerYear,
  totalActivityDays,
  onYearSelect,
  year,
}: ChartHeaderProps) => {
  const options = useMemo(() => {
    if (numOfLessonsPerYear === undefined) return;
    return [...numOfLessonsPerYear.keys()].map((value) => ({
      value,
    }));
  }, [numOfLessonsPerYear]);
  const numOfLessonOfSelectedYear =
    year === undefined ? 0 : numOfLessonsPerYear?.get(year) ?? 0;

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onYearSelect?.(
      e.target.value === PAST_YEAR ? PAST_YEAR : Number(e.target.value)
    );
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      columnGap={40}
      overflowX="auto"
      textTransform="uppercase"
    >
      <Flex alignItems="center" whiteSpace="nowrap">
        <Text fontSize="large" fontWeight="bold" mr={1}>
          {numOfLessonOfSelectedYear}
        </Text>
        <Text>lessons in the past year</Text>
      </Flex>
      <Flex alignItems="center" columnGap={2} whiteSpace="nowrap">
        <Text>
          Total activity days:{' '}
          <b data-testid="total-activity-days">{totalActivityDays}</b>
        </Text>
        <Text>
          Max streak: <b data-testid="max-streak">{maxStreak}</b>
        </Text>
        <Select
          bgColor="white"
          color="gray.500"
          textAlign="center"
          mr={4}
          w={32}
          value={year}
          onChange={handleYearChange}
          data-testid="year"
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};

const ChartBody = ({
  values = new Map(),
  year = PAST_YEAR,
}: ChartBodyProps) => {
  const activities = useMemo(() => {
    const startYear =
      year === 'past year'
        ? dayjs.utc().subtract(1, 'year').hour(0)
        : dayjs.utc().year(year).month(0).date(1).hour(0);
    const endYear =
      year === 'past year'
        ? dayjs.utc().hour(23)
        : dayjs.utc().year(year).month(11).endOf('month').hour(23);
    const monthlyActivities: ReactNode[] = [];
    let activities: ReactNode[] = [];
    let cur = startYear;
    const blockSize = 12; // px
    const gap = 4; // px

    while (cur <= endYear) {
      let numOfActivities = Number(
        values.get(cur.format(historyActivityMapKeyFormat))
      );
      numOfActivities =
        Number.isNaN(numOfActivities) || numOfActivities === undefined
          ? 0
          : numOfActivities;
      const blockColor = getColorFromNumOfActivities(numOfActivities);
      const label = `${numOfActivities} Lessons on ${cur.format(historyActivityMapKeyFormat)}`;

      activities.push(
        <Tooltip label={label} key={cur.toString()}>
          <Box
            bgColor={blockColor}
            w={`${blockSize}px`}
            h={`${blockSize}px`}
            borderRadius="sm"
          ></Box>
        </Tooltip>
      );

      const prevCur = cur;
      cur = cur.add(1, 'day');

      if (prevCur.get('month') !== cur.get('month') || cur > endYear) {
        const NUM_OF_WEEK = 7;
        const width =
          Math.ceil(activities.length / NUM_OF_WEEK) * blockSize +
          Math.floor(activities.length / NUM_OF_WEEK) * gap;
        const height = NUM_OF_WEEK * blockSize + gap * (NUM_OF_WEEK - 1);

        monthlyActivities.push(
          <Box key={cur.toString()}>
            <Text fontWeight="bold" fontSize="small" mb={1}>
              {prevCur.format('MMM')}
            </Text>
            <Flex
              key={prevCur.toString()}
              flexDir="column"
              flexWrap="wrap"
              gap={`${gap}px`}
              minW={`${width}px`}
              h={`${height}px`}
            >
              {activities}
            </Flex>
          </Box>
        );

        activities = [];
      }
    }

    return monthlyActivities;
  }, [values, year]);

  return (
    <Flex columnGap={6} p={4} overflowX="auto">
      {activities}
    </Flex>
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

import { Dayjs } from 'dayjs';
import { History } from '../types/history';

export const generateHistoryWithDummy = (
  completedDate: string | Dayjs
): History => ({
  sectionIndex: 0,
  lessonIndex: 0,
  lessonTitle: 'lessonTitle',
  lessonDesc: 'lessonDesc',
  completedDate:
    typeof completedDate === 'string'
      ? completedDate
      : completedDate.format('YYYY.MM.DD'),
});

export const generateHistoriesBetweenDates = (
  startDate: Dayjs,
  endDate: Dayjs
): History[] => {
  let cur = startDate.hour(1);
  const endDateWithTime = endDate.hour(23);
  const histories: History[] = [];

  while (cur <= endDateWithTime) {
    histories.push(generateHistoryWithDummy(cur));
    cur = cur.add(1, 'day');
  }

  return histories;
};

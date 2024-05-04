import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(utc);
dayjs.extend(relativeTime);

export const convertDateFromString = (dateStr: string) => {
  return dayjs.utc(dateStr.replace(/\./g, '-'));
};

import { test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ActivityChart from '.';
import { History } from '../../types/history';
import dayjs, { Dayjs } from 'dayjs';

const generateHistoryWithDummy = (completedDate: string | Dayjs): History => ({
  sectionIndex: 0,
  lessonIndex: 0,
  lessonTitle: 'lessonTitle',
  lessonDesc: 'lessonDesc',
  completedDate:
    typeof completedDate === 'string'
      ? completedDate
      : completedDate.format('YYYY.MM.DD'),
});

const generateHistoriesBetweenDates = (
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

const getElements = async () => {
  const totalActivityDays = await screen.findByTestId('total-activity-days');
  const maxStreak = await screen.findByTestId('max-streak');
  const year = await screen.findByTestId('year');

  return {
    totalActivityDays,
    maxStreak,
    year,
  };
};

test('With empty historires', async () => {
  render(<ActivityChart histories={[]} />);
  const { maxStreak, totalActivityDays, year } = await getElements();

  expect(maxStreak.textContent).toBe('0');
  expect(totalActivityDays.textContent).toBe('0');
  expect(year.textContent).toBe('past year');
});

test('Past Year MaxStreak and year', async () => {
  const now = dayjs.utc();
  const historires: History[] = [];

  let startDate = now.subtract(3, 'month');
  historires.push(
    ...generateHistoriesBetweenDates(startDate, startDate.add(30, 'day'))
  );

  startDate = now.subtract(8, 'month');
  historires.push(
    ...generateHistoriesBetweenDates(startDate, startDate.add(60, 'day'))
  );

  historires.push(generateHistoryWithDummy(now.format('YYYY.MM.DD')));

  render(<ActivityChart histories={historires} />);
  const { maxStreak, totalActivityDays, year } = await getElements();

  expect(maxStreak.textContent).toBe('61');
  expect(totalActivityDays.textContent).toBe('93');
  expect(year.querySelector('option')?.textContent).toBe('past year');
});

import { test, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ActivityChart from '.';
import { History } from '../../../types/history';
import dayjs, { Dayjs } from 'dayjs';
import {
  generateHistoriesBetweenDates,
  generateHistoryWithDummy,
} from '../../../libs/test-utils';

const getElements = async () => {
  const totalActivityDays = await screen.findByTestId('total-activity-days');
  const maxStreak = await screen.findByTestId('max-streak');
  const year = await screen.findByTestId<HTMLSelectElement>('year');

  return {
    totalActivityDays,
    maxStreak,
    year,
  };
};

describe('ActivityChart max streak, total axtivity days, year ', () => {
  test('With empty historires', async () => {
    render(<ActivityChart histories={[]} />);
    const { maxStreak, totalActivityDays, year } = await getElements();

    expect(maxStreak.textContent).toBe('0');
    expect(totalActivityDays.textContent).toBe('0');
    expect(year.textContent).toBe('past year');
  });

  test('Year select options', async () => {
    const histories = [
      generateHistoryWithDummy('2023.01.01'),
      generateHistoryWithDummy('2024.01.01'),
      generateHistoryWithDummy('2025.01.01'),
    ];

    render(<ActivityChart histories={histories} />);

    const { year } = await getElements();

    const options = year.querySelectorAll<HTMLOptionElement>('option');
    expect(options).toHaveLength(4);
    expect(options[0]?.textContent).toBe('past year');
    expect(options[1]?.textContent).toBe('2023');
    expect(options[2]?.textContent).toBe('2024');
    expect(options[3]?.textContent).toBe('2025');
  });

  test('Past year', async () => {
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

    // it should be ignored.
    startDate = now.subtract(16, 'month');
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

  test('each year', async () => {
    const y2023 = dayjs.utc().year(2023).month(0).date(1);
    const y2024 = dayjs.utc().year(2024).month(0).date(1);
    const historires: History[] = [];

    const addHistories = (date: Dayjs) => {
      let d = date;

      historires.push(...generateHistoriesBetweenDates(d, d.add(30, 'day')));

      d = date.month(3);
      historires.push(...generateHistoriesBetweenDates(d, d.add(60, 'day')));

      if (d.year() === 2024) {
        d = date.month(8);
        historires.push(...generateHistoriesBetweenDates(d, d.add(70, 'day')));
      }
    };

    addHistories(y2023);
    addHistories(y2024);

    render(<ActivityChart histories={historires} />);
    const { maxStreak, totalActivityDays, year } = await getElements();

    fireEvent.change(year, { target: { value: '2023' } });
    expect(year.value === '2023');
    expect(maxStreak.textContent).toBe('61');
    expect(totalActivityDays.textContent).toBe('92');

    fireEvent.change(year, { target: { value: '2024' } });
    expect(year.value === '2024');
    expect(maxStreak.textContent).toBe('71');
    expect(totalActivityDays.textContent).toBe('163');
  });
});

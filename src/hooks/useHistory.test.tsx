import { beforeEach, describe, expect, test } from 'vitest';
import useHistory, { HistoryProvider } from './useHistory';
import { act, renderHook, waitFor } from '@testing-library/react';
import {
  generateHistoriesBetweenDates,
  generateHistoryWithDummy,
} from '../libs/test-utils';
import dayjs from 'dayjs';

describe('useHistory', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const mockUseHistory = () => {
    const { result } = renderHook(() => useHistory(), {
      wrapper: HistoryProvider,
    });

    return result;
  };

  test('today should be done', async () => {
    const result = mockUseHistory();

    expect(result.current.streak.cnt).toBe(0);
    expect(result.current.streak.doneToday).toBe(false);

    act(() => {
      result.current.addHistory(generateHistoryWithDummy(dayjs.utc()));
    });

    expect(result.current.streak.cnt).toBe(1);
    expect(result.current.streak.doneToday).toBe(true);
  });

  test('streak cnt should include the tasks has done until yesterday', async () => {
    const result = mockUseHistory();

    expect(result.current.streak.cnt).toBe(0);
    expect(result.current.streak.doneToday).toBe(false);

    const today = dayjs.utc();
    act(() => {
      result.current.setHistories(
        generateHistoriesBetweenDates(
          today.subtract(30, 'day'),
          today.subtract(1, 'day')
        )
      );
    });

    expect(result.current.streak.cnt).toBe(30);
    expect(result.current.streak.doneToday).toBe(false);
  });

  test('streak cnt should include the tasks has done until yesterday and today', async () => {
    const result = mockUseHistory();

    expect(result.current.streak.cnt).toBe(0);
    expect(result.current.streak.doneToday).toBe(false);

    const today = dayjs.utc();
    act(() => {
      result.current.setHistories(
        generateHistoriesBetweenDates(today.subtract(30, 'day'), today)
      );
    });

    expect(result.current.streak.cnt).toBe(31);
    expect(result.current.streak.doneToday).toBe(true);
  });

  test('streak should not include histories seperated from the recent historiees', async () => {
    const result = mockUseHistory();

    expect(result.current.streak.cnt).toBe(0);
    expect(result.current.streak.doneToday).toBe(false);

    const today = dayjs.utc();
    act(() => {
      result.current.setHistories([
        ...generateHistoriesBetweenDates(
          today.subtract(60, 'day'),
          today.subtract(32, 'day')
        ),
        ...generateHistoriesBetweenDates(today.subtract(30, 'day'), today),
      ]);
    });

    expect(result.current.streak.cnt).toBe(31);
    expect(result.current.streak.doneToday).toBe(true);
  });
});

import { History } from '../types/history';

const getObjectFromStorage = <T>(key: string): T | null => {
  try {
    const data = JSON.parse(localStorage.getItem(key) || 'null');
    return data as T;
  } catch {
    return null;
  }
};

const setObjectIntoStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const storageKeys = {
  history: 'HISTORY',
};

export const getHistories = () =>
  getObjectFromStorage<History[]>(storageKeys.history) ?? [];

export const setHistories = (histories: History[]) =>
  setObjectIntoStorage(storageKeys.history, histories);

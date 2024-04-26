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

/**
 * returns histories stored in local stroage. It converts the string to the History[]
 * @returns histories stored in local storage
 */
export const getHistories = () =>
  getObjectFromStorage<History[]>(storageKeys.history) ?? [];

/**
 * change the histories stored from local storage
 * @param histories histories to save
 * @returns void
 */
export const setHistories = (histories: History[]) =>
  setObjectIntoStorage(storageKeys.history, histories);

/**
 * Clear the histories stored in the local stroage
 */
export const clearHistories = () => {
  localStorage.removeItem(storageKeys.history);
};

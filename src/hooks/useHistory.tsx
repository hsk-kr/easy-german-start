import { useEffect, useState } from 'react';
import { getHistories, setHistories, storageKeys } from '../libs/store';
import { History } from '../types/history';

const useHistory = () => {
  const [h, setH] = useState<History[]>([]);

  const addHistory = (history: History) => {
    const histories = getHistories();

    setHistories(histories.concat(history));
  };

  useEffect(() => {
    const updateH = () => setH(getHistories());

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === storageKeys.history) {
        updateH();
      }
    };

    addEventListener('storage', handleStorageChange);
    updateH();

    return () => removeEventListener('storage', handleStorageChange);
  }, []);

  return {
    histories: h,
    addHistory,
  };
};

export default useHistory;

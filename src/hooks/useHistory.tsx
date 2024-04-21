import { useEffect, useState } from 'react';
import { getHistories, setHistories, storageKeys } from '../libs/store';
import { History } from '../types/history';
import useLessons from './useLessons';

const useHistory = () => {
  const [h, setH] = useState<History[]>();
  const [historyMap, setHistoryMap] = useState<Map<string, boolean>>(); // Mark completed lessons
  const [sectionProgressMap, setSectionProressMap] = useState<
    Map<number, number>
  >(() => new Map()); // sectionIdx, progressValue(0~100)
  const { sections } = useLessons();
  const loading = h === undefined || historyMap === undefined;

  const addHistory = (history: History) => {
    const histories = getHistories();

    setHistories(histories.concat(history));
  };

  useEffect(() => {
    if (!h) return;
    const newHistoryMap: typeof historyMap = new Map();
    const newSectionProgressMap: typeof sectionProgressMap = new Map();

    for (let i = 0; i < sections.length; i++) {
      newSectionProgressMap.set(i, 0);
    }

    for (const history of h) {
      if (
        newHistoryMap.has(
          generateHistoryMapKey(history.sectionIndex, history.lessonIndex)
        )
      ) {
        continue;
      }

      const prevProgressValue = newSectionProgressMap.get(history.sectionIndex);
      if (prevProgressValue !== undefined) {
        newSectionProgressMap.set(history.sectionIndex, prevProgressValue + 1); // It counts here and it will be transform into a percentage later
      }

      newHistoryMap.set(
        generateHistoryMapKey(history.sectionIndex, history.lessonIndex),
        true
      );
    }

    // tranform counts into percentages
    for (const [k, count] of newSectionProgressMap) {
      const percentage = Math.ceil((count / sections[k].lessons.length) * 100);
      newSectionProgressMap.set(k, percentage);
    }

    setSectionProressMap(newSectionProgressMap);
    setHistoryMap(newHistoryMap);
  }, [h, sections]);

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
    loading,
    histories: h,
    addHistory,
    historyMap,
    sectionProgressMap,
  };
};

export const generateHistoryMapKey = (section: number, lesson: number) =>
  `${section},${lesson}`;

export default useHistory;

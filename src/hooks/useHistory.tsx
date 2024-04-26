// React Context
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getHistories,
  setHistories,
  storageKeys,
  clearHistories,
} from '../libs/store';
import { History } from '../types/history';
import useLessons from './useLessons';

interface HistoryContextType {
  loading: boolean;
  histories: History[] | undefined;
  addHistory: (history: History) => void;
  historyMap: Map<string, boolean> | undefined;
  sectionProgressMap: Map<number, number>;
  setHistories: typeof setHistories;
  getHistories: typeof getHistories;
  clearHistories: typeof clearHistories;
}

const HistoryContext = createContext<HistoryContextType>(null!);

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [h, setH] = useState<History[]>();
  const [historyMap, setHistoryMap] = useState<Map<string, boolean>>(); // Mark completed lessons
  const [sectionProgressMap, setSectionProressMap] = useState<
    Map<number, number>
  >(() => new Map()); // sectionIdx, progressValue(0~100)
  const { sections } = useLessons();
  const loading = h === undefined || historyMap === undefined;

  const addHistory = useCallback((history: History) => {
    const newHistories = getHistories().concat(history);
    setH(newHistories);
    setHistories(newHistories);
  }, []);

  const setHistoriesAndH = useCallback((histories: History[]) => {
    setH(histories);
    setHistories(histories);
  }, []);

  const clearHistoriesAndH = useCallback(() => {
    clearHistories();
    setH([]);
  }, []);

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

  const value = {
    loading,
    histories: h,
    addHistory,
    historyMap,
    sectionProgressMap,
    getHistories,
    setHistories: setHistoriesAndH,
    clearHistories: clearHistoriesAndH,
  };

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

// eslint-disable-next-line react-refresh/only-export-components
export const generateHistoryMapKey = (section: number, lesson: number) =>
  `${section},${lesson}`;

// eslint-disable-next-line react-refresh/only-export-components
export default useHistory;

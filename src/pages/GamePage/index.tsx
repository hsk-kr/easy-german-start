import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useLessons from '../../hooks/useLessons';
import DefaultTemplate from '../../components/DefaultTemplate';
import TranslationPuzzleGame from '../../components/TranslationPuzzleGame';
import BlankFillGame from '../../components/BlankFillGame';
import MatchGame from '../../components/MatchGame';

type SearchParam = { section: number; lesson: number };

const GamePage = () => {
  const [stage, setStage] = useState(0);
  const [searchParams] = useSearchParams();
  const { sections } = useLessons();
  const navigate = useNavigate();

  const getSearchParamAsNumber = (pName: string): number | null => {
    const nParam = Number(searchParams.get(pName));
    return Number.isNaN(nParam) ? null : nParam;
  };

  const getParams = (): SearchParam => {
    const section = getSearchParamAsNumber('section') ?? -1;
    const lesson = getSearchParamAsNumber('lesson') ?? -1;

    return { section, lesson };
  };

  const redirectHomeIfParamsIsInvalid = ({ section, lesson }: SearchParam) => {
    try {
      if (section < 0 || lesson < 0) {
        throw new Error('section or lesson are not a valid index.');
      }

      if (
        section >= sections.length ||
        lesson >= sections[section].lessons.length
      ) {
        throw new Error('section or lesson are out of index range');
      }
    } catch {
      navigate('/');
    }
  };

  const getLesson = (section: number, lesson: number) =>
    sections[section].lessons[lesson];

  const { section, lesson } = getParams();
  redirectHomeIfParamsIsInvalid({ section, lesson });

  const currentLesson = getLesson(section, lesson);

  const game = useMemo(() => {
    const nextStage = () => setStage((prevStage) => prevStage + 1);
    switch (stage) {
      case 0:
        return <MatchGame lesson={currentLesson} onClear={nextStage} />;
      case 1:
        return <BlankFillGame lesson={currentLesson} onClear={nextStage} />;
      case 2:
        return (
          <TranslationPuzzleGame lesson={currentLesson} onClear={nextStage} />
        );
      default:
        return null;
    }
  }, [currentLesson, stage]);

  return <DefaultTemplate disablePadding={true}>{game}</DefaultTemplate>;
};

export default GamePage;

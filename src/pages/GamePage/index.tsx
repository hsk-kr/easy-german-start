// import MatchGame from '../../components/MatchGame';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useLessons from '../../hooks/useLessons';
import DefaultTemplate from '../../components/DefaultTemplate';
import BlankFillGame from '../../components/BlankFillGame';

type SearchParam = { section: number; lesson: number };

const GamePage = () => {
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

  return (
    <DefaultTemplate disablePadding={true}>
      {/* It's working, when the game is done, the message is shown */}
      {/* <MatchGame lesson={currentLesson} onClear={() => alert('clear!')} /> */}
      <BlankFillGame lesson={currentLesson} onClear={() => alert('clear!')} />
    </DefaultTemplate>
  );
};

export default GamePage;

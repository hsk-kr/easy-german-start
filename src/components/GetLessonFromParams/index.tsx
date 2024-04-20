import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useLessons from '../../hooks/useLessons';
import { Lesson } from '../../types/lesson';

type SearchParam = { section: number; lesson: number };

interface GetLessonFromParamsProps {
  onLoad: (lesson: Lesson, sectionIndex: number, lessonIndex: number) => void;
}

const GetLessonFromParams = ({ onLoad }: GetLessonFromParamsProps) => {
  const [searchParams] = useSearchParams();
  const { sections } = useLessons();
  const navigate = useNavigate();

  const getSearchParamAsNumber = (pName: string): number | null => {
    const param = searchParams.get(pName);
    if (param === null) return param;

    const nParam = Number(param);
    return Number.isNaN(nParam) ? null : nParam;
  };

  const getParams = (): SearchParam => {
    const section = getSearchParamAsNumber('section') ?? -1;
    const lesson = getSearchParamAsNumber('lesson') ?? -1;

    return { section, lesson };
  };

  // if it redirects, returns true. Otherwise, returns false.
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
      return true;
    }

    return false;
  };

  const getLesson = (section: number, lesson: number) =>
    sections[section].lessons[lesson];

  useEffect(() => {
    const { section, lesson } = getParams();
    if (!redirectHomeIfParamsIsInvalid({ section, lesson })) {
      onLoad(getLesson(section, lesson), section, lesson);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default GetLessonFromParams;

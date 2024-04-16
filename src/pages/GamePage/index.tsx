import { useMemo, useState } from 'react';
import DefaultTemplate from '../../components/DefaultTemplate';
import TranslationPuzzleGame from '../../components/TranslationPuzzleGame';
import BlankFillGame from '../../components/BlankFillGame';
import MatchGame from '../../components/MatchGame';
import GetLessonFromParams from '../../components/GetLessonFromParams';
import { Lesson } from '../../types/lesson';

const GamePage = () => {
  const [stage, setStage] = useState(0);
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    undefined
  );

  const game = useMemo(() => {
    if (!currentLesson) return null;

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

  return (
    <DefaultTemplate disablePadding bgGreen>
      <GetLessonFromParams onLoad={(lesson) => setCurrentLesson(lesson)} />
      {game}
    </DefaultTemplate>
  );
};

export default GamePage;

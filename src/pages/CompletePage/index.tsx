import { useState } from 'react';
import DefaultTemplate from '../../components/DefaultTemplate';
import GetLessonFromParams from '../../components/GetLessonFromParams';
import { Lesson } from '../../types/lesson';

function CompletePage() {
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    undefined
  );

  console.log(currentLesson);

  return (
    <DefaultTemplate disablePadding>
      <GetLessonFromParams onLoad={(lesson) => setCurrentLesson(lesson)} />
      Complete
    </DefaultTemplate>
  );
}

export default CompletePage;

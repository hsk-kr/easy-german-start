import { Container, VStack } from '@chakra-ui/react';
import DefaultTemplate from '../../components/DefaultTemplate';
import QuizSection from '../../components/QuizSection';
import { useMemo } from 'react';
import useLessons from '../../hooks/useLessons';
import { useNavigate } from 'react-router-dom';

export function LearnPage() {
  const { sections } = useLessons();
  const commonWords = [];
  const navigate = useNavigate();

  for (let i = 0; i < 10; i++) {
    commonWords.push({
      title: '10 Common Words',
      desc: '10 Common German Words',
      done: i % 2 === 0,
    });
  }

  const sectionElemts = useMemo(() => {
    return sections.map((section, sectionIdx) => (
      <QuizSection
        key={sectionIdx}
        title={`${sectionIdx + 1}. ${section.sectionName}`}
        items={section.lessons.map((lesson, lessonIdx) => ({
          title: lesson.lessonTitle,
          desc: lesson.lessonDesc,
          done: Math.floor(Math.random() * 2) === 0, //dummy
          onNav: () => {
            navigate(`/game?section=${sectionIdx}&lesson=${lessonIdx}`);
          },
        }))}
      />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultTemplate>
      <Container maxW="container.lg" p={0}>
        <VStack spacing={8} align="stretch">
          {sectionElemts}
        </VStack>
      </Container>
    </DefaultTemplate>
  );
}

export default LearnPage;

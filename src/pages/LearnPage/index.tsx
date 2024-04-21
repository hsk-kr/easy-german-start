import { Container, VStack } from '@chakra-ui/react';
import DefaultTemplate from '../../components/DefaultTemplate';
import QuizSection from '../../components/QuizSection';
import { useMemo } from 'react';
import useLessons from '../../hooks/useLessons';
import { useNavigate } from 'react-router-dom';
import useHistory, { generateHistoryMapKey } from '../../hooks/useHistory';
import FullscreenLoading from '../../components/FullscreenLoading';

export function LearnPage() {
  const { sections } = useLessons();
  const { historyMap, sectionProgressMap, loading } = useHistory();
  const navigate = useNavigate();

  const sectionElmts = useMemo(() => {
    if (!historyMap) return [];

    return sections.map((section, sectionIdx) => (
      <QuizSection
        key={sectionIdx}
        title={`${sectionIdx + 1}. ${section.sectionName}`}
        progressValue={sectionProgressMap.get(sectionIdx)}
        items={section.lessons.map((lesson, lessonIdx) => ({
          title: lesson.lessonTitle,
          desc: lesson.lessonDesc,
          done: historyMap.has(generateHistoryMapKey(sectionIdx, lessonIdx)),
          onNav: () => {
            navigate(`/game?section=${sectionIdx}&lesson=${lessonIdx}`);
          },
        }))}
      />
    ));
  }, [historyMap, navigate, sectionProgressMap, sections]);

  return (
    <DefaultTemplate>
      <FullscreenLoading visible={loading} useRandomInitialLoadingTime />
      {!loading && (
        <Container maxW="container.lg" p={0}>
          <VStack spacing={8} align="stretch">
            {sectionElmts}
          </VStack>
        </Container>
      )}
    </DefaultTemplate>
  );
}

export default LearnPage;

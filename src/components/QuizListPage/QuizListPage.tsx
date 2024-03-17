import { Container, VStack } from '@chakra-ui/react';
import DefaultTemplate from '../DefaultTemplate';
import QuizSection from '../QuizSection';

export function QuizListPage() {
  const commonWords = [];

  for (let i = 0; i < 10; i++) {
    commonWords.push({
      title: '25 Common Words',
      desc: '25 Common German Words',
      done: i % 2 === 0,
    });
  }

  return (
    <DefaultTemplate>
      <Container maxW="container.lg" p={0}>
        <VStack spacing={8} align="stretch">
          <QuizSection title="1. 250 Common Words" items={commonWords} />
          <QuizSection title="2. 250 Common Words" items={commonWords} />
          <QuizSection title="3. 250 Common Words" items={commonWords} />
          <QuizSection title="4. 250 Common Words" items={commonWords} />
        </VStack>
      </Container>
    </DefaultTemplate>
  );
}

export default QuizListPage;

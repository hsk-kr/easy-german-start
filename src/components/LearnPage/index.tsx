import { Container, VStack } from '@chakra-ui/react';
import DefaultTemplate from '../DefaultTemplate';
import QuizSection from '../QuizSection';

export function LearnPage() {
  const commonWords = [];

  for (let i = 0; i < 10; i++) {
    commonWords.push({
      title: '10 Common Words',
      desc: '10 Common German Words',
      done: i % 2 === 0,
    });
  }

  return (
    <DefaultTemplate>
      <Container maxW="container.lg" p={0}>
        <VStack spacing={8} align="stretch">
          <QuizSection title="1. 100 Common Words" items={commonWords} />
          <QuizSection title="2. 100 Common Words" items={commonWords} />
          <QuizSection title="3. 100 Common Words" items={commonWords} />
          <QuizSection title="4. 100 Common Words" items={commonWords} />
          <QuizSection title="5. 100 Common Words" items={commonWords} />
          <QuizSection title="6. 100 Common Words" items={commonWords} />
          <QuizSection title="7. 100 Common Words" items={commonWords} />
          <QuizSection title="8. 100 Common Words" items={commonWords} />
          <QuizSection title="9. 100 Common Words" items={commonWords} />
          <QuizSection title="10. 100 Common Words" items={commonWords} />
        </VStack>
      </Container>
    </DefaultTemplate>
  );
}

export default LearnPage;

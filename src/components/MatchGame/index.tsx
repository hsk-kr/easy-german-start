'use client';

import { Box, Container, Flex } from '@chakra-ui/react';
import { Lesson } from '../../types/lesson';
import { useEffect, useMemo, useState } from 'react';

interface MatchGameProps {
  lesson: Lesson;
}

type Word = { word: string; desc: string };

const MatchGame = ({ lesson }: MatchGameProps) => {
  const [words, setWords] = useState<Word[][]>([]);
  const [round, setRound] = useState(-1);
  const currentRoundWordPairs = useMemo<{ left: Word[]; right: Word[] }>(() => {
    // Shuffle current Round's words and make two arrays, left and right.
    // left and right has the words in a different order.
    if (round === -1 || words.length === 0 || words[0].length === 0)
      return { left: [], right: [] };

    const getRandomWords = () => {
      const remainWords = [...words[round]];
      const randomWords: Word[] = [];

      while (remainWords.length > 0) {
        const randomIdx = Math.floor(Math.random() * remainWords.length);
        randomWords.push(remainWords.splice(randomIdx, 1)[0]);
      }

      return randomWords;
    };

    return {
      left: getRandomWords(),
      right: getRandomWords(),
    };
  }, [round, words]);

  useEffect(() => {
    // An array in words has the {EACH_ROUND_WORD_CNT} numbers of words from lesson.words.
    const EACH_ROUND_WORD_CNT = 5;
    const newWords: typeof words = [[]];

    for (const w of lesson.words) {
      newWords[newWords.length - 1].push({
        word: w.word,
        desc: w.desc,
      });

      if (newWords[newWords.length - 1].length === EACH_ROUND_WORD_CNT) {
        newWords.push([]);
      }
    }

    setWords(newWords);
    setRound(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (round === -1) return <div>Loading...</div>;

  return (
    <Box bgColor="green.500" h="100svh">
      <Container maxW="container.lg">
        <WordPairs
          left={currentRoundWordPairs.left}
          right={currentRoundWordPairs.right}
        />
      </Container>
    </Box>
  );
};

const WordPairs = ({ left, right }: { left: Word[]; right: Word[] }) => {
  const elements = useMemo(() => {
    const _elements = [];

    for (let i = 0; i < left.length; i++) {
      _elements.push(
        <Flex
          key={left[i].word}
          justifyContent="space-between"
          alignItems="center"
        >
          <Card value={left[i].word} />
          <Card value={right[i].desc} />
        </Flex>
      );
    }

    return _elements;
  }, [left, right]);

  return (
    <Flex flexDir="column" rowGap={4}>
      {elements}
    </Flex>
  );
};

const Card = ({ value }: { value: string }) => {
  return (
    <Box p={4} bgColor="white" borderRadius="lg">
      {value}
    </Box>
  );
};

export default MatchGame;

'use client';

import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Lesson } from '../../types/lesson';
import { useEffect, useMemo, useState } from 'react';
import useScreen from '../../hooks/useScreen';

interface MatchGameProps {
  lesson: Lesson;
  onClear: VoidFunction;
}

type Word = { word: string; desc: string };

type CardStatus = 'selected' | 'correct' | 'incorrect' | 'none';

const MatchGame = ({ lesson, onClear }: MatchGameProps) => {
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

  const handleClear = () => {
    if (round < words.length - 1) {
      setRound((prevRound) => prevRound + 1);
      return;
    }

    // When all the rounds are cleared
    onClear();
  };

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
    <Box bgColor="green.500" minH="100svh">
      <Guide />
      <Container maxW="container.md" pt={[4, 12]} p={4}>
        <WordPairs
          left={currentRoundWordPairs.left}
          right={currentRoundWordPairs.right}
          onClear={handleClear}
        />
      </Container>
    </Box>
  );
};

const WordPairs = ({
  left,
  right,
  onClear,
}: {
  left: Word[];
  right: Word[];
  onClear: VoidFunction;
}) => {
  const [correctWords, setCorrectWords] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<{
    left: number;
    right: number;
  }>({
    left: -1,
    right: -1,
  });
  const [prevIncorrectIndices, setPrevIncorrectIndices] = useState<{
    left: number;
    right: number;
  }>({
    left: -1,
    right: -1,
  });
  const elements = useMemo(() => {
    const _elements = [];

    const handleSelect =
      (type: 'left' | 'right', index: number, word: Word) => () => {
        const isSelected =
          (type === 'left' && index === selectedIndices.left) ||
          (type === 'right' && index === selectedIndices.right);
        const isCorrect = correctWords.includes(word.word);

        if (isSelected || isCorrect) return;

        setSelectedIndices((prevSelectedIndices) => ({
          ...prevSelectedIndices,
          [type]: index,
        }));
      };

    for (let i = 0; i < left.length; i++) {
      let leftStatus: CardStatus = 'none';
      leftStatus = prevIncorrectIndices.left === i ? 'incorrect' : leftStatus;
      leftStatus = selectedIndices.left === i ? 'selected' : leftStatus;
      leftStatus = correctWords.includes(left[i].word) ? 'correct' : leftStatus;

      let rightStatus: CardStatus = 'none';
      rightStatus =
        prevIncorrectIndices.right === i ? 'incorrect' : rightStatus;
      rightStatus = selectedIndices.right === i ? 'selected' : rightStatus;
      rightStatus = correctWords.includes(right[i].word)
        ? 'correct'
        : rightStatus;

      _elements.push(
        <Flex
          key={left[i].word}
          justifyContent="space-between"
          alignItems="center"
        >
          <Card
            value={left[i].word}
            status={leftStatus}
            onSelect={handleSelect('left', i, left[i])}
          />
          <Card
            value={right[i].desc}
            status={rightStatus}
            onSelect={handleSelect('right', i, right[i])}
          />
        </Flex>
      );
    }

    return _elements;
  }, [correctWords, left, right, selectedIndices, prevIncorrectIndices]);

  const resetPrevIncorrectIndicies = () => {
    setPrevIncorrectIndices({
      left: -1,
      right: -1,
    });
  };

  const resetSelectedIndicies = () => {
    setSelectedIndices({
      left: -1,
      right: -1,
    });
  };

  useEffect(() => {
    if (selectedIndices.left === -1 || selectedIndices.right === -1) return;

    const isCorrect =
      left[selectedIndices.left].word === right[selectedIndices.right].word;
    if (isCorrect) {
      setCorrectWords((prevCorrectWords) => [
        ...prevCorrectWords,
        left[selectedIndices.left].word,
      ]);
    } else {
      setPrevIncorrectIndices(selectedIndices);
    }

    resetSelectedIndicies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndices]);

  useEffect(() => {
    setCorrectWords([]);
    resetPrevIncorrectIndicies();
  }, [left, right]);

  useEffect(() => {
    if (correctWords.length !== left.length) return;

    onClear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctWords]);

  return (
    <Flex flexDir="column" rowGap={4}>
      {elements}
    </Flex>
  );
};

const Card = ({
  value,
  status,
  onSelect,
}: {
  value: string;
  status: CardStatus;
  onSelect: VoidFunction;
}) => {
  const [incorrectAnim, setIncorrectAnim] = useState(false);
  const { isDesktop } = useScreen();
  const fontSize = value.length > 10 ? 'small' : 'large';

  const isHovable = isDesktop;
  const bgColor = ['selected', 'correct'].includes(status)
    ? 'blue.500'
    : 'white';
  const color = ['selected', 'correct'].includes(status) ? 'white' : 'black';

  useEffect(() => {
    // when the status is changed to `incorrect`, the animation will start once.
    setIncorrectAnim(status === 'incorrect');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <Box
      onAnimationEnd={() => setIncorrectAnim(false)}
      className={incorrectAnim ? 'anim-incorrect-answer' : ''}
      p={4}
      minWidth="120px"
      maxWidth="40%"
      bgColor={bgColor}
      color={color}
      borderRadius="lg"
      fontSize={fontSize}
      textAlign="center"
      cursor="pointer"
      transition="all 0.25s"
      _hover={
        isHovable
          ? {
              bgColor: 'blue.500',
              color: 'white',
              fontWeight: 'bold',
            }
          : undefined
      }
      onClick={incorrectAnim ? undefined : onSelect}
    >
      {value}
    </Box>
  );
};

const Guide = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="rgba(0, 0, 0, 0.6)"
      position="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      zIndex={20}
      justifyContent="center"
      alignItems="center"
      color="white"
      textTransform="uppercase"
      fontWeight="bold"
      textAlign="center"
      flexDir="column"
      cursor="pointer"
      onClick={() => setVisible(false)}
    >
      <Text fontSize="xx-large">
        Match the word with the correct description!
      </Text>
      <Text fontSize="x-large" mt={2}>
        Click to start!
      </Text>
    </Flex>
  );
};

export default MatchGame;

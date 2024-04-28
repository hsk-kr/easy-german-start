import { Box, Container, Flex, Progress, Text } from '@chakra-ui/react';
import { Example, Lesson } from '../../types/lesson';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import Guide from '../Guide';
import useScreen from '../../hooks/useScreen';
import useTTS from '../../hooks/useTTS';
import { shuffleArray } from '../../libs/array';

interface TranslationPuzzleGameProps {
  lesson: Lesson;
  onClear: VoidFunction;
}

const keys = [
  'q',
  'w',
  'e',
  'r',
  't',
  'a',
  's',
  'd',
  'f',
  'g',
  'z',
  'x',
  'c',
  'v',
  'b',
];

const Translation = ({ children }: { children?: string }) => {
  return (
    <Text
      boxShadow="base"
      p={4}
      bg="white"
      fontSize="lg"
      textAlign="center"
      borderRadius="md"
    >
      {children}
    </Text>
  );
};

const Puzzle = ({
  example,
  onClear,
}: {
  // It needs only sentence but since there is a possibility the curernt sentence can be the same with the previous one. It gets this parameter as an object
  example: Example;
  onClear: VoidFunction;
}) => {
  const [puzzles, setPuzzles] = useState<
    {
      word: string;
    }[]
  >([]);
  const [words, setWords] = useState<
    {
      word: string;
      hidden: boolean;
    }[]
  >([]);
  const [selectedPuzzleIndex, setSelectedPuzzleIndex] = useState(-1);
  const [errorPuzzleIndex, setErrorPuzzleIndex] = useState(-1)!;
  const isClear = words.every((w) => !w.hidden);
  const { isDesktop } = useScreen();
  const { speak } = useTTS();
  const wordComps = useMemo(() => {
    const comps: ReactNode[] = [];
    const disableTransition = words.every((w) => w.hidden);

    for (const [index, word] of words.entries()) {
      comps.push(
        <Box key={index} borderBottom="2px solid white">
          <Text
            color="white"
            transition={disableTransition ? '' : '0.5s all'}
            opacity={word.hidden ? 0 : 1}
            fontSize="2xl"
          >
            {word.word}
          </Text>
        </Box>
      );
    }

    return (
      <Flex alignItems="center" justifyContent="center" flexWrap="wrap" gap={2}>
        {comps}
      </Flex>
    );
  }, [words]);
  const puzzleComps = useMemo(() => {
    const comps: ReactNode[] = [];

    for (const [index, { word }] of puzzles.entries()) {
      const key = index < keys.length ? keys[index] : '';
      const keyId = `puzzle-${key}`;

      comps.push(
        <Text
          as="div"
          key={index}
          id={keyId}
          position="relative"
          color="white"
          fontSize="2xl"
          cursor="pointer"
          transition="0.25s all"
          p={1}
          borderRadius="lg"
          _hover={
            isDesktop
              ? {
                  bg: '#74b9ff80',
                }
              : {}
          }
          onAnimationEnd={() => setErrorPuzzleIndex(-1)}
          className={errorPuzzleIndex === index ? 'anim-incorrect-puzzle' : ''}
          onClick={() => setSelectedPuzzleIndex(index)}
        >
          {word}
          {isDesktop && key.length > 0 && (
            <Text
              color="green.500"
              bg="white"
              p={1}
              fontSize="sm"
              borderRadius="lg"
              textTransform="uppercase"
              position="absolute"
              left={0}
              bottom={-2}
              transform="translate(0%, 50%)"
            >
              {key}
            </Text>
          )}
        </Text>
      );
    }

    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        columnGap={isDesktop ? 4 : 2}
        rowGap={isDesktop ? 12 : 2}
      >
        {comps}
      </Flex>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [puzzles, errorPuzzleIndex, isDesktop]);

  useEffect(() => {
    if (!isClear) return;
    const DELAY_BEFORE_MOVING_NEXT_STAGE = 1000;
    const tm = setTimeout(() => {
      onClear();
    }, DELAY_BEFORE_MOVING_NEXT_STAGE);

    return () => {
      clearTimeout(tm);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClear]);

  useEffect(() => {
    const sentence = example.sentence;

    const generatePuzzlesAndWords = () => {
      const newWords: typeof words = sentence.split(' ').map((word) => ({
        word,
        hidden: true,
      }));
      const newPuzzles: typeof puzzles = shuffleArray(
        newWords.map((w) => ({
          word: w.word,
        }))
      );

      setWords(newWords);
      setPuzzles(newPuzzles);
    };

    generatePuzzlesAndWords();
  }, [example]);

  useEffect(() => {
    if (selectedPuzzleIndex === -1) return;

    const nextWord = words.find((w) => w.hidden);
    if (!nextWord) return;

    speak(puzzles[selectedPuzzleIndex].word);
    if (nextWord.word === puzzles[selectedPuzzleIndex].word) {
      // show nextWord and remove the selected puzzle in the puzzles.
      nextWord.hidden = false;
      setWords((prevWords) =>
        prevWords.map((w) => (w === nextWord ? nextWord : w))
      );
      setPuzzles((prevPuzzles) =>
        prevPuzzles.filter((_, i) => i !== selectedPuzzleIndex)
      );
      setErrorPuzzleIndex(-1);
    } else {
      // the error index will be used to execute animatino in useMemo where renders puzzles.
      setErrorPuzzleIndex(selectedPuzzleIndex);
    }
    setSelectedPuzzleIndex(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPuzzleIndex]);

  return (
    <Flex flexDir="column" gap={4}>
      {wordComps}
      {puzzleComps}
    </Flex>
  );
};

const Shortcut = () => {
  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      const key = e.key;

      const elmt = document.getElementById(`puzzle-${key.toLowerCase()}`);
      if (elmt) elmt.click();
    };

    window.addEventListener('keyup', handleKeyEvent);

    return () => window.removeEventListener('keyup', handleKeyEvent);
  }, []);

  return null;
};

const TranslationPuzzleGame = ({
  lesson,
  onClear,
}: TranslationPuzzleGameProps) => {
  const [examples, setExamples] = useState<Example[]>([]);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const existPuzzle = currentIdx !== -1;

  const handlePuzzleClear = () => {
    if (currentIdx === examples.length - 1) {
      onClear();
    } else {
      setCurrentIdx((prevIdx) => prevIdx + 1);
    }
  };

  useEffect(() => {
    const pickTwoExamplesFromEachAndUpdateExamples = () => {
      const newExamples: Example[] = [];

      for (const word of lesson.words) {
        const NUM_RAND_EXAMPLES = 2;
        const pickedIndices = [];
        const indices = Array(word.examples.length)
          .fill(0)
          .map((_, idx) => idx);

        // pick random indices as many times as NUM_RAND_EXAMPLES
        // since it splice the picked index from the indices, they won't be duplicated.
        while (pickedIndices.length < NUM_RAND_EXAMPLES && indices.length > 0) {
          const randIdx = Math.floor(Math.random() * indices.length);
          pickedIndices.push(indices.splice(randIdx, 1)[0]);
        }

        for (const index of pickedIndices) {
          const randPos = Math.floor(Math.random() * newExamples.length + 1);
          newExamples.splice(randPos, 0, { ...word.examples[index] });
        }
      }

      setExamples(newExamples);
      setCurrentIdx(newExamples.length > 0 ? 0 : -1);
    };

    pickTwoExamplesFromEachAndUpdateExamples();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson]);

  const progress = Math.floor((currentIdx / examples.length) * 100);

  return (
    <Box bgColor="green.500" h="100%">
      <Shortcut />
      <Guide message={'Select Words in the right order!'} />
      <Container maxW="container.md" pt={[4, 16]} p={4}>
        <Flex flexDir="column" gap={8}>
          <Progress colorScheme="blue" value={progress} />
          {existPuzzle && (
            <Translation>{examples[currentIdx].translation}</Translation>
          )}
          {existPuzzle && (
            <Puzzle
              example={examples[currentIdx]}
              onClear={handlePuzzleClear}
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default TranslationPuzzleGame;

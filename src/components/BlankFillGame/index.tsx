'use client';

import { Box, Container, Text, Flex, Progress } from '@chakra-ui/react';
import { Lesson } from '../../types/lesson';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import useScreen from '../../hooks/useScreen';
import Guide from '../Guide';

interface BlankFillGameProps {
  lesson: Lesson;
  onClear: VoidFunction;
}

const BlankFillGame = ({ lesson, onClear }: BlankFillGameProps) => {
  const [words, setWords] = useState<(typeof lesson)['words']>([]);
  const [currentWordIdx, setCurrentWordIdx] = useState(-1);
  const currentWord = currentWordIdx === -1 ? undefined : words[currentWordIdx];
  const { isDesktop } = useScreen();

  const handleGameOneStageClear = () => {
    const nextWordIdx = currentWordIdx + 1;
    if (nextWordIdx === words.length) {
      onClear();
      return;
    }

    setCurrentWordIdx(nextWordIdx);
  };

  useEffect(() => {
    const remainingWords = [...lesson.words];
    const randomWords = [];

    while (remainingWords.length > 0) {
      const randomIdx = Math.floor(Math.random() * remainingWords.length);
      randomWords.push({ ...remainingWords.splice(randomIdx, 1)[0] });
    }

    setWords(randomWords);
    setCurrentWordIdx(randomWords.length > 0 ? 0 : -1);
  }, [lesson]);

  const progress = Math.floor((currentWordIdx / words.length) * 100);

  return (
    <Box bgColor="green.500" minH="100svh">
      <Shortcut />
      <Guide
        message={
          isDesktop
            ? [
                'Select letters in the right order!',
                'You can type with your keyboard - Ctrl + English for German Letter',
              ]
            : 'Select letters in the right order!'
        }
      />
      <Container maxW="container.md" pt={[4, 16]} p={4}>
        <Flex flexDir="column" gap={8}>
          <Progress colorScheme="blue" value={progress} />
          <Description>{currentWord?.desc}</Description>
          <Game word={currentWord?.word} onClear={handleGameOneStageClear} />
        </Flex>
      </Container>
    </Box>
  );
};

const Description = ({ children }: { children?: string }) => {
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

const Shortcut = () => {
  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      let key = e.key;

      if (e.ctrlKey) {
        if (key === 'a') key = 'ä';
        else if (key === 'A') key = 'Ä';
        else if (key === 'o') key = 'ö';
        else if (key === 'O') key = 'Ö';
        else if (key === 'u') key = 'ü';
        else if (key === 'U') key = 'Ü';
        else if (key === 's' || key === 'S') key = 'ß';
      }

      const elmt = document.querySelector<HTMLParagraphElement>(
        `.filling-letter.${key}`
      );
      if (elmt) elmt.click();
    };

    window.addEventListener('keyup', handleKeyEvent);

    return () => window.removeEventListener('keyup', handleKeyEvent);
  }, []);

  return null;
};

const Game = ({ word, onClear }: { word?: string; onClear: VoidFunction }) => {
  const [letters, setLetters] = useState<
    {
      letter: string;
      hidden: boolean;
    }[]
  >([]);
  const [fillingLetters, setFillingLetters] = useState<
    {
      letter: string;
      index: number;
    }[]
  >([]);
  const [selectedLetter, setSelectedLetter] = useState<
    (typeof fillingLetters)[0] | null
  >(null);
  const { isDesktop } = useScreen();
  const isHovable = isDesktop;
  const isClear = letters.length > 0 && fillingLetters.length === 0;
  const nextGuessingIdx = useMemo(
    () => letters.findIndex((l) => l.hidden),
    [letters]
  );
  const letterComps = useMemo(() => {
    const comps: ReactNode[] = [];

    for (let i = 0; i < letters.length; i++) {
      const isNextGuessingLetter = nextGuessingIdx === i;

      comps.push(
        <Text
          key={i}
          w={12}
          borderBottom="1px solid white"
          borderWidth={isNextGuessingLetter ? 4 : 2}
          color="white"
          fontWeight="bold"
          fontSize="4xl"
          textAlign="center"
          p={2}
          className={isNextGuessingLetter ? 'anim-target-letter' : ''}
        >
          {letters[i].hidden ? '-' : letters[i].letter}
        </Text>
      );
    }

    return comps;
  }, [letters, nextGuessingIdx]);
  const filllingLetterComps = useMemo(() => {
    const comps: ReactNode[] = [];

    for (let i = 0; i < fillingLetters.length; i++) {
      const fl = fillingLetters[i];
      const incorrect = selectedLetter === fillingLetters[i];
      let className = `filling-letter ${fl.letter} `;
      if (incorrect) className += 'anim-incorrect-letter';

      comps.push(
        <Text
          key={i}
          w={12}
          h={12}
          fontSize="3xl"
          textAlign="center"
          color="white"
          fontWeight="bold"
          borderBottom="4px solid white"
          transition="0.5s all"
          cursor="pointer"
          borderColor={incorrect ? 'red.500' : undefined}
          className={className}
          _hover={
            isHovable
              ? {
                  transform: 'scale(1.1)',
                }
              : undefined
          }
          onClick={() => {
            setSelectedLetter(fl);
          }}
        >
          {fl.letter}
        </Text>
      );
    }

    return comps;
  }, [fillingLetters, isHovable, selectedLetter]);

  const generateLettersFromWord = (word: string) => {
    const hiddenLetterIndicies = Array(word.length)
      .fill(0)
      .map((_, i) => i);
    const wordHalfLength = Math.ceil(word.length / 2);

    // remain half random indices will be hidden
    while (hiddenLetterIndicies.length > wordHalfLength) {
      const randIdx = Math.floor(Math.random() * hiddenLetterIndicies.length);
      hiddenLetterIndicies.splice(randIdx, 1);
    }

    const newFillingLetters = hiddenLetterIndicies.map((index) => ({
      letter: word[index],
      index,
    }));
    const newLetters: typeof letters = [];

    for (let i = 0; i < word.length; i++) {
      const hidden =
        hiddenLetterIndicies.length > 0 && hiddenLetterIndicies[0] === i;
      if (hidden) hiddenLetterIndicies.shift();

      newLetters.push({
        letter: word[i],
        hidden,
      });
    }

    return {
      letters: newLetters,
      fillingLetters: newFillingLetters,
    };
  };

  const fillLetter = (fillingLetter: NonNullable<typeof selectedLetter>) => {
    const nextLetterToFill = letters.find((l) => l.hidden);
    if (nextLetterToFill && nextLetterToFill.letter !== fillingLetter.letter)
      return;

    setFillingLetters((prevFillingLetters) =>
      prevFillingLetters.filter((l) => l.index !== fillingLetter.index)
    );
    setLetters((prevLetter) =>
      prevLetter.map((l) => {
        if (l === nextLetterToFill) {
          return {
            ...l,
            hidden: false,
          };
        }
        return l;
      })
    );
  };

  // initialize letters and fillingLetters
  useEffect(() => {
    if (!word) return;
    const { letters, fillingLetters } = generateLettersFromWord(word);
    setLetters(letters);
    setFillingLetters(fillingLetters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  // check if the letter is the right next letter
  useEffect(() => {
    if (!selectedLetter) return;

    fillLetter(selectedLetter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLetter]);

  useEffect(() => {
    if (!isClear) return;
    onClear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClear]);

  return (
    <Flex flexDir="column" gap={6}>
      <Flex justifyContent="center" alignItems="center" gap={4} flexWrap="wrap">
        {letterComps}
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={4} flexWrap="wrap">
        {filllingLetterComps}
      </Flex>
    </Flex>
  );
};

export default BlankFillGame;

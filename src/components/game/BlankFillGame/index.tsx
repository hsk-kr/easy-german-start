'use client';

import { Box, Container, Text, Flex, Progress } from '@chakra-ui/react';
import { Lesson } from '../../../types/lesson';
import { useEffect, useMemo, useState } from 'react';
import useScreen from '../../../hooks/useScreen';
import Guide from '../Guide';
import { shuffleArray } from '../../../libs/array';
import useTTS from '../../../hooks/useTTS';

interface BlankFillGameProps {
  lesson: Lesson;
  onClear: VoidFunction;
}

interface GuessingLetter {
  letter: string;
  hidden: boolean;
}

interface LetterChoice {
  letter: string;
  index: number;
}

const BlankFillGame = ({ lesson, onClear }: BlankFillGameProps) => {
  const [words, setWords] = useState<(typeof lesson)['words']>([]);
  const [currentWordIdx, setCurrentWordIdx] = useState(-1);
  const currentWord = currentWordIdx === -1 ? undefined : words[currentWordIdx];
  const { isDesktop } = useScreen();
  const { speak } = useTTS({ useRandomVoice: true });

  const handleGameOneStageClear = () => {
    speak(words[currentWordIdx].word);
    const nextWordIdx = currentWordIdx + 1;
    const hasAllStagesDone = nextWordIdx === words.length;
    if (hasAllStagesDone) {
      onClear();
      return;
    }

    setCurrentWordIdx(nextWordIdx);
  };

  useEffect(() => {
    const randomWords = shuffleArray([...lesson.words]);

    setWords(randomWords);
    setCurrentWordIdx(randomWords.length > 0 ? 0 : -1);
  }, [lesson]);

  const progress = Math.floor((currentWordIdx / words.length) * 100);

  return (
    <Box bgColor="green.500" h="100%">
      <Shortcut />
      <Guide
        message={
          isDesktop
            ? [
                'Select letter in the right order!',
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
  const [guessingLetters, setGuessingLetters] = useState<GuessingLetter[]>([]);
  const [letterChoices, setLetterChoices] = useState<LetterChoice[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<
    (typeof letterChoices)[0] | null
  >(null);
  const { isDesktop } = useScreen();
  const isHovable = isDesktop;
  const isClear = guessingLetters.length > 0 && letterChoices.length === 0;

  const nextGuessingIdx = useMemo(
    () => guessingLetters.findIndex((l) => l.hidden),
    [guessingLetters]
  );

  const generateGuessingLettersFromWord = (word: string) => {
    const hiddenLetterIndicies = Array(word.length)
      .fill(0)
      .map((_, i) => i);
    const wordHalfLength = Math.ceil(word.length / 2);

    // remain half random indices will be hidden
    while (hiddenLetterIndicies.length > wordHalfLength) {
      const randIdx = Math.floor(Math.random() * hiddenLetterIndicies.length);
      hiddenLetterIndicies.splice(randIdx, 1);
    }

    const newLetterOptions = hiddenLetterIndicies.map((index) => ({
      letter: word[index],
      index,
    }));
    const newGuessingLetters: typeof guessingLetters = [];

    for (let i = 0; i < word.length; i++) {
      const hidden =
        hiddenLetterIndicies.length > 0 && hiddenLetterIndicies[0] === i;
      if (hidden) hiddenLetterIndicies.shift();

      newGuessingLetters.push({
        letter: word[i],
        hidden,
      });
    }

    return {
      guessingLetters: newGuessingLetters,
      letterChoices: shuffleArray(newLetterOptions),
    };
  };

  const fillLetter = (fillingLetter: NonNullable<typeof selectedLetter>) => {
    const nextLetterToFill = guessingLetters.find((l) => l.hidden);
    if (nextLetterToFill && nextLetterToFill.letter !== fillingLetter.letter)
      return;

    setLetterChoices((prevLetterOptions) =>
      prevLetterOptions.filter((l) => l.index !== fillingLetter.index)
    );
    setGuessingLetters((prevLetter) =>
      prevLetter.map((l) => {
        const isTargetLeter = l === nextLetterToFill;
        if (isTargetLeter) {
          return {
            ...l,
            hidden: false,
          };
        }
        return l;
      })
    );
  };

  // initialize guessingLetters and letterChoices
  useEffect(() => {
    if (!word) return;
    const { guessingLetters, letterChoices } =
      generateGuessingLettersFromWord(word);
    setGuessingLetters(guessingLetters);
    setLetterChoices(letterChoices);
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
        <GuessingLetters
          guessingLetters={guessingLetters}
          nextGuessingIdx={nextGuessingIdx}
        />
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={4} flexWrap="wrap">
        <LetterChoices
          isHovable={isHovable}
          letterChoices={letterChoices}
          onLetterChoiceClick={(letterChoice) =>
            setSelectedLetter(letterChoice)
          }
          selectedLetter={selectedLetter}
        />
      </Flex>
    </Flex>
  );
};

const GuessingLetters = ({
  guessingLetters,
  nextGuessingIdx,
}: {
  guessingLetters: GuessingLetter[];
  nextGuessingIdx: number;
}) => {
  return guessingLetters.map((guessingLetter, idx) => {
    const isNextGuessingLetter = nextGuessingIdx === idx;

    return (
      <Text
        key={idx}
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
        {guessingLetter.hidden ? '-' : guessingLetter.letter}
      </Text>
    );
  });
};

const LetterChoices = ({
  letterChoices,
  selectedLetter,
  isHovable,
  onLetterChoiceClick,
}: {
  letterChoices: LetterChoice[];
  selectedLetter: LetterChoice | null;
  isHovable: boolean;
  onLetterChoiceClick: (letterChoice: LetterChoice) => void;
}) => {
  return letterChoices.map((letterChoice, idx) => {
    const incorrect = selectedLetter === letterChoice;
    let className = `filling-letter ${letterChoice.letter} `;
    if (incorrect) className += 'anim-incorrect-letter';

    return (
      <Text
        key={idx}
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
          onLetterChoiceClick(letterChoice);
        }}
      >
        {letterChoice.letter}
      </Text>
    );
  });
};

export default BlankFillGame;

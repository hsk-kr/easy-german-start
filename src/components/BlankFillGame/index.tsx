'use client';

import { Box, Container } from '@chakra-ui/react';
import { Lesson } from '../../types/lesson';
import { ReactNode, useEffect, useMemo, useState } from 'react';

interface BlankFillGameProps {
  lesson: Lesson;
  onClear: VoidFunction;
}

const BlankFillGame = ({ lesson, onClear }: BlankFillGameProps) => {
  const [words, setWords] = useState<(typeof lesson)['words']>([]);
  const [currentWordIdx, setCurrentWordIdx] = useState(-1);
  const currentWord = currentWordIdx === -1 ? undefined : words[currentWordIdx];

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

  return (
    <Box bgColor="green.500" minH="100svh">
      <Container maxW="container.md" pt={[4, 12]} p={4}>
        <Description>{currentWord?.desc}</Description>
        <Game word={currentWord?.word} onClear={handleGameOneStageClear} />
      </Container>
    </Box>
  );
};

const Description = ({ children }: { children?: string }) => {
  return <div>{children}</div>;
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
  const isClear = letters.length > 0 && fillingLetters.length === 0;
  const nextGuessingIdx = useMemo(
    () => letters.findIndex((l) => l.hidden),
    [letters]
  );
  const letterComps = useMemo(() => {
    const comps: ReactNode[] = [];

    for (let i = 0; i < letters.length; i++) {
      comps.push(
        <span key={i}>
          {letters[i].hidden ? '_' : letters[i].letter}
          {nextGuessingIdx === i ? '!' : ''}
        </span>
      );
    }

    return comps;
  }, [letters, nextGuessingIdx]);
  const filllingLetterComps = useMemo(() => {
    const comps: ReactNode[] = [];

    for (let i = 0; i < fillingLetters.length; i++) {
      const fl = fillingLetters[i];
      comps.push(
        <span
          key={i}
          onClick={() => {
            setSelectedLetter(fl);
          }}
        >
          {fl.letter}
        </span>
      );
    }

    return comps;
  }, [fillingLetters]);

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
    setSelectedLetter(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLetter]);

  useEffect(() => {
    if (!isClear) return;
    onClear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClear]);

  return (
    <div>
      <div>{letterComps}</div>
      <div>{filllingLetterComps}</div>
    </div>
  );
};

export default BlankFillGame;

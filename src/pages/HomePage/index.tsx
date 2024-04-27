import { Box, Flex, Image, Text } from '@chakra-ui/react';
import DefaultTemplate from '../../components/DefaultTemplate';
import FirstImage from './res/a.webp';
import SecondImage from './res/b.webp';
import ThirdImage from './res/c.webp';
import FourthImage from './res/d.webp';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Lesson } from '../../types/lesson';
import MatchGame from '../../components/MatchGame';

function HomePage() {
  return (
    <DefaultTemplate disablePadding>
      <EntrySection />
      <DemoSection />
      <Padding />
      <Padding />
    </DefaultTemplate>
  );
}

const ImageRow = styled(Flex)`
  height: 50%;

  > img {
    flex: 1;
    max-width: 50%;
    height: 100%;
    object-fit: cover;
  }
`;

function EntrySection() {
  const imgs = [FirstImage, SecondImage, ThirdImage, FourthImage];
  const [imgIndices, setImgIndices] = useState([0, 1, 2, 3]);
  const [animImgIndex, setAnimImgIndex] = useState(-1);
  const tmRef = useRef<{ tmChangeImg: NodeJS.Timeout | undefined }>({
    tmChangeImg: undefined,
  });
  const prevRandomIdx = useRef<number>(-1); // prevent changing the same image that changed right before.

  const handleAnimEnd = () => setAnimImgIndex(-1);

  const changeImg = () => {
    tmRef.current.tmChangeImg = setTimeout(
      () => {
        let randomIdx: number;

        do {
          randomIdx = Math.floor(Math.random() * imgIndices.length);
        } while (prevRandomIdx.current === randomIdx);
        prevRandomIdx.current = randomIdx;

        setImgIndices((prevImgIndices) => {
          const newImgIndices = [...prevImgIndices];
          const nextRandImgIdx = Math.floor(Math.random() * imgs.length);
          newImgIndices[randomIdx] = nextRandImgIdx;
          return newImgIndices;
        });

        setAnimImgIndex(randomIdx);
      },
      1000 + Math.floor(Math.random() * 500)
    );
  };

  useEffect(() => {
    if (animImgIndex === -1) changeImg();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animImgIndex]);

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearTimeout(tmRef.current.tmChangeImg);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      position="relative"
      overflowY="hidden"
      minH="calc(100svh - 64px)"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        position="absolute"
        flexDir="column"
        width="100%"
        height="100%"
        opacity={0.3}
      >
        <ImageRow>
          <Image
            alt="learn german"
            src={imgs[imgIndices[0]]}
            className={animImgIndex === 0 ? 'anim-entry-image-change' : ''}
            onAnimationEnd={handleAnimEnd}
          />
          <Image
            alt="learn german"
            src={imgs[imgIndices[1]]}
            className={animImgIndex === 1 ? 'anim-entry-image-change' : ''}
            onAnimationEnd={handleAnimEnd}
          />
        </ImageRow>
        <ImageRow>
          <Image
            alt="learn german"
            src={imgs[imgIndices[2]]}
            className={animImgIndex === 2 ? 'anim-entry-image-change' : ''}
            onAnimationEnd={handleAnimEnd}
          />
          <Image
            alt="learn german"
            src={imgs[imgIndices[3]]}
            className={animImgIndex === 3 ? 'anim-entry-image-change' : ''}
            onAnimationEnd={handleAnimEnd}
          />
        </ImageRow>
      </Flex>
      <Text
        zIndex={1}
        fontSize={['xx-large', 'xxx-large']}
        color="#fff"
        textShadow="0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #ffce00,
      0 0 42px #000,
      0 0 82px #ff0000,
      0 0 92px #ffce00,
      0 0 102px #ff0000,
      0 0 151px #ffce00"
      >
        Don't Study, Enjoy It
      </Text>
    </Flex>
  );
}

function DemoSection() {
  const lesson: Lesson = {
    lessonTitle: 'title',
    lessonDesc: 'desc',
    words: [
      {
        word: 'Hallo',
        desc: 'Hello',
        examples: [
          {
            sentence: 'Hallo',
            translation: 'Hello',
          },
        ],
      },
    ],
  };

  return (
    <Box height="240px">
      <Text fontSize="xxx-large"></Text>
      <MatchGame noGuide lesson={lesson} onClear={() => alert('test')} />
    </Box>
  );
}

function Padding() {
  return <Box bg="white" minH="100svh"></Box>;
}

export default HomePage;

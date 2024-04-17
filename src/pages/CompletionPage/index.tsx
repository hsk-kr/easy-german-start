import { ComponentProps, useEffect, useRef, useState } from 'react';
import DefaultTemplate from '../../components/DefaultTemplate';
import GetLessonFromParams from '../../components/GetLessonFromParams';
import { Lesson } from '../../types/lesson';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Text as ChakraText,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { Image, Stage, Rect, Layer, Text } from 'react-konva';
import styled from '@emotion/styled';
import useImage from 'use-image';
import useScreen from '../../hooks/useScreen';
import { useNavigate } from 'react-router-dom';

const CanvasWrapper = styled.div<{
  width: number;
  height: number;
  isMobile: boolean;
}>`
  .tools {
    ${({ isMobile }) => `
      ${isMobile ? '' : 'display: none;'}
    `}
  }

  &:hover {
    .tools {
      display: block;
    }
  }

  position: relative;
  background-color: white;
  canvas,
  .konvajs-content {
    ${({ width, height }) => `
    width: ${width}px !important;
    height: ${height}px !important;
    `}
  }
`;

function CompletionPage() {
  const { isDesktop } = useScreen();
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    undefined
  );

  const navigateToLearnPage = () => {
    navigate('/learn');
  };

  console.log(currentLesson);

  return (
    <DefaultTemplate disablePadding bgGreen>
      <GetLessonFromParams onLoad={(lesson) => setCurrentLesson(lesson)} />
      <Box bgColor="green.500" minH="100svh">
        <Container maxW="container.md" p={4} pt={[4, 12]}>
          <Flex flexDir="column" gap={8}>
            <Flex flexDir="column" gap={1} color="white" alignItems="center">
              <ChakraText
                fontSize={['2xl', '3xl']}
                textTransform="uppercase"
                textDecoration="underline"
                onClick={navigateToLearnPage}
                cursor="pointer"
              >
                LEARN MORE
              </ChakraText>
              <ChakraText
                fontSize={['3xl', '4xl']}
                textTransform="uppercase"
                fontWeight="bold"
              >
                Congratulations!
              </ChakraText>
            </Flex>
            <Certificate />
            {isDesktop && (
              <ChakraText
                fontSize="lg"
                color="white"
                textAlign="right"
                fontWeight="bold"
              >
                Hover your mouse on the certificate to download it.
              </ChakraText>
            )}
          </Flex>
        </Container>
      </Box>
    </DefaultTemplate>
  );
}

function Certificate() {
  const { isDesktop } = useScreen();
  const [scale, setScale] = useState({
    x: 1,
    y: 1,
  });
  const stageRef: ComponentProps<typeof Stage>['ref'] = useRef(null);
  const [iconImg] = useImage('/icons/icon.webp');
  const STAGE_WIDTH = 1024,
    STAGE_HEIGHT = 768;
  const lessonName = '10 COMMON WORDS';
  const completedDate = '2024.04.18';

  const downloadCertificate = () => {
    if (!stageRef.current) return;

    const downloadURI = (uri: string, name: string) => {
      const link = document.createElement('a');
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      link.remove();
    };

    const dataURL = stageRef.current.toDataURL({ pixelRatio: 1 });
    downloadURI(dataURL, 'test.png');

    stageRef.current.toImage();
  };

  useEffect(() => {
    const updateScale = (width: number) => {
      const scale = width / STAGE_WIDTH;
      setScale({ x: scale, y: scale });
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updateScale(entry.contentBoxSize[0].inlineSize);
      }
    });

    const wrapperElmt = document.getElementById('wrapper');
    if (!wrapperElmt) return;
    resizeObserver.observe(wrapperElmt);
    updateScale(wrapperElmt.clientWidth);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <CanvasWrapper
      id="wrapper"
      width={STAGE_WIDTH * scale.x}
      height={STAGE_HEIGHT * scale.y}
      isMobile={!isDesktop}
    >
      <Flex className="tools" position="absolute" top={4} right={4} zIndex={1}>
        <IconButton
          colorScheme="green"
          aria-label="Download"
          icon={<DownloadIcon />}
          onClick={downloadCertificate}
        />
      </Flex>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={STAGE_WIDTH}
            height={STAGE_HEIGHT}
            fill="white"
          />
          <Rect
            width={STAGE_WIDTH - 100}
            height={STAGE_HEIGHT - 100}
            x={50}
            y={50}
            stroke="#b08945"
            strokeWidth={10}
          />
          <Text
            text="Lesson Completion Certificate"
            x={0}
            width={STAGE_WIDTH}
            y={100}
            align="center"
            fontSize={48}
          />
          <Text
            text={lessonName}
            x={0}
            width={STAGE_WIDTH}
            align="center"
            y={230}
            fontSize={24}
          />
          <Text
            text="Awarded for the successful completion of the German lesson."
            x={50}
            width={STAGE_WIDTH}
            y={290}
            fontSize={36}
            fontFamily="Parisienne"
            fontStyle="Italic"
            align="center"
          />
          <Rect
            x={100}
            y={340}
            height={2}
            width={STAGE_WIDTH - 200}
            fill="black"
          />
          <Text
            text={completedDate}
            x={0}
            width={STAGE_WIDTH}
            y={420}
            fontSize={20}
            align="center"
          />
          <Text
            text="EASY GERMAN"
            color="#38A169"
            x={0}
            width={STAGE_WIDTH}
            y={460}
            fontSize={24}
            align="center"
          />
          <Image
            image={iconImg}
            x={STAGE_WIDTH / 2 - 100}
            y={480}
            width={200}
            height={200}
          />
        </Layer>
      </Stage>
    </CanvasWrapper>
  );
}

export default CompletionPage;

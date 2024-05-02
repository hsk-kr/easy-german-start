import { ComponentProps, useEffect, useRef, useState } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { Image, Stage, Rect, Layer, Text } from 'react-konva';
import styled from '@emotion/styled';
import useImage from '../../hooks/useImage';
import useScreen from '../../hooks/useScreen';
import dayjs from 'dayjs';
import { downloadURIAsFile } from '../../libs/file';

let fontLoaded = false;

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
const Certificate = ({
  lessonTitle,
  completedDate,
}: {
  lessonTitle: string;
  completedDate: string;
}) => {
  const { isDesktop } = useScreen();
  const [scale, setScale] = useState({
    x: 1,
    y: 1,
  });
  const [loading, setLoading] = useState(true);
  const stageRef: ComponentProps<typeof Stage>['ref'] = useRef(null);
  const [iconImg] = useImage('/icons/icon.png');
  const STAGE_WIDTH = 1024,
    STAGE_HEIGHT = 768;
  const date = dayjs(completedDate).format('YYYY.MM.DD');

  const downloadCertificate = () => {
    if (!stageRef.current) return;

    const filename = `certificate${date.replace(/\./, '_')}.png`;
    const dataURL = stageRef.current.toDataURL({ pixelRatio: 1 });
    downloadURIAsFile(filename, dataURL, { revokeURI: true });
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

  useEffect(() => {
    if (fontLoaded) {
      setLoading(false);
      return;
    }

    const fontPath = `${document.URL.startsWith('https') ? 'https://' : 'http://'}${document.location.host}${import.meta.env.BASE_URL}/fonts/parisienne-latin-400-normal.woff2`;
    const fontParisienne = new FontFace('Parisienne', `url(${fontPath})`);

    document.fonts.add(fontParisienne);

    fontParisienne.load().then(() => {
      fontLoaded = true;
      setLoading(false);
    });
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
      {!loading && (
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
              text={lessonTitle}
              x={0}
              width={STAGE_WIDTH}
              align="center"
              y={230}
              fontSize={24}
            />
            <Text
              text="Awarded for the successful completion of the German lesson."
              x={0}
              width={STAGE_WIDTH}
              y={290}
              fontSize={36}
              fontFamily="Parisienne"
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
              text={date}
              x={0}
              width={STAGE_WIDTH}
              y={420}
              fontSize={20}
              align="center"
            />
            <Text
              text="EASY GERMAN START"
              color="#38A169"
              x={0}
              width={STAGE_WIDTH}
              y={460}
              fontSize={24}
              align="center"
            />
            <Image
              image={iconImg}
              x={STAGE_WIDTH / 2 - 75}
              y={520}
              width={150}
              height={150}
            />
          </Layer>
        </Stage>
      )}
    </CanvasWrapper>
  );
};
export default Certificate;

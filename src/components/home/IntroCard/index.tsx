import { Flex, Grid, Image, Text } from '@chakra-ui/react';
import { FaRegCheckCircle } from 'react-icons/fa';

interface IntroCardProps {
  className?: string;
  imgSrc: string;
  title: string;
  list?: string[];
  desc?: string;
  imgAlign?: 'left' | 'right';
}
const IntroCard = ({
  className,
  imgSrc,
  title,
  list,
  desc,
  imgAlign = 'left',
}: IntroCardProps) => {
  return (
    <Grid
      className={className}
      templateColumns="repeat(2, 1fr)"
      justifyContent="space-between"
      flexDir={imgAlign === 'left' ? 'row' : 'row-reverse'}
      gap={[8, 16, 32]}
    >
      <Image
        src={imgSrc}
        alt="introduce benefits of the app"
        gridColumn={imgAlign === 'left' ? '1/2' : undefined}
        gridRow="1/2"
        minHeight="140px"
      />
      <Flex
        flexDir="column"
        gap={4}
        textAlign={imgAlign === 'left' ? 'right' : 'left'}
        gridColumn={imgAlign === 'right' ? '1/2' : undefined}
        gridRow="1/2"
      >
        <Flex flexDir="column">
          <Text
            width="100%"
            fontSize={['x-large', 'xx-large']}
            fontWeight="bold"
          >
            {title}
          </Text>
          {desc && (
            <Text
              width="100%"
              fontSize={['md', 'lg']}
              transform={['translateY(-4px)', 'translateY(-8px)']}
              color="gray"
              fontStyle="italic"
            >
              {desc}
            </Text>
          )}
          {list && (
            <Flex
              width="100%"
              fontSize="sm"
              flexDir="column"
              marginTop={[2, 4]}
              gap={[2, 4]}
            >
              {list.map((e, idx) => (
                <Flex
                  gap={2}
                  key={idx}
                  justifyContent={
                    imgAlign === 'left' ? 'flex-end' : 'flex-start'
                  }
                  alignItems="center"
                >
                  <FaRegCheckCircle
                    color="green"
                    style={{
                      minWidth: 14,
                      minHeight: 14,
                    }}
                  />
                  {e}
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default IntroCard;

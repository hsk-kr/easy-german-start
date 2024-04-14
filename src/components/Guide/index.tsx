import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface GuideProps {
  message: string | string[];
}

const Guide = ({ message }: GuideProps) => {
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
      p={4}
    >
      {typeof message === 'object' ? (
        message.map((m) => <Text fontSize="x-large">{m}</Text>)
      ) : (
        <Text fontSize="x-large">{message}</Text>
      )}
      <Text fontSize="xx-large" mt={2}>
        Click to start!
      </Text>
    </Flex>
  );
};

export default Guide;

import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box
      w="100%"
      h={['96px', '48px']}
      color="white"
      bgColor="blackAlpha.600"
      fontSize="small"
    >
      <Container p={2} maxW="container.lg" height="100%">
        <Flex
          height="100%"
          alignItems="center"
          flexDirection={{
            base: 'column',
            lg: 'row',
          }}
          columnGap={4}
          justifyContent={{
            base: 'center',
            lg: 'space-between',
          }}
        >
          <Text align="center">
            Easy Start German - Unsure Where To Begin? Simply Solve Quizzes!
          </Text>
          <Link
            to="https://github.com/hsk-kr/easy-german-start"
            target="_blank"
          >
            <Flex alignItems="center" columnGap={2}>
              <FaGithub />
              <Text>hsk-kr • hsk.coder@gmail.com</Text>
            </Flex>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;

import { Avatar, Box, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Box bgColor="green" p={4}>
      <Avatar
        src="https://bit.ly/broken-link"
        size="sm"
        cursor="pointer"
        transition="all 0.2s"
        _hover={{
          opacity: 0.8,
        }}
      />
      <Text>Hello there!</Text>
    </Box>
  );
}

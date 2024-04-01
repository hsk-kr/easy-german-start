import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  Heading,
  Text,
  Button,
  Progress,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

interface QuizSectionProps {
  title?: string;
  items?: QuizSectionItemProps[];
}

interface QuizSectionItemProps {
  title?: string;
  desc?: string;
  done?: boolean;
  onNav?: VoidFunction;
}

function QuizSection({ title, items }: QuizSectionProps) {
  return (
    <Card border="1px solid black" borderColor="blackAlpha.100">
      <CardHeader>
        <Flex flexDir="column" rowGap={4}>
          <Heading size="md">{title}</Heading>
          <Tooltip label="1 / 24 - 60%">
            <Progress hasStripe value={60} maxW="240px" />
          </Tooltip>
        </Flex>
      </CardHeader>
      <CardBody>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gap={6}
        >
          {items?.map((item, itemIdx) => (
            <QuizSectionItem key={itemIdx} {...item} />
          ))}
        </Grid>
      </CardBody>
    </Card>
  );
}

function QuizSectionItem({
  title,
  desc,
  done = false,
  onNav,
}: QuizSectionItemProps) {
  const status = {
    color: done ? 'green' : 'gray',
    tooltip: done ? 'Completed' : 'Not Started',
  };
  const button = {
    color: done ? 'orange' : 'green',
    label: done ? 'Review' : 'Learn',
  };

  return (
    <Flex boxShadow="base" flexDir="column" p={4}>
      <Flex columnGap={2} alignItems="center">
        <Heading size="xs" textTransform="uppercase">
          {title}
        </Heading>
        <Tooltip label={status.tooltip}>
          <CheckCircleIcon color={status.color} />
        </Tooltip>
      </Flex>
      <Text pt="2" fontSize="sm" flexGrow={1}>
        {desc}
      </Text>
      <Box mt={2} justifySelf="flex-end">
        <Button colorScheme={button.color} size="sm" onClick={onNav}>
          {button.label}
        </Button>
      </Box>
    </Flex>
  );
}

export default QuizSection;

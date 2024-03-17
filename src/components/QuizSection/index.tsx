import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  Heading,
  Stack,
  StackDivider,
  Text,
  Button,
  Progress,
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
}

function QuizSection({ title, items }: QuizSectionProps) {
  return (
    <Card boxShadow="md">
      <CardHeader>
        <Box display="flex" flexDir="column" rowGap={4}>
          <Heading size="md">{title}</Heading>
          <Tooltip label="1 / 24 - 60%">
            <Progress hasStripe value={60} maxW="240px" />
          </Tooltip>
        </Box>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {items?.map((item, itemIdx) => (
            <QuizSectionItem key={itemIdx} {...item} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

function QuizSectionItem({ title, desc, done = false }: QuizSectionItemProps) {
  const status = {
    color: done ? 'green' : 'gray',
    tooltip: done ? 'Completed' : 'Not Started',
  };
  const button = {
    color: done ? 'orange' : 'green',
    label: done ? 'Review' : 'Learn',
  };

  return (
    <Box>
      <Box display="flex" columnGap={2} alignItems="center">
        <Heading size="xs" textTransform="uppercase">
          {title}
        </Heading>
        <Tooltip label={status.tooltip}>
          <CheckCircleIcon color={status.color} />
        </Tooltip>
      </Box>
      <Text pt="2" fontSize="sm">
        {desc}
      </Text>
      <Box mt={2}>
        <Button colorScheme={button.color} size="sm">
          {button.label}
        </Button>
      </Box>
    </Box>
  );
}

export default QuizSection;

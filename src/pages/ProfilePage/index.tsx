import { Box, Container } from '@chakra-ui/react';
import ActivityChart from '../../components/ActivityChart';
import DefaultTemplate from '../../components/DefaultTemplate';
import RecentActivities from '../../components/RecentActivities';
import DataLoader from '../../components/DataLoader';
import useHistory from '../../hooks/useHistory';

function ProfilePage() {
  const { histories } = useHistory();

  return (
    <DefaultTemplate>
      <Container maxW="container.lg" p={0} position="relative">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          transform="translateY(calc(-100% - 8px))"
        >
          <DataLoader />
        </Box>
        {histories !== undefined && <ActivityChart histories={histories} />}
        <Box h={8}></Box>
        <RecentActivities />
      </Container>
    </DefaultTemplate>
  );
}

export default ProfilePage;

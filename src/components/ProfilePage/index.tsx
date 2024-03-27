import { Container } from '@chakra-ui/react';
import ActivityChart from '../ActivityChart';
import DefaultTemplate from '../DefaultTemplate';
import RecentActivities from '../RecentActivities';

function ProfilePage() {
  return (
    <DefaultTemplate>
      <Container maxW="container.lg" p={0}>
        <ActivityChart />
        <div style={{ height: 32 }} />
        <RecentActivities />
      </Container>
    </DefaultTemplate>
  );
}

export default ProfilePage;

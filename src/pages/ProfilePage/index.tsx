import { Container } from '@chakra-ui/react';
import ActivityChart from '../../components/ActivityChart';
import DefaultTemplate from '../../components/DefaultTemplate';
import RecentActivities from '../../components/RecentActivities';

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

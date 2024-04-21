import { Container } from '@chakra-ui/react';
import ActivityChart from '../../components/ActivityChart';
import DefaultTemplate from '../../components/DefaultTemplate';
import RecentActivities from '../../components/RecentActivities';
import useHistory from '../../hooks/useHistory';

function ProfilePage() {
  const { histories } = useHistory();

  return (
    <DefaultTemplate>
      <Container maxW="container.lg" p={0}>
        {histories !== undefined && <ActivityChart histories={histories} />}
        <div style={{ height: 32 }} />
        <RecentActivities />
      </Container>
    </DefaultTemplate>
  );
}

export default ProfilePage;

import { Box, Container } from '@chakra-ui/react';
import ActivityChart from '../../components/profile/ActivityChart';
import DefaultTemplate from '../../components/common/DefaultTemplate';
import RecentActivities from '../../components/profile/RecentActivities';
import DataLoader from '../../components/common/DataLoader';
import useHistory from '../../hooks/useHistory';
import { useCallback, useState } from 'react';
import FullscreenLoading from '../../components/common/FullscreenLoading';

function ProfilePage() {
  const [cntLoaded, setCntLoaded] = useState(0);
  const { histories } = useHistory();

  const load = useCallback(() => {
    setCntLoaded((prevCntLoaded) => prevCntLoaded + 1);
  }, []);

  const loading = cntLoaded < 2;

  return (
    <DefaultTemplate>
      <FullscreenLoading useRandomInitialLoadingTime visible={loading} />
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
        {histories !== undefined && (
          <ActivityChart histories={histories} onLoad={load} />
        )}
        <Box h={8}></Box>
        <RecentActivities onLoad={load} />
      </Container>
    </DefaultTemplate>
  );
}

export default ProfilePage;

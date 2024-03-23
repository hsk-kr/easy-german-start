import ActivityChart from '../ActivityChart';
import DefaultTemplate from '../DefaultTemplate';
import RecentActivities from '../RecentActivities';

function ProfilePage() {
  return (
    <DefaultTemplate>
      <ActivityChart />
      <div style={{ height: 32 }} />
      <RecentActivities />
    </DefaultTemplate>
  );
}

export default ProfilePage;

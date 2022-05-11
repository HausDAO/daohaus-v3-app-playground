import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import ActivitiesFeed from '../components/activitiesFeed';
import MainViewLayout from '../components/mainViewLayout';
import MemberInfo from '../components/memberInfo';
import OverviewBanner from '../components/overviewBanner';
import OverviewCard from '../components/overviewCard';
import ServicesBanner from '../components/servicesBanner';
import { getDaoActivites } from '../utils/activities';

const Overview = React.memo(function overview({
  daoOverview,
  activities,
  isMember,
  members,
  daoMember,
  customTerms,
  daoMetaData,
  daoVaults,
}) {
  return (
    <MainViewLayout header='Overview' customTerms={customTerms} isDao>
      <Box w='100%'>
        <Flex wrap='wrap'>
          {overview && (
            <Box
              w={['100%', null, null, null, '50%']}
              pr={[0, null, null, null, 6]}
              mb={6}
            >
              <OverviewCard
                daoOverview={daoOverview}
                isMember={isMember}
                members={members}
                daoVaults={daoVaults}
              />
            </Box>
          )}
        </Flex>
      </Box>
    </MainViewLayout>
  );
});

export default Overview;

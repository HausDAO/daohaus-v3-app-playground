import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import MainViewLayout from '../components/mainViewLayout';
// import MemberInfo from '../components/memberInfo';
import OverviewCard from '../components/overviewCard';

const Overview = React.memo(function overview({
  daoOverview,
  isMember,
  members,
  // daoMember,
  daoVaults,
}) {
  return (
    <MainViewLayout header='Overview' isDao>
      <Box w='100%'>
        <Flex wrap='wrap'>
          {overview && (
            <Box
              w={['100%', null, null, null, '100%']}
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

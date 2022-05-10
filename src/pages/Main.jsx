import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';

import { useInjectedProvider } from '../contexts/InjectedProviderContext';
import { useUser } from '../contexts/UserContext';
import FeaturedDaos from '../components/featuredDaos';
import HubProfileCard from '../components/hubProfileCard';
import HubSignedOut from '../components/hubSignedOut';
import MainViewLayout from '../components/mainViewLayout';
import NewsFeed from '../components/newsFeed';
import NetworkList from '../components/networkList';

const Main = () => {
  const { address } = useInjectedProvider();

  return (
    <MainViewLayout header='Hub'>
      <Flex wrap='wrap'>
        <Box
          w={['100%', null, null, null, '60%']}
          pr={[0, null, null, null, 6]}
          pb={6}
        >
          {address ? (
            <>
              <HubProfileCard address={address} key={address} />
              <NetworkList />
            </>
          ) : (
            <HubSignedOut />
          )}
        </Box>
      </Flex>
    </MainViewLayout>
  );
};

export default Main;

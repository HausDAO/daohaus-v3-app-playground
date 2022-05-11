import React from 'react';
import { Flex, Box, Skeleton } from '@chakra-ui/react';
import { format } from 'date-fns';
import { utils } from 'ethers';

import AddressAvatar from './addressAvatar';
import ProfileMenu from './profileMenu';
import TextBox from './TextBox';

const MemberInfoGuts = ({ member, showMenu, hideCopy }) => {
  return (
    <>
      {member && (
        <>
          <Flex justify='space-between'>
            <AddressAvatar addr={member.memberAddress} hideCopy={hideCopy} />
            {showMenu ? <ProfileMenu member={member} /> : null}
          </Flex>
          <Flex w='100%' direction='column' mt={3}>
            <Box w={['100%']}>
              <TextBox size='xs'>Shares</TextBox>
              <Skeleton isLoaded={member?.shares}>
                <TextBox variant='value' size='xl'>
                  {utils.formatEther(member?.shares || 0)}
                </TextBox>
              </Skeleton>
            </Box>
            <Box w={['100%']} mt={3}>
              <TextBox size='xs'>Loot</TextBox>
              <Skeleton isLoaded={member?.loot}>
                <TextBox variant='value' size='xl'>
                  {utils.formatEther(member?.loot || 0)}
                </TextBox>
              </Skeleton>
            </Box>
            <Box w={['100%']} mt={3}>
              <TextBox size='xs'>Anniversary</TextBox>
              <Skeleton isLoaded={member?.createdAt}>
                <TextBox variant='value' size='xl'>
                  {format(new Date(member?.createdAt * 1000), 'MMMM d')}
                </TextBox>
              </Skeleton>
            </Box>

            <Box w={['100%']} mt={3}>
              <TextBox size='xs'>Vote Count</TextBox>
              <Skeleton isLoaded={member?.createdAt}>
                <TextBox variant='value' size='xl'>
                  {member?.votes.length}
                </TextBox>
              </Skeleton>
            </Box>

            {member?.delegatingTo !== member?.memberAddress && (
              <Box w={['100%']} mt={3}>
                <TextBox size='xs'>Delegating to</TextBox>
                <Skeleton isLoaded={member?.createdAt}>
                  <TextBox variant='value' size='xl'>
                    <AddressAvatar
                      addr={member?.delegatingTo}
                      hideCopy={hideCopy}
                    />
                  </TextBox>
                </Skeleton>
              </Box>
            )}
          </Flex>
        </>
      )}
    </>
  );
};

export default MemberInfoGuts;

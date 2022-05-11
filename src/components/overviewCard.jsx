import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Flex, Box, Skeleton, Button, Avatar, Spinner } from '@chakra-ui/react';
import makeBlockie from 'ethereum-blockies-base64';
import { utils } from 'ethers';

import ContentBox from './ContentBox';
import TextBox from './TextBox';
import VaultTotal from './vaultTotal';
import DocLink from './docLink';

import { getActiveMembers } from '../utils/dao';
import { themeImagePath } from '../utils/metadata';

const OverviewCard = ({ daoOverview, members }) => {
  const { daochain, daoid } = useParams();
  // const { daoOverview.metaData, customTerms } = useMetaData();
  const [activeMembers, setActiveMembers] = useState(null);
  // const totalShares = utils.commify(daoOverview?.totalShares || 0);
  const totalShares = utils.formatEther(daoOverview?.totalShares || 0);

  // const totalLoot = utils.commify(daoOverview?.totalLoot || 0);
  const totalLoot = utils.formatEther(daoOverview?.totalLoot || 0);

  const history = useHistory();

  useEffect(() => {
    if (members?.length) {
      setActiveMembers(getActiveMembers(members));
    }
  }, [members]);

  return (
    <Box>
      <TextBox size='sm' color='whiteAlpha.900'>
        Details
      </TextBox>
      <ContentBox mt={2} w='100%'>
        <Flex direction='row' align='center'>
          <Flex align='center'>
            <Avatar
              src={
                daoOverview?.metaData?.avatarImg
                  ? themeImagePath(daoOverview?.metaData.avatarImg)
                  : makeBlockie(daoid || '0x0')
              }
              mr={6}
            />
            <Box fontSize='2xl' fontWeight={700} fontFamily='heading'>
              {daoOverview?.metaData?.name || '--'}
            </Box>
          </Flex>
        </Flex>
        <Box mt={6}>
          {daoOverview?.metaData?.description
            ? daoOverview?.metaData.description
            : '--'}
        </Box>
        <Flex direction='row' w='100%' justify='space-between' mt={6}>
          <Box>
            <TextBox size='xs' title={'Members'}>
              {`Active Members`}
            </TextBox>
            <TextBox size='lg' variant='value'>
              {activeMembers ? activeMembers.length : <Spinner size='sm' />}
            </TextBox>
          </Box>
          <Box>
            <TextBox size='xs'>Shares</TextBox>
            <Skeleton isLoaded={totalShares}>
              <TextBox size='lg' variant='value'>
                {totalShares || '--'}
              </TextBox>
            </Skeleton>
          </Box>
          <Box>
            <TextBox size='xs'>Loot</TextBox>
            <Skeleton isLoaded={totalLoot}>
              <TextBox size='lg' variant='value'>
                {totalLoot || '--'}
              </TextBox>
            </Skeleton>
          </Box>
          <Box>
            <TextBox size='xs' title={'Proposals'}>
              {`Proposals`}
            </TextBox>
            <TextBox size='lg' variant='value'>
              {daoOverview?.proposalCount}
            </TextBox>
          </Box>
        </Flex>
        {/* <Box mt={6}>
          {daoVaults && (
            <>
              <TextBox size='sm' title={'Bank'}>
                {'vault total'}
              </TextBox>
              <VaultTotal vaults={daoVaults} />
            </>
          )}
        </Box> */}
        <Flex mt={6}>
          <Button
            variant='outline'
            mr={6}
            onClick={() => history.push(`/dao/${daochain}/${daoid}/vaults`)}
            value='bank'
            title={'Bank'}
          >
            {`View bank`}
          </Button>
          <Button
            mr={6}
            onClick={() => history.push(`/dao/${daochain}/${daoid}/proposals`)}
            value='proposals'
            title={'Proposals'}
          >
            {`View proposals`}
          </Button>
        </Flex>
      </ContentBox>
    </Box>
  );
};

export default OverviewCard;

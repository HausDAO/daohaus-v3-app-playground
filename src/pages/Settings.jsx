import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Icon, Link } from '@chakra-ui/react';

import DaoContractSettings from '../components/daoContractSettings';
import DaoMetaOverview from '../components/daoMetaOverview';
import MainViewLayout from '../components/mainViewLayout';
import TextBox from '../components/TextBox';
import { format } from 'date-fns';
import AddressAvatar from '../components/addressAvatar';
import { supportedChains } from '../utils/chain';
import { RiExternalLinkLine } from 'react-icons/ri';
import ContentBox from '../components/ContentBox';

const ShamanCard = ({ shaman, link }) => {
  return (
    <Flex h='60px' align='center' justify='space-between'>
      <Box
        fontFamily='mono'
        variant='value'
        fontSize='sm'
        as={Link}
        href={link}
        target='_blank'
        rel='noreferrer noopener'
      >
        <Flex color='secondary.400' align='center'>
          <Box>{shaman.shamanAddress}</Box>
          <Icon as={RiExternalLinkLine} color='secondary.400' mx={2} />
        </Flex>
      </Box>
      <Box
        w={['25%', null, null, '15%']}
        fontFamily='mono'
        textAlign={['right', null, null, 'center']}
      >
        Permission Level {shaman.permissions}
      </Box>

      <Box d={['none', null, null, 'inline-block']} fontFamily='mono'>
        Created on{' '}
        {format(new Date(+shaman.createdAt * 1000), 'MMM. d, yyyy') || '--'}
      </Box>
    </Flex>
  );
};

const Settings = ({ overview }) => {
  const { daochain, daoid } = useParams();

  return (
    <MainViewLayout header='Settings' isDao>
      <Flex wrap='wrap'>
        <Box
          w={['100%', null, null, null, '100%']}
          pr={[0, null, null, null, 6]}
          pb={6}
        >
          <TextBox size='xs'>Dao Contract Settings</TextBox>
          <DaoContractSettings overview={overview} />
          {overview?.metaData && (
            <>
              <TextBox size='xs'>DAO Metadata</TextBox>
              <DaoMetaOverview daoMetaData={overview.metaData} />
            </>
          )}
          {overview?.shaman.length > 0 && (
            <>
              <TextBox size='xs' mt={2}>
                Shamans
              </TextBox>
              <ContentBox d='flex' w='100%' mt={2} flexDirection='column'>
                {overview.shaman.map(shaman => {
                  return (
                    <ShamanCard
                      key={shaman.shamanAddress}
                      shaman={shaman}
                      link={`${supportedChains[daochain].block_explorer}/address/${shaman.shamanAddress}`}
                    />
                  );
                })}
              </ContentBox>
            </>
          )}
        </Box>
      </Flex>
    </MainViewLayout>
  );
};

export default Settings;

import React from 'react';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiExternalLinkLine } from 'react-icons/ri';
import { FaCopy } from 'react-icons/fa';
import {
  Flex,
  Box,
  Skeleton,
  Link,
  Icon,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import { format, formatDuration } from 'date-fns';
import { utils } from 'ethers';

import ContentBox from './ContentBox';
import TextBox from './TextBox';
import { calcSeconds, formatPeriods, truncateAddr } from '../utils/general';
import { getTerm, getTitle } from '../utils/metadata';
import { supportedChains } from '../utils/chain';

const DaoContractSettings = ({ overview }) => {
  const { daochain, daoid } = useParams();
  const daoAddress = useBreakpointValue({
    base: truncateAddr(daoid),
    md: daoid,
  });

  return (
    <ContentBox d='flex' w='100%' mt={2} flexDirection='column'>
      <Stack spacing={4}>
        <Flex justify='space-between'>
          <TextBox size='xs'>Dao Contract</TextBox>
          <Skeleton isLoaded={daoid}>
            <Box
              fontFamily='mono'
              variant='value'
              fontSize='sm'
              as={Link}
              href={`${supportedChains[daochain].block_explorer}/address/${daoid}`}
              target='_blank'
              rel='noreferrer noopener'
            >
              <Flex color='secondary.400' align='center'>
                <Box>{daoAddress}</Box>
                <Icon as={RiExternalLinkLine} color='secondary.400' mx={2} />
              </Flex>
            </Box>
          </Skeleton>
        </Flex>

        <Flex justify='space-between'>
          <TextBox size='xs'>Safe COntract</TextBox>
          <Skeleton isLoaded={daoid}>
            <Box
              fontFamily='mono'
              variant='value'
              fontSize='sm'
              as={Link}
              href={`${supportedChains[daochain].block_explorer}/address/${overview?.safeAddress}`}
              target='_blank'
              rel='noreferrer noopener'
            >
              <Flex color='secondary.400' align='center'>
                <Box>{overview?.safeAddress}</Box>
                <Icon as={RiExternalLinkLine} color='secondary.400' mx={2} />
              </Flex>
            </Box>
          </Skeleton>
        </Flex>

        <Flex justify='space-between'>
          <TextBox size='xs'>Loot Contract</TextBox>
          <Skeleton isLoaded={daoid}>
            <Box
              fontFamily='mono'
              variant='value'
              fontSize='sm'
              as={Link}
              href={`${supportedChains[daochain].block_explorer}/address/${overview?.lootAddress}`}
              target='_blank'
              rel='noreferrer noopener'
            >
              <Flex color='secondary.400' align='center'>
                <Box>{overview?.lootAddress}</Box>
                <Icon as={RiExternalLinkLine} color='secondary.400' mx={2} />
              </Flex>
            </Box>
          </Skeleton>
        </Flex>
        <Flex wrap='wrap'>
          <Box as={Stack} w={['100%', null, null, '50%']} spacing={2}>
            <TextBox size='xs'>Share Token Name</TextBox>
            <TextBox variant='value' size='xl' my={2}>
              {overview?.shareTokenName || '--'}
            </TextBox>
          </Box>
          <Stack spacing={2}>
            <TextBox size='xs'>Share Token Symbol</TextBox>
            <TextBox variant='value' size='xl' my={2}>
              {overview?.shareTokenSymbol || '--'}
            </TextBox>
          </Stack>
        </Flex>
        <Flex wrap='wrap'>
          <Box as={Stack} w={['100%', null, null, '50%']} spacing={2}>
            <TextBox size='xs' title={'Proposal'}>
              {`Required Proposal Offering`}
            </TextBox>
            <TextBox variant='value' size='xl'>
              {utils.formatEther(overview?.proposalDeposit || 0)} shares
            </TextBox>
          </Box>
          <Stack spacing={2}>
            <TextBox size='xs'>Self-Sponsor Threshold</TextBox>
            <TextBox variant='value' size='xl'>
              {utils.formatEther(overview?.sponsorThreshold || 0)} shares
            </TextBox>
          </Stack>
        </Flex>
        <Flex wrap='wrap'>
          <Box as={Stack} w={['100%', null, null, '50%']} spacing={2}>
            <TextBox size='xs'>Voting Period</TextBox>
            <TextBox variant='value' size='xl' my={2}>
              {Number((overview?.votingPeriod || 0) / 60).toFixed(2)} minutes
            </TextBox>
          </Box>
          <Stack spacing={2}>
            <TextBox size='xs'>Grace Period</TextBox>
            <TextBox variant='value' size='xl' my={2}>
              {Number((overview?.gracePeriod || 0) / 60).toFixed(2)} minutes
            </TextBox>
          </Stack>
        </Flex>
        <Flex wrap='wrap'>
          <Box as={Stack} w={['100%', null, null, '50%']} spacing={2}>
            <TextBox size='xs'>Quorum Percent</TextBox>
            <TextBox variant='value' size='xl' my={2}>
              {Number((overview?.quorumPercent * 100).toFixed(2))} %
            </TextBox>
          </Box>
          <Stack spacing={2}>
            <TextBox size='xs'>Min Retention Percent</TextBox>
            <TextBox variant='value' size='xl' my={2}>
              {Number((overview?.minRetentionPercent * 100).toFixed(2))} %
            </TextBox>
          </Stack>
        </Flex>
        <Flex wrap='wrap'>
          <Box as={Stack} spacing={2} w={['100%', null, null, '50%']}>
            <TextBox size='xs'>Summoned</TextBox>
            <TextBox variant='value' size='xl'>
              {overview
                ? format(new Date(+overview?.createdAt * 1000), 'MMMM d, yyyy')
                : '--'}
            </TextBox>
          </Box>
        </Flex>
      </Stack>
    </ContentBox>
  );
};

export default DaoContractSettings;

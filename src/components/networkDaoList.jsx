import React, { useEffect, useState } from 'react';
import { FiAlertOctagon } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Link,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Icon,
} from '@chakra-ui/react';
import makeBlockie from 'ethereum-blockies-base64';

import { themeImagePath } from '../utils/metadata';
import { truncateAddr } from '../utils/general';

const LinkForVersion = ({ children, dao, network }) => {
  console.log('network', network);
  return (
    <Link
      as={RouterLink}
      to={`/dao/${network.networkID}/${dao.id}`}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      {children}
    </Link>
  );
};

const NetworkDaoList = ({ data, network, searchTerm, index }) => {
  const [sortedDaoList, setSortedDaoList] = useState([]);

  useEffect(() => {
    setSortedDaoList(
      data
        ?.filter(dao => {
          return searchTerm
            ? dao.dao.metaData?.name
                .toLowerCase()
                .indexOf(searchTerm.toLowerCase()) > -1
            : true;
        })
        .sort((a, b) => {
          return !a.dao.metaData
            ? -100
            : +b.dao.metaData?.version - +a.dao.metaData?.version;
        }),
    );
  }, [searchTerm]);

  const renderDaoAvatar = (dao, network) => {
    return (
      <Box key={dao.id} mr={3} pb={3}>
        <LinkForVersion dao={dao} unReadCount={0} network={network}>
          <Avatar
            name={
              dao.metaData?.name ? dao.metaData.name.substr(0, 1) : 'no name'
            }
            src={makeBlockie(dao.id)}
            mb={3}
            bg='black'
          ></Avatar>
          <Box
            fontFamily='mono'
            fontSize='sm'
            style={{
              width: '120px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {dao.metaData?.name || truncateAddr(dao?.id)}
          </Box>
        </LinkForVersion>
      </Box>
    );
  };

  return (
    <>
      <Accordion allowToggle allowMultiple index={[0, 1, 2]}>
        <AccordionItem border={0} isDisabled={sortedDaoList.length < 1}>
          <AccordionButton>
            <Text fontFamily='mono' fontSize='sm' flex='1' textAlign='left'>
              {`${network?.name} (${sortedDaoList.length})`}
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Flex
              direction='row'
              overflowX='scroll'
              mb={6}
              maxW='100%'
              css={{
                /* Hide scrollbar for IE and Edge */
                '&::MsOverflowStyle': 'none',
                /* Hide scrollbar for Chrome/Opera */
                '&::WebkitScrollbar': {
                  display: 'none',
                },
                /* Hide scrollbar for Firefox */
                '&::ScrollbarWidth': 'none',
              }}
            >
              {sortedDaoList.map(dao => renderDaoAvatar(dao.dao, network))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default NetworkDaoList;

import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  RiDiscordFill,
  RiTelegramFill,
  RiTwitterFill,
  RiGlobeLine,
  RiMediumFill,
  RiLinksLine,
} from 'react-icons/ri';
import { Flex, Image, Link, Icon, Stack, Badge } from '@chakra-ui/react';

import ContentBox from './ContentBox';
import TextBox from './TextBox';
import { themeImagePath } from '../utils/metadata';

const DaoMetaOverview = ({ daoMetaData }) => {
  return (
    <Flex as={ContentBox} mt={2} direction='column' w='100%'>
      {daoMetaData && (
        <>
          <Flex>
            <Image
              src={
                daoMetaData.avatarImg
                  ? themeImagePath(daoMetaData.avatarImg)
                  : null
              }
              h='50px'
              w='50px'
            />
            <TextBox variant='value' size='xl' ml={4}>
              {daoMetaData.name}
            </TextBox>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default DaoMetaOverview;

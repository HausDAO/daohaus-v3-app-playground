import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import { useDao } from '../contexts/DaoContext';
// import { useDaoMember } from '../contexts/DaoMemberContext';
// import { useMetaData } from '../contexts/MetaDataContext';
// import { useToken } from '../contexts/TokenContext';

import Layout from '../components/layout';
import Members from '../pages/Members';
// import Meta from '../pages/Meta';
// import MetaAudit from '../pages/MetaAudit';
import Overview from '../pages/Overview';
// import Profile from '../pages/Profile';
// import Proposal from '../pages/Proposal';
// import Proposals from '../pages/Proposals';
// import Settings from '../pages/Settings';
// import Treasury from '../pages/Treasury';
// import Vaults from '../pages/Vaults';

const DaoRouter = () => {
  const { path } = useRouteMatch();
  // const { currentDaoTokens } = useToken();
  const {
    isCorrectNetwork,
    daoOverview,
    daoMembers,
    daoProposals,
    daoVaults,
  } = useDao();
  // const { isMember, daoMember, delegate } = useDaoMember();

  const { daoid, daochain } = useParams();
  // const { daoMetaData, customTerms, refetchMetaData } = useMetaData();
  const dao = {
    daoID: daoid,
    chainID: daochain,
    daoProposals,
    daoVaults,
  };

  return (
    <Layout dao={dao}>
      <Switch>
        <Route exact path={`${path}/`}>
          <Overview
            proposals={daoProposals}
            isCorrectNetwork={isCorrectNetwork}
            daoOverview={daoOverview}
            members={daoMembers}
            daoVaults={daoVaults}
          />
        </Route>
        <Route exact path={`${path}/members`}>
          <Members
            members={daoMembers}
            overview={daoOverview}
            daoMembers={daoMembers}
          />
        </Route>
        {/* <Route exact path={`${path}/proposals`}>
          <Proposals
            proposals={daoActivities?.proposals}
            overview={daoOverview}
            activities={daoActivities}
            customTerms={customTerms}
          />
        </Route> */}
        {/* <Route exact path={`${path}/vaults`}>
          <Vaults
            currentDaoTokens={currentDaoTokens}
            overview={daoOverview}
            customTerms={customTerms}
            daoVaults={daoVaults}
          />
        </Route>
        <Route exact path={`${path}/vaults/treasury`}>
          <Treasury
            currentDaoTokens={currentDaoTokens}
            overview={daoOverview}
            customTerms={customTerms}
            daoMember={daoMember}
            daoVaults={daoVaults}
          />
        </Route> */}

        {/* <Route exact path={`${path}/settings`}>
          <Settings
            overview={daoOverview}
            daoMetaData={daoMetaData}
            customTerms={customTerms}
          />
        </Route>
        <Route exact path={`${path}/settings/meta`}>
          <Meta
            daoMetaData={daoMetaData}
            isMember={isMember}
            refetchMetaData={refetchMetaData}
          />
        </Route> */}

        {/* <Route exact path={`${path}/proposals/:propid`}>
          <Proposal
            overview={daoOverview}
            daoMember={daoMember}
            activities={daoActivities}
            customTerms={customTerms}
            daoProposals={daoProposals}
            delegate={delegate}
          />
        </Route>
        <Route exact path={`${path}/profile/:userid`}>
          <Profile
            members={daoMembers}
            overview={daoOverview}
            daoTokens={currentDaoTokens}
            activities={daoActivities}
            daoMember={daoMember}
          />
        </Route> */}
      </Switch>
    </Layout>
  );
};

export default DaoRouter;

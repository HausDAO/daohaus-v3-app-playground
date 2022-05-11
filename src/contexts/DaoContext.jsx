import React, {
  useEffect,
  useContext,
  createContext,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';

import { TokenProvider } from './TokenContext';
import { TXProvider } from './TXContext';
import { useInjectedProvider } from './InjectedProviderContext';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { bigGraphQuery } from '../utils/theGraph';
import { supportedChains } from '../utils/chain';
import { DaoMemberProvider } from './DaoMemberContext';

export const DaoContext = createContext();

export const DaoProvider = ({ children }) => {
  const { daoid, daochain } = useParams();
  const { injectedChain, address } = useInjectedProvider();

  const daoNetworkData = supportedChains[daochain];
  const isCorrectNetwork = daochain === injectedChain?.chainId;

  const [daoProposals, setDaoProposals] = useSessionStorage(
    `proposals-${daoid}`,
    null,
  );
  const [daoOverview, setDaoOverview] = useSessionStorage(
    `overview-${daoid}`,
    null,
  );
  const [daoMembers, setDaoMembers] = useSessionStorage(
    `members-${daoid}`,
    null,
  );

  const hasPerformedBatchQuery = useRef(false);
  const currentDao = useRef(null);

  useEffect(() => {
    // This condition is brittle. If one request passes, but the rest fail
    // this stops the app from fetching. We'll need something better later on.
    if (daoProposals || daoOverview || daoMembers) {
      return;
    }
    if (
      !daoid ||
      !daochain ||
      !daoNetworkData ||
      hasPerformedBatchQuery.current
    ) {
      return;
    }

    const bigQueryOptions = {
      args: {
        daoID: daoid.toLowerCase(),
        chainID: daochain,
      },
      getSetters: [
        { getter: 'getOverview', setter: setDaoOverview },
        {
          getter: 'getProposals',
          setter: setDaoProposals,
        },
        { getter: 'getMembers', setter: setDaoMembers },
      ],
    };

    bigGraphQuery(bigQueryOptions);
    hasPerformedBatchQuery.current = true;
  }, [
    daoid,
    daochain,
    daoNetworkData,
    daoMembers,
    daoOverview,
    daoProposals,
    setDaoMembers,
    setDaoOverview,
    setDaoProposals,
    isCorrectNetwork,
  ]);

  const refetch = async () => {
    const bigQueryOptions = {
      args: {
        daoID: daoid.toLowerCase(),
        chainID: daochain,
      },
      getSetters: [
        { getter: 'getOverview', setter: { setDaoOverview } },
        {
          getter: 'getProposals',
          setter: { setDaoProposals },
        },
        { getter: 'getMembers', setter: setDaoMembers },
      ],
    };
    currentDao.current = null;
    bigGraphQuery(bigQueryOptions);
  };

  return (
    <DaoContext.Provider
      value={{
        daoProposals,
        daoMembers,
        daoOverview,
        isCorrectNetwork,
        refetch,
        hasPerformedBatchQuery, // Ref, not state
      }}
    >
      <TokenProvider>
        <DaoMemberProvider
          daoMembers={daoMembers}
          address={address}
          overview={daoOverview}
        >
          <TXProvider>{children}</TXProvider>
        </DaoMemberProvider>
      </TokenProvider>
    </DaoContext.Provider>
  );
};
export const useDao = () => {
  const {
    daoProposals,
    daoMembers,
    daoOverview,
    isCorrectNetwork,
    refetch,
    hasPerformedBatchQuery, // Ref, not state
  } = useContext(DaoContext);
  return {
    daoProposals,
    daoMembers,
    daoOverview,
    isCorrectNetwork,
    refetch,
    hasPerformedBatchQuery,
  };
};

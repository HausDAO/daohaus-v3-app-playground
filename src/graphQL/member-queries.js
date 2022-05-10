import { gql } from 'apollo-boost';

export const USER_MEMBERSHIPS = gql`
  query membersUser($memberAddress: String!) {
    members(where: { memberAddress: $memberAddress, exists: true }) {
      id
      memberAddress
      moloch {
        id
        version
      }
    }
  }
`;

export const HUB_MEMBERSHIPS = gql`
  query membersHub($memberAddress: String!) {
    membersHub: members(where: { memberAddress: $memberAddress }) {
      id
      createdAt
      memberAddress
      delegatingTo
      delegateShares
      shares
      loot
      dao {
        id
        metaData {
          name
        }
      }
    }
  }
`;
export const MEMBERS_LIST = gql`
  query membersList($contractAddr: String!, $skip: Int) {
    daoMembers: members(
      where: { molochAddress: $contractAddr }
      orderBy: shares
      orderDirection: desc
      first: 1000
      skip: $skip
    ) {
      id
      delegateKey
      shares
      loot
      kicked
      jailed
      tokenTribute
      didRagequit
      memberAddress
      exists
      createdAt
      moloch {
        id
        totalShares
        depositToken {
          tokenAddress
          symbol
          decimals
        }
      }
      highestIndexYesVote {
        proposalId
        proposalIndex
      }
      tokenBalances {
        id
        tokenBalance
        token {
          id
          tokenAddress
          symbol
          decimals
        }
      }
      submissions {
        id
        proposalIndex
        yesVotes
        noVotes
        processed
        didPass
        cancelled
      }
    }
  }
`;

export const RAGE_KICK_POLL = gql`
  query membersList($contractAddr: String!, $memberAddr: String!) {
    members(
      where: { molochAddress: $contractAddr, memberAddress: $memberAddr }
    ) {
      memberAddress
      loot
    }
  }
`;

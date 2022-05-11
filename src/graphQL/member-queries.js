import { gql } from 'apollo-boost';

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
      where: { dao: $contractAddr }
      orderBy: shares
      orderDirection: desc
      first: 1000
      skip: $skip
    ) {
      id
      createdAt
      memberAddress
      shares
      loot
      delegatingTo
      delegateShares
      votes {
        createdAt
        approved
        balance
      }
    }
  }
`;

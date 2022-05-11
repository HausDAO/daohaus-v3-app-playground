import { gql } from 'apollo-boost';

const baseListFields = `
  id
  aborted
  applicant
  cancelled
  cancelledAt
  createdAt
  details
  didPass
  gracePeriodEnds
  guildkick
  isMinion
  lootRequested
  memberAddress
  newMember
  noShares
  noVotes
  paymentRequested
  paymentTokenDecimals
  paymentTokenSymbol
  processed
  processor
  processedAt
  proposer
  proposalId
  proposalIndex
  sharesRequested
  sponsored
  sponsor
  sponsoredAt
  startingPeriod
  trade
  tributeOffered
  tributeTokenDecimals
  tributeTokenSymbol
  tributeToken
  votingPeriodStarts
  votingPeriodEnds
  whitelist
  yesShares
  yesVotes
  molochAddress
  molochVersion
  minionAddress
  uberHausMinionExecuted
  moloch {
    gracePeriodLength
    periodDuration
    version
    votingPeriodLength
  }
  votes {
    id
    memberAddress
    memberPower
    uintVote
    createdAt
    molochAddress
  }
  escrow {
    tokenAddresses
    tokenTypes
    tokenIds
    amounts
  }
  `;

export const PROPOSALS_LIST_IS_MEMBER = gql`
  query proposalsMember($contractAddr: String!, $skip: Int, $memberAddress: String!) {
    proposals(
      where: { molochAddress: $contractAddr }
      orderBy: proposalId
      orderDirection: desc
      first: 1000
      skip: $skip
    ) {
      ${baseListFields}
      votes(where: { memberAddress: $memberAddress }) {
        id
        memberAddress
      }
    }
  }
`;

export const PROPOSAL_LIST = gql`
  query proposals($contractAddr: String!) {
    proposals(where: { dao: $contractAddr }) {
      id
      createdAt
      createdBy
      proposalId
      prevProposalId
      proposalDataHash
      proposalData
      details
      title
      proposalType
      contentURI
      contentURIType
      sponsored
      selfSponsor
      sponsor
      votingPeriod
      votingStarts
      votingEnds
      graceEnds
      expiration
      cancelled
      yesBalance
      noBalance
      yesVotes
      noVotes
      processed
      actionFailed
      passed
      proposalOffering
      maxTotalSharesAndLootAtYesVote
      tributeToken
      tributeOffered
      tributeTokenSymbol
      tributeTokenDecimals
      tributeEscrowRecipient
      votes {
        id
        createdAt
        daoAddress
        approved
        balance
        member {
          id
          memberAddress
        }
      }
    }
  }
`;

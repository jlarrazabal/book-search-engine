import { gql } from '@apollo/client';

export const ADD_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }`

export const ADD_VOTE = gql`
  mutation createVote($matchID: ID!, $techNum: Int!) {
    createVote(matchID: $matchID, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
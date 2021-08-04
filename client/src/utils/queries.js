import { gql } from '@apollo/client';

export const QUERY_MATCHUPS = gql`
  query getAllMatchups {
    getAllMatchups {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }`

export const QUERY_MATCHUP = gql`
  query getMatchup($matchID: ID!) {
    getMatchup(matchID: $matchID) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }`

export const QUERY_TECHS = gql`
  query getAllTech {
    getAllTech {
      name
    }
  }
`;

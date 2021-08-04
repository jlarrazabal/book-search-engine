const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
  }

  type Tech {
      name: String
  }

  type Query {
    getAllMatchups: [Matchup]!
    getMatchup(matchID: ID!): Matchup
    getAllTech: [Tech]!
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(matchID: ID!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
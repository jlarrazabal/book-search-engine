const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    getAllMatchups: async () => {
      return await Matchup.find();
    },

    getMatchup: async (parent, { matchID }) => {
      return await Matchup.findById(matchID);
    },

    getAllTech: async () => {
      return await Tech.find();
    },

  },

  Mutation: {
    createMatchup: async (parent, { tech1, tech2 }) => {
      return await Matchup.create({ tech1, tech2 });
    },
    createVote: async (parent, { matchID, techNum }) => {
      return await Matchup.findOneAndUpdate(
        { _id: matchID },
        {
          $inc: { [`tech${techNum}_votes`]: 1 },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
const { User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, { _id, username }) => {
      return await User.findOne({
        $or: [{_id, username}]
      });
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email: email});
      if(!user) {
        throw new AuthenticationError("No user found with this email");
      }
      const correctPassword = await user.isCorrectPassword(password);

      if(!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);

      return {token, user};
    },

    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);
      return {token, user};
    },

    saveBook: async (parent, {user, saveBookInput}) => {
      console.log(user);
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: saveBookInput } },
          { new: true, runValidators: true }
        );
        return updatedUser;
    },

    removeBook: async (parent, {user, bookId}) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: bookId } } },
        { new: true }
      );

      return updatedUser;
    },
  },
};

module.exports = resolvers;

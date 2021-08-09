const { User } = require('../models');
const {signToken} = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log("User Information",context.user);
      return await User.findById(context.user._id);
    },
  },

  Mutation: {
    loginUser: async (parent, { email, password }) => {
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

    addUser: async (parent, {username, email, password}, context) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);
      return {token, user};
    },

    saveBook: async (parent, {input}, context) => {
      console.log(context.user);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
    },

    removeBook: async (parent, {bookId}, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: bookId } } },
        { new: true }
      );

      return updatedUser;
    },
  },
};

module.exports = resolvers;

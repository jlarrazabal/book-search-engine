const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
      bookId: ID
      authors: [String]
      description: String
      title: String
      image: String
      link: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    me(_id: ID, username: String): User
  }

  input SaveBookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, emai: String!, password: String): Auth
    saveBook(input: SaveBookInput): User
    removeBook(user: User!, bookId: String!): User
  }
`;

module.exports = typeDefs;

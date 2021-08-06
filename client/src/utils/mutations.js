import {
  gql
} from '@apollo/client';

export const LOGIN = gql `
mutation login($email: String!, $password: String!) {
  createMatchup(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
}`;

export const ADD_USER = gql `
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
}`;

export const SAVE_BOOK = gql `
mutation saveBook($input: BookInput) {
  saveBook(input: $input) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}`;

export const REMOVE_BOOK = gql `
mutation removeBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}`;

import { ApolloServer } from '@apollo/server';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';

// Sample data
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Proper GraphQL type definitions (SDL syntax)
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

export async function initServer() {
  const app = express();

  // Add CORS middleware
  app.use(cors());

  const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await graphQLServer.start();

  app.use(
    '/graphql',
    bodyParser.json(),
    expressMiddleware(graphQLServer),
  );

  return app;
}
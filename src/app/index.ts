import { ApolloServer } from '@apollo/server';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';

import { User } from './user';



const typeDefs = `#graphql
 
    ${User.types}

    type Query {
      ${User.queries}
    }
`;

const resolvers = {
  Query: {
    ...User.resolvers.queries,
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
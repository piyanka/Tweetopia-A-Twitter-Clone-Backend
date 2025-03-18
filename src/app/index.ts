import { ApolloServer } from '@apollo/server';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import { User } from './user';
import { GrqphqlContext } from '../interface';
import JWTService from '../services/jwt';

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
  app.use(bodyParser.json());
  app.use(cors());

  const graphqlServer = new ApolloServer<GrqphqlContext>({
    typeDefs,
    resolvers,
  });

  await graphqlServer.start();

  app.use('/graphql', expressMiddleware(graphqlServer, {
    context: async ({ req, res }) => {
      return {
        user: req.headers.authorization ? JWTService.decodeToken(req.headers.authorization.split('Bearer ')[1]) : undefined,
      }
    }
  }));

  return app;
}
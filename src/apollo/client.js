import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://resources.seguroslidergestion.com/graphql`,
    fetch,
  }),
  cache: new InMemoryCache()
});


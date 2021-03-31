import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { GlobalProvider } from "../context/GlobalContext";
import { client } from './client';

export const wrapRootElement = ({ element }) => (
	<GlobalProvider>
  	<ApolloProvider client={client}>{element}</ApolloProvider>
	</GlobalProvider>
);
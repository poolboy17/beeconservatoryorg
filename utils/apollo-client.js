process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const WORDPRESS_GRAPHQL_ENDPOINT = process.env.WORDPRESS_GRAPHQL_ENDPOINT || 'https://red-oryx-356192.hostingersite.com/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: WORDPRESS_GRAPHQL_ENDPOINT, fetch }),
  cache: new InMemoryCache(),
});

export default client;
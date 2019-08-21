import { render } from 'inferno';
import './index.css';
import App from './App';
import { ApolloProvider } from "inferno-apollo";
// import ApolloClient from "apollo-boost";
// import ApolloClient from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  default as ApolloClient,
  createNetworkInterface
} from 'apollo-client';

// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: 'http://localhost:5000'
// });

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:5000/graphql',
  })
});


render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


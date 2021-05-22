import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPH_URL } from "./config";

const client = new ApolloClient({
  uri: GRAPH_URL,
  cache: new InMemoryCache(),
});

export default client;

import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = (uri: string) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};

const clientObject = {
  client: createClient("/api/graphql"),
  serverClient: createClient("https://spacex-production.up.railway.app/"),
};

export default clientObject;

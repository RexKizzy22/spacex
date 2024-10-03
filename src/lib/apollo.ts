import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = (uri: string) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache({ resultCaching: false }),
  });
};

const clientObject = {
  client: createClient(process.env.NEXT_PUBLIC_SERVER_URL || ""),
  serverClient: createClient(process.env.NEXT_PUBLIC_SPACEX_URL || ""),
};

export default clientObject;

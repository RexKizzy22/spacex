import { createSchema, createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { resolvers } from "@/src/graphql/resolvers";
import { typeDefs } from "@/src/graphql/schema";


const requestObject = (url: string) => {
    return createYoga<{
      req: NextApiRequest;
      res: NextApiResponse;
    }>({
      schema: createSchema({
        typeDefs,
        resolvers,
      }),
      graphqlEndpoint: url,
    });
};

export default requestObject;
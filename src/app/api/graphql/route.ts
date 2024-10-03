import { createSchema, createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import requestObject from "../handleRequest";


const { handleRequest } = requestObject(process.env.NEXT_PUBLIC_SERVER_URL || "");

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};

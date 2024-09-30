"use client";

import { ApolloProvider } from "@apollo/client";
import clientObj from "../lib/apollo";
import Launches from "./launches/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <ApolloProvider client={clientObj.client}>
      <ToastContainer />
      <Launches />
    </ApolloProvider>
  );
}

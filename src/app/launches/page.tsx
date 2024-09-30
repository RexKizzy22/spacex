"use client";

import Head from "next/head";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Loader from "../loading";
import { toast } from "react-toastify";
import clientObject from "@/src/lib/apollo";
import { GET_LAUNCHES } from "@/src/graphql/query/launch";
import { Launch } from "./type";
import UpcomingLaunches from "@/src/components/Launches";

export default function Launches() {
  const [fetchUpcomingLaunches, { loading, error, data }] = useLazyQuery<{
    launchesUpcoming: Launch[];
  }>(GET_LAUNCHES, { client: clientObject.client });
  const [search, setSearch] = useState("");

  const filteredLaunches =
    data?.launchesUpcoming.filter(
      (launch) =>
        launch.mission_name.toLowerCase().includes(search.toLowerCase()) ||
        launch.launch_site?.site_name
          .toLowerCase()
          .includes(search.toLowerCase())
    ) || [];

  const handleClick = async () => {
    fetchUpcomingLaunches();
  };

  useEffect(() => {
    fetchUpcomingLaunches();
  }, []);

  return (
    <div>
      <Head>
        <title>Space X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="flex justify-center mt-3 pt-3 text-2xl border-[red] font-bold tracking-tight text-gray-900 dark:text-white">
        Upcoming SpaceX Launches
      </h1>

      <div className="container mx-auto max-w-5xl my-8 p-4">
        <div className="w-full p-4 flex justify-center my-4">
          <input
            className="rounded-lg h-10 w-72 p-2 text-black"
            type="text"
            placeholder="Search by mission or launch site"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {error && toast.error(`Error: ${error.message}`) && (
          <button
            className="bg-grey-500 mx-auto hover:bg-blue-600 w-80 text-white font-bold w-full py-4 px-4 rounded-full flex items-center justify-center"
            onClick={handleClick}
          >
            Refetch Upcoming Launches
          </button>
        )}

        {loading ? (
          <Loader loading={loading} />
        ) : (
          <UpcomingLaunches filteredLaunches={filteredLaunches} />
        )}
      </div>
    </div>
  );
}

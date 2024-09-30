import { fetchLaunches } from "./query/launch";

const mockLaunchSite = {
  site_name: "Unknown Site",
  site_name_long: "Unknown Launch Site",
  site_id: "Unknown",
};

export const resolvers = {
  Query: {
    launchesUpcoming : async () => {
      const data = await fetchLaunches();

      const transformedData = data?.launchesUpcoming.map((launch: any) => ({
        ...launch,
        launch_site: launch.launch_site || mockLaunchSite,
      }));

      return transformedData;
    },
  },
};

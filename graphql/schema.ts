export const typeDefs = `
  type launchesUpcoming {
    id: ID
    mission_name: String
    launch_date_utc: String
    rocket: Rocket
    launch_site: LaunchSite
  }

    type Rocket {
     rocket_name: String
    }

    type LaunchSite {
        site_name: String
    }

    type Query {
        launchesUpcoming: [launchesUpcoming]
    }
`;

import { gql } from "@apollo/client";
import clientObj from "@/src/lib/apollo";

export const GET_LAUNCHES = gql`
  query GetUpcomingLaunches {
    launchesUpcoming {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
    }
  }
`;

export async function fetchLaunches() {
  try {
    const { data } = await clientObj.serverClient.query({
      query: GET_LAUNCHES,
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", (error as Error)?.message);
    return [];
  }
}

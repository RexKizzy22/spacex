import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import UpcomingLaunches from "@/src/components/Launches";
import { gql } from "@apollo/client";
import "@testing-library/jest-dom";

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

const mockLaunchData = {
  launchesUpcoming: [
    {
      id: "1",
      mission_name: "Starlink 15",
      launch_date_utc: "2024-10-01T12:00:00Z",
      rocket: { rocket_name: "Falcon 9" },
      launch_site: { site_name: "Cape Canaveral" },
    },
    {
      id: "2",
      mission_name: "Crew-2",
      launch_date_utc: "2024-11-03T14:00:00Z",
      rocket: { rocket_name: "Falcon 9" },
      launch_site: { site_name: "Kennedy Space Center" },
    },
  ],
};

const mocks = [
  {
    request: {
      query: GET_LAUNCHES,
    },
    result: {
      data: mockLaunchData,
    },
  },
];

describe("Launches Component", () => {
  it("renders launches data after fetching", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UpcomingLaunches filteredLaunches={mockLaunchData.launchesUpcoming} />
      </MockedProvider>
    );

    // Wait for data to be fetched and displayed
    await waitFor(
      () => {
        expect(screen.getByText("Mission Starlink 15")).toBeInTheDocument();
        expect(screen.getByText("Rocket Name: Falcon 9")).toBeInTheDocument();
        expect(
          screen.getByText("Launch Site: Cape Canaveral")
        ).toBeInTheDocument();
      },
      {
        timeout: 10000,
      }
    );
  });

  it("filters launches based on search input", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UpcomingLaunches filteredLaunches={mockLaunchData.launchesUpcoming} />
      </MockedProvider>
    );

    // Wait for data to load
    await waitFor(
      () => {
        expect(screen.getByText("Mission Starlink 15")).toBeInTheDocument();
      },
      {
        timeout: 10000,
      }
    );

    // Type into search box
    fireEvent.change(
      screen.getByPlaceholderText(/Search by mission or launch site/i),
      {
        target: { value: "Crew-2" },
      }
    );

    // Ensure only Crew-2 mission is visible
    expect(screen.queryByText("Mission Starlink 15")).not.toBeInTheDocument();
    expect(screen.getByText("Mission Crew-2")).toBeInTheDocument();
  });

  it("displays error message on query failure", async () => {
    const errorMocks = [
      {
        request: {
          query: GET_LAUNCHES,
        },
        error: new Error("Network Error"),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <UpcomingLaunches filteredLaunches={mockLaunchData.launchesUpcoming} />
      </MockedProvider>
    );

    await waitFor(
      () => {
        expect(screen.getByText(/Error: Network Error/i)).toBeInTheDocument();
      },
      {
        timeout: 10000,
      }
    );
  });
});

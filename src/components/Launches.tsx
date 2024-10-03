import { Dispatch, SetStateAction } from "react";
import { Launch } from "../app/launches/type";
import UpcomingLaunch from "./Launch";

const AllLaunches = ({
  filteredLaunches,
  setSelectedSites,
}: {
  filteredLaunches: Launch[];
  setSelectedSites: Dispatch<SetStateAction<Launch | undefined>>;
}) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredLaunches?.map((launch, id) => (
        <UpcomingLaunch
          launch={launch}
          key={id}
          setSelectedSites={setSelectedSites}
        />
      ))}
    </ul>
  );
};

export default AllLaunches;

import { Dispatch, SetStateAction } from "react";
import { Launch } from "../app/launches/type";

const UpcomingLaunch = ({
  launch,
  setSelectedSites,
}: {
  launch: Launch | undefined;
  setSelectedSites: Dispatch<SetStateAction<Launch | undefined>>;
}) => {
  return (
    <li
      key={launch?.id}
      className="bg-[#364051] p-3 border-2 border-[#828B99] rounded-md"
    >
      <h1 className="font-bold text-gray-700 dark:text-gray-400">
        {`Mission ${launch?.mission_name}`}
      </h1>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {`Rocket Name: ${launch?.rocket.rocket_name}`}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {`Launch Date: ${launch && new Date(launch.launch_date_utc).toLocaleString()}`}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {`Launch Site: ${launch?.launch_site?.site_name}` || "N/A"}
      </p>

      <button
        className="bg-grey-500 mx-auto mt-3 hover:bg-blue-600 w-80 text-white font-bold w-full py-4 px-4 rounded-full flex items-center justify-center"
        onClick={() => setSelectedSites(launch)}
      >
        Select Site
      </button>
    </li>
  );
};

export default UpcomingLaunch;

import { Launch } from "../app/launches/type";

const UpcomingLaunch = ({ launch }: { launch: Launch }) => {
  return (
    <li
      key={launch.id}
      className="bg-[#364051] p-3 border-2 border-[#828B99] rounded-md"
    >
      <h1 className="font-bold text-gray-700 dark:text-gray-400">
        {`Mission ${launch.mission_name}`}
      </h1>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {`Rocket Name: ${launch.rocket.rocket_name}`}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {`Launch Date: ${new Date(launch.launch_date_utc).toLocaleString()}`}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {`Launch Site: ${launch.launch_site?.site_name}` || "N/A"}
      </p>
    </li>
  );
};

export default UpcomingLaunch;

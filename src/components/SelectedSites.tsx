export type SELECTED = {
  weather: {
    wind: string;
  };
  zip_code: string;
  temperature: string;
};

export const Site = ({ site, key }: { site: SELECTED; key: number }) => {
  return (
    <li
      key={key}
      className="bg-[#364051] p-3 border-2 border-[#828B99] rounded-md"
    >
      <h1 className="font-bold text-gray-700 dark:text-gray-400">
        {`Mission ${site.zip_code}`}
      </h1>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {`Rocket Name: ${site.temperature}`}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {site.weather.wind}
      </p>
    </li>
  );
};

const SelectedSites = ({ selectedSites }: { selectedSites: SELECTED[] | undefined }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {selectedSites?.map((site, id) => (
        <Site site={site} key={id} />
      ))}
    </ul>
  );
};

export default SelectedSites;

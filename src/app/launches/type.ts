export interface Launch {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
  launch_site: {
    site_name: string;
  } | null;
}

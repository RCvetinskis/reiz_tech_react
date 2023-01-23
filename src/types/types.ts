export interface ICountry {
  area: number;
  independent: boolean;
  name: string;
  region: string;
}
export interface IFilter {
  id: string;
  filterName: string;
  values: any[];
  onFilterChange: any;
}
export interface IPagination {
  total: number;
  limit: number;
  setStartingPage: (page: number) => void;
}

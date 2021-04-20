import { FindCountriesProps, ResponseProps as FindCountriesResponseProps  } from './lib/functions/findCountries';
import { FindCountryRegionCities, ResponseProps as FindCountryRegionCitiesResponseProps  } from './lib/functions/findCountryRegionCities';
import { FindCountryRegionsProps, ResponseProps as FindCountryRegionsResponseProps  } from './lib/functions/findCountryRegions';

declare module 'geodb-cities' {
  export function findCountries(data: FindCountriesProps): Promise<FindCountriesResponseProps>;
  export function findCountryRegionCities(data: FindCountryRegionCities): Promise<FindCountryRegionCitiesResponseProps>;
  export function findCountryRegions(data: FindCountryRegionsProps): Promise<FindCountryRegionsResponseProps>;
}

import { SortByProps } from '../types/SortBy';

export function formatSort(sort: SortByProps): string {
  switch (sort) {
    case 'City Name, A-Z':
      return 'name';
    case 'City Name, Z-A':
      return '-name';

    case 'Elevation, LO-HI':
      return 'elevation';
    case 'Elevation, HI-LO':
      return '-elevation';

    case 'Population, LO-HI':
      return 'population';
    case 'Population, HI-LO':
      return '-population';

    default:
      return '';
  }
}

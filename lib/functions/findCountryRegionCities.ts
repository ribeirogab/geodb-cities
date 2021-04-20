import { api } from '../api';

import { ContryCodeProps } from '../types/Country';
import { CityProps } from '../types/City';
import { PageInfoProps } from '../types/PageInfo';
import { LanguageCodeProps } from '../types/Language';
import { SortByProps } from '../types/SortBy';

import { formatSort } from '../helpers/formatSort';

export interface FindCountryRegionCities {
  page?: number;
  limit?: number;
  languageCode?: LanguageCodeProps;
  sort?: SortByProps;
  countryCode: ContryCodeProps;
  regionCode: string;
}

export interface ResponseProps {
  data: CityProps[];
  pageInfo: PageInfoProps;
}

export async function findCountryRegionCities({
  page = 0,
  limit = 10,
  languageCode,
  sort,
  countryCode,
  regionCode,
}: FindCountryRegionCities): Promise<ResponseProps> {
  try {
    const {
      data: { data, metadata },
    } = await api.get(
      `/countries/${countryCode}/regions/${regionCode}/cities`,
      {
        params: {
          limit,
          offset: page * limit,
          ...(languageCode ? { languageCode } : {}),
          ...(sort ? { sort: formatSort(sort) } : {}),
        },
      },
    );

    const lastPage = Math.floor(metadata.totalCount / limit);

    const pageInfo = {
      currentPage: page,
      lastPage,
      totalCount: metadata.totalCount,
      handleNextPage: page < lastPage,
    };

    return { data, pageInfo };
  } catch (error) {
    throw new Error(error);
  }
}

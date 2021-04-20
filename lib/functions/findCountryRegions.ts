import { api } from '../api';

import { ContryCodeProps } from '../types/Country';
import { RegionProps } from '../types/Region';
import { PageInfoProps } from '../types/PageInfo';
import { LanguageCodeProps } from '../types/Language';

export interface FindCountryRegionsProps {
  page?: number;
  limit?: number;
  countryCode: ContryCodeProps;
  namePrefix?: string;
  languageCode?: LanguageCodeProps;
}

export interface ResponseProps {
  data: RegionProps[];
  pageInfo: PageInfoProps;
}

export async function findCountryRegions({
  page = 0,
  limit = 10,
  countryCode,
  namePrefix,
  languageCode,
}: FindCountryRegionsProps): Promise<ResponseProps> {
  try {
    const {
      data: { data, metadata },
    } = await api.get(`/countries/${countryCode}/regions`, {
      params: {
        limit,
        offset: page * limit,
        ...(namePrefix ? { namePrefix } : {}),
        ...(languageCode ? { languageCode } : {}),
      },
    });

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

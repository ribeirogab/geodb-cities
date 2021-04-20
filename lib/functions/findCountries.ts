import { api } from '../api';

import { CountryProps } from '../types/Country';
import { PageInfoProps } from '../types/PageInfo';

export interface FindCountriesProps {
  page?: number;
  limit?: number;
  namePrefix?: string;
}

export interface ResponseProps {
  data: CountryProps[];
  pageInfo: PageInfoProps;
}

export async function findCountries({
  page = 0,
  limit = 10,
  namePrefix,
}: FindCountriesProps): Promise<ResponseProps> {
  try {
    const {
      data: { data, metadata },
    } = await api.get('/countries', {
      params: {
        limit,
        offset: page * limit,
        ...(namePrefix ? { namePrefix } : {}),
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

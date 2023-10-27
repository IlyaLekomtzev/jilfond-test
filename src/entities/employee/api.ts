import axios from 'axios';
import { API_URL } from '@/shared/constants/env';
import { ISearchRequest } from '@/shared/types/search';
import { IUser } from '@/shared/types/user';

export const employeesApi = {
  get: (params: ISearchRequest) =>
    axios.get<IUser[]>('/users', {
      baseURL: API_URL,
      params: params,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }),
};

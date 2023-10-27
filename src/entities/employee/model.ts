import { create } from 'zustand';
import { IUser } from '@/shared/types/user';
import { ISearchRequest } from '@/shared/types/search';
import { numberRegexp } from '@/shared/constants/regexp';
import { employeesApi } from './api';
import { SEARCH_LIMIT } from './constants';

interface EmployeesState {
  items: IUser[];
  isLoading: boolean;
  hasQuery: boolean;
  search: (query: string) => void;
  reset: () => void;
}

export const useEmployeesStore = create<EmployeesState>((set) => ({
  items: [],
  isLoading: false,
  hasQuery: false,
  search: async (query) => {
    try {
      set({ isLoading: true });

      const searchItems = query
        .split(',')
        .map((item) => item.trim().replace(/,/g, ''))
        .filter(Boolean);
      const params: Omit<ISearchRequest, '_limit'> = searchItems.every((item) => numberRegexp.test(item))
        ? { id: searchItems }
        : { username: searchItems };

      const { data } = await employeesApi.get({
        _limit: SEARCH_LIMIT,
        ...params,
      });

      set({ items: data });
    } catch {
      set({ items: [] });
      console.error('Failed to get users');
    } finally {
      set({ isLoading: false });
      set({ hasQuery: query.length > 0 });
    }
  },
  reset: () => {
    set({ items: [] });
    set({ isLoading: false });
    set({ hasQuery: false });
  },
}));

interface EmployeeState {
  data: IUser | null;
  setUser: (data: IUser) => void;
  resetUser: () => void;
}

export const useEmployeeStore = create<EmployeeState>((set, get) => ({
  data: null,
  setUser: (data) => {
    const currentUser = get().data;
    const newUser = !currentUser || currentUser.id !== data.id ? data : null;
    set({ data: newUser });
  },
  resetUser: () => set({ data: null }),
}));

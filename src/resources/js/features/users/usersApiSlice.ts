import { apiSlice } from '../api/apiSlice';
import { User } from './users.types';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], undefined>({
      query: () => '/',
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;

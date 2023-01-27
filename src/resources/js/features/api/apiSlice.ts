import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/users',
});

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery,
  endpoints: (builder) => ({}),
});

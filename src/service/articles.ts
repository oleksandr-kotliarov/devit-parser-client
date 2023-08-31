import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from '../utils/endpoints';
import { API_URL } from '@/http';
import { ArticlesResponse } from '@/types/articles';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getArticles: builder.query<ArticlesResponse, string>({
      query: (options: string) => `${ENDPOINTS.articles}${options}`,
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;

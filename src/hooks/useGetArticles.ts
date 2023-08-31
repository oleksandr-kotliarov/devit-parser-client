import { useGetArticlesQuery } from '@/service/articles';
import { useMemo } from 'react';
import { useArticleOptions } from './useArticleOptions';
import { useAppSelector } from '@/app/hooks';

export const useGetArticles = () => {
  const { limit } = useAppSelector((state) => state.searchSettings);
  const searchOptions = useArticleOptions();
  const { data, refetch } = useGetArticlesQuery(searchOptions);

  const maxPage = useMemo(
    () => Math.ceil((data?.total || 0) / limit),
    [data?.total, limit]
  );

  return { maxPage, data, refetch };
};

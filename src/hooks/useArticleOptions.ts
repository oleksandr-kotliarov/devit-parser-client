import { useAppSelector } from '@/app/hooks';
import { getStringQueryParams } from '@/utils/getStringQueryParams';

export const useArticleOptions = () => {
  const options = useAppSelector((state) => state.searchSettings);

  return getStringQueryParams(options);
};

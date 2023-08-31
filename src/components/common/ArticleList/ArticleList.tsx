import styles from './ArticleList.module.scss';
import ArticleCard from '../ArticleCard';
import { Pagination } from '@mui/material';
import SettingBar from '../SettingBar';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useGetArticles } from '@/hooks/useGetArticles';
import { setPage } from '@/features/searchSettings/searchSettingsSlice';
import { scrollTop } from '@/utils/scrollTop';
import { useEffect } from 'react';

function ArticleList() {
  const { page } = useAppSelector((state) => state.searchSettings);
  const dispatch = useAppDispatch();
  const { data, maxPage, refetch } = useGetArticles();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <SettingBar />
      {data && (
        <div className={styles.articleList}>
          {data.list.map((article) => (
            <ArticleCard article={article} key={article._id} />
          ))}
        </div>
      )}
      {maxPage > 0 && (
        <Pagination
          count={maxPage}
          page={page}
          onChange={(event, value) => {
            dispatch(setPage(value));
            scrollTop();
          }}
        />
      )}
    </>
  );
}

export default ArticleList;

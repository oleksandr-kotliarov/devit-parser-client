// Components
import { Box } from '@mui/material';
import ArticleList from '@/components/common/ArticleList/ArticleList';
// Styles
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.mainContainer}>
      <Box
        padding={'20px'}
        paddingTop={'60px'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'40px'}
      >
        <ArticleList />
      </Box>
    </div>
  );
}

export default Home;

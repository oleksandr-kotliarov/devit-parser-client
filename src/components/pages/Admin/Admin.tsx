// Router
import { Route, Routes } from 'react-router-dom';
// Components
import { Box } from '@mui/material';
import AdminNavigation from './components/AdminNavigation';
import ArticleList from '@/components/common/ArticleList';
import CreateCodeForm from './components/CreateCodeForm';
import CreateArticleForm from './components/CreateArticleForm';
import ParseArticlesForm from './components/ParseArticlesForm/ParseArticlesForm';

function Admin() {
  return (
    <Box
      padding={'20px'}
      paddingTop={'60px'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={'40px'}
    >
      <AdminNavigation />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/codes" element={<CreateCodeForm />} />
        <Route path="/create" element={<CreateArticleForm />} />
        <Route path="/parse" element={<ParseArticlesForm />} />
      </Routes>
    </Box>
  );
}

export default Admin;

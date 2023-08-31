import { ArticlesController } from '@/http/articles';
import { useGetArticles } from './useGetArticles';
import { UpdateArticleInput } from '@/types/articles';

export const useArticleController = () => {
  const { refetch } = useGetArticles();

  const deleteArticle = async (_id: string) => {
    await ArticlesController.deleteArticle({ _id });
    refetch();
  };

  const updateArticle = async (input: UpdateArticleInput) => {
    await ArticlesController.updateArticle(input);
    refetch();
  };

  return { deleteArticle, updateArticle };
};

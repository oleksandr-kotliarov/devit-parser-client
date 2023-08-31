import { useArticleController } from '@/hooks/useArticleController';
import { UpdateArticleInput } from '@/types/articles';
import { errorHandler } from '@/utils/errorHandler';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import SaveIcon from '@mui/icons-material/Save';

// Styles
import styles from '../ArticleCard/ArticleCard.module.scss';

interface Props {
  _id: string;
  title: string;
  creator: string;
  content: string;
  onSave: () => void;
}

function ArticleEditForm({ content, creator, title, onSave, _id }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<UpdateArticleInput, '_id'>>({
    defaultValues: {
      title,
      content,
      creator,
    },
  });
  const { updateArticle } = useArticleController();
  const [error, setError] = useState('');

  const submitHandler: SubmitHandler<Omit<UpdateArticleInput, '_id'>> = async (
    data
  ) => {
    try {
      await updateArticle({ _id, ...data });
      onSave();
    } catch (error) {
      setError(errorHandler(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <button className={styles.editButton}>
        <SaveIcon />
      </button>
      <Typography variant="h5" component="div">
        <input
          type="text"
          {...register('title', { required: 'Title is required' })}
        />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <input type="text" {...register('creator')} />
      </Typography>
      <Typography variant="body2">
        <input type="text" {...register('content')} />
      </Typography>
      {error ||
        (errors.title && (
          <Typography color={'red'}>{error || errors.title.message}</Typography>
        ))}
    </form>
  );
}

export default ArticleEditForm;

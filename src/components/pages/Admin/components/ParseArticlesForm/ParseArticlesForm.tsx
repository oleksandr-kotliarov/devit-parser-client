import TextInput from '@/components/common/TextInput/TextInput';
import { ArticlesController } from '@/http/articles';
import { ParseArticleInput } from '@/types/articles';
import { errorHandler } from '@/utils/errorHandler';
import { Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

function ParseArticlesForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ParseArticleInput>();

  const [error, setError] = useState('');

  const submitHandler: SubmitHandler<ParseArticleInput> = async (data) => {
    try {
      await ArticlesController.parseArticles(data);
      reset();
    } catch (error: any) {
      setError(errorHandler(error));
    }
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: '30px', width: 'min(600px, 100% - 40px)' }}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextInput
          label="Link"
          error={errors.href}
          props={register('href', { required: 'Link is required' })}
        />
        {error && (
          <Typography fontSize={'14px'} textAlign={'center'} color={'red'} padding={'10px'}>
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          type="submit"
          style={{ margin: '0 auto', display: 'block' }}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default ParseArticlesForm;

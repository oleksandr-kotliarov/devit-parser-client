import TextInput from '@/components/common/TextInput/TextInput';
import { ArticlesController } from '@/http/articles';
import { CreateArticleInput } from '@/types/articles';
import { errorHandler } from '@/utils/errorHandler';
import { Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

function CreateArticleForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateArticleInput>();
  const [error, setError] = useState('');

  const submitHandler: SubmitHandler<CreateArticleInput> = async (data) => {
    try {
      await ArticlesController.createArticle(data);
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
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <TextInput
          label="Title"
          error={errors.title}
          props={register('title', { required: 'Title is required' })}
        />
        <TextInput
          label="Creator"
          error={errors.creator}
          props={register('creator', { required: 'Creator is required' })}
        />
        <TextInput
          label="Description"
          error={errors.description}
          props={register('description', {
            required: 'Description is required',
          })}
        />
        <TextInput
          label="Content"
          error={errors.content}
          props={register('content', { required: 'Content is required' })}
        />
        <TextInput
          label="Link"
          error={errors.link}
          props={register('link', { required: 'Link is required' })}
        />
        <TextInput
          label="Guid"
          error={errors.guid}
          props={register('guid', { required: 'Guid is required' })}
        />
        <TextInput
          label="Publish Date"
          error={errors.pubDate}
          props={register('pubDate', { required: 'Publish Date is required' })}
        />
        <Button variant="contained" type="submit">
          Create
        </Button>
        {error && (
          <Typography
            fontSize={'14px'}
            textAlign={'center'}
            color={'red'}
            padding={'10px'}
          >
            {error}
          </Typography>
        )}
      </form>
    </Paper>
  );
}

export default CreateArticleForm;

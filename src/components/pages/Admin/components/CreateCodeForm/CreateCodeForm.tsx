import { CodesController } from '@/http/codes';
import { errorHandler } from '@/utils/errorHandler';
import { Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';

function CreateCodeForm() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const createCode = async () => {
    try {
      const res = await CodesController.createCode();
      setCode(res.data.code);
    } catch (error: any) {
      setError(errorHandler(error));
    }
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: '30px', width: 'min(600px, 100% - 40px)' }}
    >
      <Button
        variant="contained"
        onClick={createCode}
        style={{ margin: '0 auto', display: 'block' }}
      >
        Create
      </Button>
      {code && (
        <>
          <Typography
            fontSize={'16px'}
            gutterBottom
            textAlign={'center'}
            padding={'10px'}
          >
            Use this code to register a new admin:
          </Typography>
          <Typography fontSize={'14px'} textAlign={'center'}>
            {code}
          </Typography>
        </>
      )}
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
    </Paper>
  );
}

export default CreateCodeForm;

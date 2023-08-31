import AuthForm from '@/components/common/AuthForm';
import TextInput from '@/components/common/TextInput';
import { useAuth } from '@/hooks/useAuth';
import { RegistrationInput } from '@/types/auth';
import { emailPattern } from '@/utils/emailPattern';
import { errorHandler } from '@/utils/errorHandler';
import { Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationInput>();
  const { handleRegistration } = useAuth();
  const [error, setError] = useState('');

  const submitHandler: SubmitHandler<RegistrationInput> = async (data) => {
    try {
      await handleRegistration(data);
    } catch (error: any) {
      setError(errorHandler(error));
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        width: 'min(600px, 100% - 40px)',
        margin: '40px auto',
        padding: '20px',
      }}
    >
      <Typography variant="h3" component="h3" textAlign={'center'} mb={'20px'}>
        Registration
      </Typography>
      <AuthForm handleSubmit={handleSubmit(submitHandler)} buttonText="Sign Up">
        <TextInput
          error={errors.email}
          label="Email"
          props={register('email', {
            required: 'Email is required',
            pattern: { value: emailPattern, message: 'Invalid email address' },
          })}
        />
        <TextInput
          error={errors.password}
          label="Password"
          props={register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password is too short' },
          })}
          type="password"
        />
        <TextInput
          error={errors.code}
          label="Code"
          props={register('code', {
            required: 'Code is required',
          })}
        />
        {error && (
          <Typography fontSize={'14px'} textAlign={'center'} color={'red'}>
            {error}
          </Typography>
        )}
      </AuthForm>
    </Paper>
  );
}

export default Registration;

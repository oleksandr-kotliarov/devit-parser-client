import AuthForm from '@/components/common/AuthForm/AuthForm';
import TextInput from '@/components/common/TextInput/TextInput';
import { emailPattern } from '@/utils/emailPattern';
import { useAuth } from '@/hooks/useAuth';
import { LoginInput } from '@/types/auth';
import { Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { errorHandler } from '@/utils/errorHandler';
import { Link } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  const { handleLogin } = useAuth();
  const [error, setError] = useState('');

  const submitHandler: SubmitHandler<LoginInput> = async (data) => {
    try {
      await handleLogin(data);
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
        Login
      </Typography>
      <AuthForm handleSubmit={handleSubmit(submitHandler)} buttonText="Sign In">
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
        {error && (
          <Typography fontSize={'14px'} textAlign={'center'} color={'red'}>
            {error}
          </Typography>
        )}
      </AuthForm>
      <Typography textAlign={'center'} style={{ marginTop: '20px' }}>
        Don&apos;t have an account?{' '}
        <Link to={'/registration'} style={{ textDecoration: 'underline' }}>
          Register.
        </Link>
      </Typography>
    </Paper>
  );
}

export default Login;

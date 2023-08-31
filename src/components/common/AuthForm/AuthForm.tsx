import { Button } from '@mui/material';
import { FormEventHandler, ReactNode } from 'react';

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  buttonText: string;
}

function AuthForm({ handleSubmit, children, buttonText }: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {children}
      <Button variant="contained" type="submit">
        {buttonText}
      </Button>
    </form>
  );
}

export default AuthForm;

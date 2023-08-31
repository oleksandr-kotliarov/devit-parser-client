import { TextField, Typography } from '@mui/material';
import { FieldError } from 'react-hook-form';

interface Props {
  label: string;
  error: FieldError | undefined;
  props: any;
  type?: string;
}

function TextInput({ error, label, props, type }: Props) {
  return (
    <div style={{ padding: '0 0 20px', position: 'relative' }}>
      <TextField
        id="filled-basic"
        label={label}
        variant="filled"
        {...props}
        type={type || 'text'}
        style={{ width: '100%' }}
      />
      {error && (
        <Typography
          style={{
            color: 'red',
            position: 'absolute',
            bottom: '0px',
            fontSize: '10px',
          }}
        >
          {error.message}
        </Typography>
      )}
    </div>
  );
}

export default TextInput;

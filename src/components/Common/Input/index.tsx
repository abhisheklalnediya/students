import { TextField } from '@mui/material';
import React from 'react';
import classes from './input.module.scss';

type InputProps = {
  onChange:React.ChangeEventHandler
  title: string
  name:string
  value:string | number
  type?:string
  className?:string
  disabled?:boolean
  required?:boolean
};

function Input(props:InputProps) {
  const {
    disabled, className, onChange,
    title, type, required = false,
    name, value
  } = props;
  let v = value;
  if (type === 'date' && value) {
    const date = new Date(value);
    [v] = date.toISOString().split('T');
  }
  const tClasses = {
    root: [classes.input, className].join(' ')
  };
  return (
    <TextField
      label={title}
      value={v}
      type={type}
      disabled={disabled}
      classes={tClasses}
      onChange={onChange}
      required={required}
      name={name}
      fullWidth
      variant="standard"
      InputLabelProps={{ shrink: true }}
    />
  );
}

Input.defaultProps = {
  className: '',
  disabled: false,
  type: 'text',
  required: false
};

export default Input;

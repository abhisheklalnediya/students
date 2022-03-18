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
  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <input
        value={v}
        type={type}
        disabled={disabled}
        className={[classes.input, className].join(' ')}
        onChange={onChange}
        required={required}
        name={name}
        placeholder={type === 'date' ? 'mm - dd - yyyy' : undefined}
        pattern={type === 'date' ? '\\d{2}-\\d{2}-\\d{4}' : undefined}
        // min={type === 'date' ? '1990-01-01' : undefined}
        // max={type === 'date' ? '2020-12-31' : undefined}
      />
    </div>
  );
}

Input.defaultProps = {
  className: '',
  disabled: false,
  type: 'text',
  required: false
};

export default Input;

import React, { MouseEventHandler } from 'react';
import classes from './button.module.scss';

type ButtonProps = {
  children: React.ReactChild
  onClick?:MouseEventHandler
  submit?:boolean
  className?:string
  disabled?:boolean
};

function Button(props:ButtonProps) {
  const {
    disabled, submit, children, className, onClick
  } = props;
  return (
    <button
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={[classes.button, className].join(' ')}
      onClick={onClick || undefined}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  disabled: false,
  submit: false,
  onClick: undefined
};

export default Button;

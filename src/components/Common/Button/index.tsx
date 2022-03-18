import React, { MouseEventHandler } from 'react';
import classes from './button.module.scss';

type ButtonProps = {
  children: React.ReactChild
  onClick?:MouseEventHandler
  submit?:boolean
  className?:string
  disabled?:boolean
  mini?:boolean
  error?:boolean
};

function Button(props:ButtonProps) {
  const {
    disabled, submit, children, className, onClick,
    mini, error
  } = props;
  const buttonClasses = [classes.button, className];
  if (mini) {
    buttonClasses.push(classes.mini);
  }
  if (error) {
    buttonClasses.push(classes.error);
  }
  return (
    <button
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={buttonClasses.join(' ')}
      onClick={onClick || undefined}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  disabled: false,
  mini: false,
  error: false,
  submit: false,
  onClick: undefined
};

export default Button;

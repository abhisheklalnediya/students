import React from 'react';
import classes from './errorBox.module.scss';

type ErrorBoxProps = {
  children: React.ReactChild
  title?:string
  className?:string
};

function ErrorBox(props:ErrorBoxProps) {
  const {
    title = null, children, className,
  } = props;

  const blockClasses = [classes.block, className];

  return (

    <div className={blockClasses.join(' ')}>
      {title ? <span className={classes.title}>{title}</span> : null}
      <div className={classes.body}>
        {children}
      </div>
    </div>
  );
}

ErrorBox.defaultProps = {
  className: '',
  title: null
};

export default ErrorBox;

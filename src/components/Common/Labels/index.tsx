import React from 'react';
import classes from './label.module.scss';

type LabelProps = {
  label: string | number | React.ReactChild
  className?:string
};

function Label(props:LabelProps) {
  const { label, className = '' } = props;
  return (
    <div className={[className, classes.label].join(' ')}>{label}</div>
  );
}

Label.defaultProps = {
  className: ''
};

export default Label;

import React from 'react';
import classes from './block.module.scss';

type BlockProps = {
  children: React.ReactChild
  title:string
  className?:string
};

function Block(props:BlockProps) {
  const {
    title, children, className,
  } = props;

  const blockClasses = [classes.block, className];

  return (

    <div className={blockClasses.join(' ')}>
      <span className={classes.title}>{title}</span>
      <div className={classes.body}>
        {children}
      </div>
    </div>
  );
}

Block.defaultProps = {
  className: '',
};

export default Block;

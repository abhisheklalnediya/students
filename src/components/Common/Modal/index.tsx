import React, { MouseEventHandler } from 'react';
import Button from '../Button';
import classes from './modal.module.scss';

type ModalProps = {
  children: React.ReactChild
  title:string
  open:boolean
  onClose:MouseEventHandler
  className?:string
};

function Modal(props:ModalProps) {
  const {
    open, title, children, className, onClose
  } = props;

  const modalClasses = [classes.modal, className];
  if (open) {
    modalClasses.push(classes.open);
  }

  return (
    <div className={modalClasses.join(' ')}>
      <div className={classes.underlay} />

      <div className={classes.container}>
        <div className={classes.title}>
          {title}
          <Button onClick={onClose} className={classes.close}><i className="lni lni-close" /></Button>
        </div>
        <div className={classes.body}>
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  className: '',
};

export default Modal;

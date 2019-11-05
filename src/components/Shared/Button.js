import React, { forwardRef } from 'react';
import styles from './Button.module.scss';

const TYPES = {
  DEFAULT: 'Default',
  PRIMARY: 'Primary',
  CANCEL: 'Cancel',
  DANGER: 'Danger',
};

const ButtonGenerator = forwardRef(
  ({ children, type, onClick, className, style, disabled }, ref) => {
    const css = [styles.Button];
    if (type) css.push(styles[type]);
    if (className) css.push(className);

    const joinedClasses = css.join(' ');

    return (
      <button
        ref={ref}
        className={joinedClasses}
        onClick={onClick}
        style={style}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

// const Button = props => (
//   <ButtonGenerator {...props} type={TYPES.DEFAULT}></ButtonGenerator>
// );

const Button = forwardRef((props, ref) => (
  <ButtonGenerator {...props} ref={ref} type={TYPES.DEFAULT}></ButtonGenerator>
));

Button.Primary = (props) => (
  <ButtonGenerator {...props} type={TYPES.PRIMARY}></ButtonGenerator>
);

Button.Cancel = (props) => (
  <ButtonGenerator {...props} type={TYPES.CANCEL}></ButtonGenerator>
);

Button.Danger = (props) => (
  <ButtonGenerator {...props} type={TYPES.DANGER}></ButtonGenerator>
);

Button.Blank = forwardRef((props, ref) => (
  <ButtonGenerator {...props} ref={ref} type={null}></ButtonGenerator>
));

export default Button;

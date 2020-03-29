// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';

type Props = {
  onClick: Function,
  text: string,
  type?: string,
  disabled?: boolean,
  uppercase?: boolean,
};

const Button = ({ onClick, type = 'button', text, disabled = false, uppercase = false }: Props) => (
  <button
    type={type}
    onClick={onClick}
    className={classnames(styles.button, {
      [styles.disabled]: disabled,
      [styles.uppercase]: uppercase,
    })}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;

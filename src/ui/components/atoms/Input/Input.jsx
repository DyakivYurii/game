// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './Input.module.css';

type Props = {
  onChange: Function,
  value: string,
  placeholder?: string,
  className?: string,
  disabled?: boolean,
};

const Input = ({ onChange, value, placeholder, className, disabled = false }: Props) => {
  return (
    <input
      type="text"
      value={value}
      className={classnames(styles.input, className)}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;

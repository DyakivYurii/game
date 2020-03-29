// @flow
import React from 'react';
import Select from 'react-select';

import customStyles from './selectStyle';

type Props = {
  name: string,
  value: string | number,
  options: Array<{
    value: string | number,
    label: string,
  }>,
  onChange: Function,
  placeholder: string,
  className?: string,
  isLoading?: boolean,
  disabled?: boolean,
};

const InputSelect = ({
  name,
  value,
  options,
  onChange,
  placeholder,
  className,
  isLoading = false,
  disabled = false,
}: Props) => (
  <Select
    name={name}
    value={value}
    options={options}
    onChange={onChange}
    styles={customStyles}
    isSearchable={false}
    placeholder={placeholder}
    className={className}
    isLoading={isLoading}
    isDisabled={disabled || isLoading}
  />
);

export default InputSelect;

const customStyles = {
  control: (provided) => ({
    margin: 0,
    padding: 3,
    ...provided,
    fontSize: 18,
    lineHeight: '1.5em',
    color: 'var(--main-darken)',
    backgroundColor: 'var(--main-light)',
    border: 'none',
    borderRadius: 3,
    minWidth: 250,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'var(--main-darken)',
  }),
  option: (provided, state) => ({
    ...provided,
    padding: 13,
    backgroundColor:
      state.isSelected || state.isFocused ? 'var(--input-background)' : 'var(--light)',
    color: 'var(--main-darken)',
    cursor: 'pointer',
  }),
};

export default customStyles;

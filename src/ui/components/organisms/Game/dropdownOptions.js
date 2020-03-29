const MODE_NAME = {
  easyMode: 'Easy',
  normalMode: 'Normal',
  hardMode: 'Hard',
};

const getDropDownOptions = (options = {}) => {
  const dropdownOptions = [];

  Object.keys(options).forEach((key) => {
    const mode = {
      label: MODE_NAME[key],
      value: key,
    };
    dropdownOptions.push(mode);
  });

  return dropdownOptions;
};

export default getDropDownOptions;

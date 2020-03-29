// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './TableComponent.module.css';

type Props = {
  value: {
    id: string | number,
    checkedByUser: boolean,
    checkedByComputer: boolean,
    startInterval: boolean,
  },
  delay: number,
  increaseComputerPoint: Function,
  increaseUserPoint: Function,
};

const TableComponent = ({
  value: { id, checkedByUser, checkedByComputer, startInterval },
  delay,
  increaseComputerPoint,
  increaseUserPoint,
}: Props) => {
  const timeout = setTimeout(() => {
    if (startInterval) {
      increaseComputerPoint(id);
    }
  }, delay);

  const handleClick = () => {
    if (startInterval) {
      clearTimeout(timeout);
      increaseUserPoint(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      className={classnames(styles.col, {
        [styles.checkedByUser]: checkedByUser,
        [styles.checkedByComputer]: checkedByComputer,
        [styles.startInterval]: startInterval,
        [styles.disabled]: checkedByUser || checkedByComputer,
      })}
    />
  );
};

export default TableComponent;

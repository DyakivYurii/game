// @flow
import React from 'react';

import TableComponent from '../../atoms/TableComponent/TableComponent';
import styles from './GameTable.module.css';

type Props = {
  gameGrid: any,
  delay: number,
  increaseComputerPoint: Function,
  increaseUserPoint: Function,
};

const GameTable = ({ gameGrid, delay, increaseComputerPoint, increaseUserPoint }: Props) => {
  return (
    <div>
      <ul className={styles.gameBoard}>
        {gameGrid.list.map((gridId) => (
          <li key={gridId}>
            <TableComponent
              value={gameGrid.map[gridId]}
              increaseComputerPoint={increaseComputerPoint}
              increaseUserPoint={increaseUserPoint}
              delay={delay}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameTable;

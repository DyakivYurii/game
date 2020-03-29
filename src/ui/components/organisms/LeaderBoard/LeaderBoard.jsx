import React from 'react';
import { useSelector } from 'react-redux';

import Typography from '../../atoms/Typography/Typography';
import LeaderItem from '../../molecules/LeaderItem/LeaderItem';
import styles from './LeaderBoard.module.css';

const LeaderBoard = () => {
  const leaders = useSelector((state) => state.leaders.leaders);

  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Leader Board
      </Typography>
      <ul className={styles.list}>
        {leaders.list.map((leaderId) => (
          <li key={leaderId} className={styles.leaderItem}>
            <LeaderItem leader={leaders.map[leaderId]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoard;

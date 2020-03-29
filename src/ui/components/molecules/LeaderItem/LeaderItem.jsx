// @flow
import React from 'react';

import Typography from '../../atoms/Typography/Typography';
import styles from './LeaderItem.module.css';

type Props = {
  leader: { winner: string, date: string },
};

const LeaderItem = ({ leader: { winner, date } }: Props) => (
  <div className={styles.wrapper}>
    <Typography variant="h5">{winner}</Typography>
    <Typography variant="h5">{date}</Typography>
  </div>
);

export default LeaderItem;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getLeaders } from '../../../../store/leaders/actions';
import { getGameMode } from '../../../../store/game/actions';

import Game from '../../organisms/Game/Game';
import LeaderBoard from '../../organisms/LeaderBoard/LeaderBoard';
import styles from './MainPage.module.css';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaders());
    dispatch(getGameMode());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <Game />
      </div>
      <div className={styles.col}>
        <LeaderBoard />
      </div>
    </div>
  );
};

export default MainPage;

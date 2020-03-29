import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GameInputs from '../../molecules/GameInputs/GameInputs';
import GameTable from '../../molecules/GameTable/GameTable';
import getDropDownOptions from './dropdownOptions';
import {
  setUserName,
  setGameMode,
  setGameGrid,
  checkCol,
  increaseComputerPoint,
  increaseUserPoint,
  clearGameState,
} from '../../../../store/game/actions';
import { setWinner } from '../../../../store/leaders/actions';
import styles from './Game.module.css';

const Game = () => {
  const [isGameStarted, setGameStarted] = useState(false);

  const dispatch = useDispatch();

  const gameOptions = useSelector((state) => state.game);
  const selectOptions = getDropDownOptions(gameOptions.mode);

  const generateMap = (gameMode) => {
    const tableOptions = gameOptions.mode[gameMode];

    if (!tableOptions) return { empty: [], list: [], map: {} };

    const grid = { empty: [], list: [], map: {}, selected: [] };

    for (let i = tableOptions.field; i > 0; i--) {
      grid.list.push(i);
      grid.empty.push(i);
      grid.map[i] = {
        id: i,
        checkedByUser: false,
        checkedByComputer: false,
        startInterval: false,
      };
    }

    return grid;
  };

  const generateCheck = (list = []) => {
    const maxLength = list.length;
    const index = Math.floor(Math.random() * (maxLength - 1 - 0) + 0);
    return list[index];
  };

  const handlePlay = ({ userName, gameMode }) => {
    const grid = generateMap(gameMode);
    dispatch(setGameGrid(grid));

    dispatch(setGameMode(gameMode));
    dispatch(setUserName(userName));

    setGameStarted(true);
  };

  useEffect(() => {
    if (isGameStarted) {
      const { computerScore } = gameOptions.game;
      const { userScore } = gameOptions.game;
      const middle = Math.ceil(gameOptions.mode[gameOptions.game.mode].field / 2);
      if (userScore >= middle) {
        const user = { winner: gameOptions.game.userName, date: new Date() };
        dispatch(setWinner(user));
        setGameStarted(false);
        dispatch(clearGameState());
      } else if (computerScore >= middle) {
        const computer = { winner: 'Computer', date: new Date() };
        dispatch(setWinner(computer));
        setGameStarted(false);
        dispatch(clearGameState());
      } else {
        const generatedNumber = generateCheck(gameOptions.game.grid.empty);
        dispatch(checkCol(generatedNumber));
      }
    }
  }, [gameOptions.game.userScore, gameOptions.game.computerScore, isGameStarted]);

  return (
    <div>
      <div className={styles.header}>
        <GameInputs
          handlePlay={handlePlay}
          selectOptions={selectOptions}
          gameOptions={gameOptions}
          isLoadingSelectOptions={gameOptions.isLoading}
          isGameStarted={isGameStarted}
        />
      </div>
      {isGameStarted && (
        <GameTable
          gameGrid={gameOptions.game.grid}
          delay={gameOptions.mode[gameOptions.game.mode].delay}
          increaseComputerPoint={(id) => dispatch(increaseComputerPoint(id))}
          increaseUserPoint={(id) => dispatch(increaseUserPoint(id))}
        />
      )}
    </div>
  );
};

export default Game;

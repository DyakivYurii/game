// @flow
import React, { useState } from 'react';

import InputSelect from '../../atoms/InputSelect/InputSelect';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import styles from './GameInputs.module.css';

type Props = {
  handlePlay: Function,
  isGameStarted: boolean,
  selectOptions: Array<{ label: string, value: string }>,
  isLoadingSelectOptions: boolean,
};

const GameInputs = ({
  handlePlay,
  isGameStarted,
  selectOptions,
  isLoadingSelectOptions,
}: Props) => {
  const [gameMode, setGameMode] = useState(null);
  const [userName, setUserName] = useState('');

  const handleChangeMode = (option) => {
    setGameMode(option.value);
  };

  const handleChangeName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <InputSelect
        name="mode"
        options={selectOptions}
        placeholder="Pick game mode"
        onChange={handleChangeMode}
        className={styles.selectInput}
        isLoading={isLoadingSelectOptions}
        disabled={isGameStarted}
      />
      <Input
        placeholder="Enter your name"
        className={styles.input}
        value={userName}
        onChange={handleChangeName}
        disabled={isGameStarted}
      />
      <Button
        onClick={() => handlePlay({ gameMode, userName })}
        text="Play"
        uppercase
        disabled={!gameMode || !userName.length || isGameStarted}
      />
    </div>
  );
};

export default GameInputs;

import GAME from './types';

export const getGameMode = () => ({ type: GAME.GET_MODE_REQUEST });

export const setGameMode = (payload) => ({ type: GAME.SET_MODE, payload });

export const setUserName = (payload) => ({ type: GAME.SET_USER_NAME, payload });

export const setGameGrid = (payload) => ({ type: GAME.SET_GRID, payload });

export const checkCol = (payload) => ({ type: GAME.CHECK_COL, payload });

export const increaseComputerPoint = (payload) => ({ type: GAME.INCREASE_COMPUTER_POINT, payload });

export const increaseUserPoint = (payload) => ({ type: GAME.INCREASE_USER_POINT, payload });

export const clearGameState = () => ({ type: GAME.CLEAR_STATE });

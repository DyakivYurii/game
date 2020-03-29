import LEADERS from './types';

export const getLeaders = () => ({ type: LEADERS.GET_REQUEST });

export const setWinner = (payload) => ({ type: LEADERS.SET_WINNER, payload });

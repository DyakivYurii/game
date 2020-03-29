import axios from 'axios';

const get = () =>
  axios.get(`${process.env.REACT_APP_API_URL}/game-settings`).then((mode) => {
    return mode.data;
  });

const game = { get };

export default game;

import axios from 'axios';

const get = () =>
  axios.get(`${process.env.REACT_APP_API_URL}/winners`).then((result) => {
    return result;
  });

const create = (payload) => axios.post(`${process.env.REACT_APP_API_URL}/winners`, payload);

const leaders = { get, create };

export default leaders;

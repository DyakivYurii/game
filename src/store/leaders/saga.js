import { takeEvery, call, put } from 'redux-saga/effects';
import LEADERS from './types';

import services from '../../services';

function* getLeadersInfoAsync(action) {
  try {
    const user = yield call(services.leaders.get, action.payload);
    yield put({
      type: LEADERS.GET_SUCCESS,
      payload: user,
    });
  } catch (error) {
    yield put({ type: LEADERS.GET_FAILURE, payload: { error } });
  }
}

function* setNewLeader(action) {
  try {
    const user = yield call(services.leaders.create, action.payload);
    yield put({
      type: LEADERS.SET_WINNER_SUCCESS,
      payload: user,
    });
  } catch (error) {
    yield put({ type: LEADERS.SET_WINNER_FAILURE, payload: { error } });
  }
}

function* watcherLeaders() {
  yield takeEvery(LEADERS.GET_REQUEST, getLeadersInfoAsync);
  yield takeEvery(LEADERS.SET_WINNER, setNewLeader);
}

export default watcherLeaders;

import { takeEvery, call, put } from 'redux-saga/effects';
import GAME from './types';

import services from '../../services';

export function* getGameModeAsync(action) {
  try {
    const mode = yield call(services.game.get, action.payload);
    yield put({
      type: GAME.GET_MODE_SUCCESS,
      payload: { mode },
    });
  } catch (error) {
    yield put({ type: GAME.GET_MODE_FAILURE, payload: { error } });
  }
}

function* watcherRecipes() {
  yield takeEvery(GAME.GET_MODE_REQUEST, getGameModeAsync);
}

export default watcherRecipes;

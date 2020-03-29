import { all } from 'redux-saga/effects';

import gameSaga from './game/saga';
import watcherLeaders from './leaders/saga';

export default function* rootSaga() {
  yield all([gameSaga(), watcherLeaders()]);
}

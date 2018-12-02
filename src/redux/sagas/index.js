import { all } from 'redux-saga/effects';
import newScore from './newScore.saga';
import userSaga from './user.saga';


export default function* rootSaga() {
  yield all([
    newScore(),
    userSaga(),
  ]);
}
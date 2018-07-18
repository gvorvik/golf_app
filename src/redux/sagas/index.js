import { all } from 'redux-saga/effects';
import newCourse from './newCourse.saga';
import userSaga from './user.saga';


export default function* rootSaga() {
  yield all([
    newCourse(),
    userSaga(),
  ]);
}
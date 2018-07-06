import { all } from 'redux-saga/effects';
import newCourse from './newCourse.saga';


export default function* rootSaga() {
  yield all([
    newCourse(),
  ]);
}
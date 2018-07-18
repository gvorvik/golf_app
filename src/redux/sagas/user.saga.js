import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

function* loginUser(action) {
  try {
    console.log('addCourse Ran', action.payload);
  } catch(err) {
    console.log(err);
  }
}

function* userSaga() {
  yield takeEvery('LOG_IN', loginUser);
}

export default userSaga;
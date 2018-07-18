import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* loginUser(action) {
  try {
    yield call(axios.post, '/api/login', action.payload);
    const currentUser = yield call(axios.get, '/api/login/current');
    yield put({type: 'SET_USER', payload: currentUser.data});
  } catch(err) {
    console.log(err);
  }
}

function* userSaga() {
  yield takeEvery('LOG_IN', loginUser);
}

export default userSaga;
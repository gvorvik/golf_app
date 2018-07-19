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

function* logoutUser(action) {
  try{
    yield call(axios.get, '/api/login/logout');
    yield put({type: 'CLEAR_USER'});
  } catch(err){
    console.log(err);
  }
}

function* fetchUser(action) {
  try{
    const currentUser = yield call(axios.get, '/api/login/current');
    yield put({type: 'SET_USER', payload: currentUser.data});
  }catch(err) {

  }
}

function* userSaga() {
  yield takeEvery('LOG_IN', loginUser);
  yield takeEvery('LOG_OUT', logoutUser);
  yield takeEvery('FETCH_USER', fetchUser);
}

export default userSaga;
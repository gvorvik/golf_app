import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import USER_ACTIONS from '../actions/userActions';

function* loginUser(action) {
  try {
    yield call(axios.post, '/api/login', action.payload);
    const currentUser = yield call(axios.get, '/api/login/current');
    yield put({type: USER_ACTIONS.SET_USER, payload: currentUser.data});
  } catch(err) {
    console.log(err);
  }
}

function* logoutUser(action) {
  try{
    yield call(axios.get, '/api/login/logout');
    yield put({type: USER_ACTIONS.CLEAR_USER});
  } catch(err){
    console.log(err);
  }
}

function* fetchUser(action) {
  try{
    const currentUser = yield call(axios.get, '/api/login/current');
    yield put({type: USER_ACTIONS.SET_USER, payload: currentUser.data});
  }catch(err) {
    console.log(err);
  }
}

function* userSaga() {
  yield takeEvery(USER_ACTIONS.LOG_IN, loginUser);
  yield takeEvery(USER_ACTIONS.LOG_OUT, logoutUser);
  yield takeEvery(USER_ACTIONS.FETCH_USER, fetchUser);
}

export default userSaga;
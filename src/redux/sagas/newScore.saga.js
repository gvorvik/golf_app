import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import COURSE_ACTIONS from '../actions/courseActions';



function* getHoleInformation(action) {
  try {
    const holeInfo = yield call(axios.get, `/api/course/holeinfo/${action.payload}`);
    yield put({type: COURSE_ACTIONS.SET_HOLE_INFO, payload: holeInfo.data});
  } catch(err) {
    console.log(err);
  }
}



function* newScoreSaga() {
  yield takeEvery(COURSE_ACTIONS.GET_HOLE_INFO, getHoleInformation);
}


export default newScoreSaga;
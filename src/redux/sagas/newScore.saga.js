import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import COURSE_ACTIONS from '../actions/courseActions';
import SCORE_ACTIONS from '../actions/scoreActions';

function* getHoleInformation(action) {
  try {
    yield put({type: SCORE_ACTIONS.CLEAR_SCORES});
    const holeInfo = yield call(axios.get, `/api/course/holeinfo/${action.payload}`);
    yield put({type: COURSE_ACTIONS.SET_HOLE_INFO, payload: holeInfo.data});
  } catch(err) {
    console.log(err);
  }
}

function* submitScore(action) {
  try {
    const newRound = {
      date: action.payload.date,
      courseID: action.payload.courseID,
      totalScore: action.payload.totalScore,
    }
    yield call(axios.post, `/api/score/newround`, newRound);
    yield put({type: SCORE_ACTIONS.CLEAR_SCORES});
  } catch(err) {
    console.log(err);
  }
}


function* newScoreSaga() {
  yield takeEvery(COURSE_ACTIONS.GET_HOLE_INFO, getHoleInformation);
  yield takeEvery(SCORE_ACTIONS.SUBMIT_SCORE, submitScore)
}


export default newScoreSaga;
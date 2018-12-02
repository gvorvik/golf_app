import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import SCORE_ACTIONS from '../actions/scoreActions';

function* submitScore(action) {
  try {
    const newRound = {
      date: action.payload.date,
      courseID: action.payload.courseID,
      totalScore: action.payload.totalScore,
    }
    const roundID = yield call(axios.post, `/api/score/newround`, newRound);
    const scoresToSend = {
      roundID: roundID.data.id,
      scores: action.payload.scores
    }
    yield call(axios.post, `/api/score/recordscore`, scoresToSend)
    yield put({type: SCORE_ACTIONS.CLEAR_SCORES});
  } catch(err) {
    console.log(err);
  }
}


function* newScoreSaga() {
  yield takeEvery(SCORE_ACTIONS.SUBMIT_SCORE, submitScore)
}


export default newScoreSaga;
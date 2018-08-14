import { combineReducers } from 'redux';
import COURSE_ACTIONS from '../actions/courseActions';
import SCORE_ACTIONS from '../actions/scoreActions';

const scoreReducer = (state = {}, action) => {
    switch (action.type) {
        case SCORE_ACTIONS.RECORD_SCORE:
            return { ...state, [action.payload.holeId]: action.payload.score };
        case SCORE_ACTIONS.CLEAR_SCORES:
            return {};
        default:
            return state;
    }
};

const holeInfo = (state = null, action) => {
    switch (action.type) {
        case COURSE_ACTIONS.SET_HOLE_INFO:
            return action.payload;
        case COURSE_ACTIONS.CLEAR_COURSE_INFO:
            return null;
        default:
            return state;
    }
}

export default combineReducers({
    scoreReducer,
    holeInfo,
  });
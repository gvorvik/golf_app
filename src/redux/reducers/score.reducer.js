import { combineReducers } from 'redux';
import COURSE_ACTIONS from '../actions/courseActions';

function compare(a,b) {
    if (a.holenumber < b.holenumber)
      return -1;
    if (a.holenumber > b.holenumber)
      return 1;
    return 0;
  }

const scoreReducer = (state = {}, action) => {
    switch (action.type) {
        case COURSE_ACTIONS.SET_HOLE_INFO:
            action.payload.sort(compare);
            return {...state, holeInfo: action.payload};
        case 'RECORD_SCORE':
            return { ...state, ...action.payload };
        case 'CLEAR_SCORES':
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    scoreReducer,
  });
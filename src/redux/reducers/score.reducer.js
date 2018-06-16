import { combineReducers } from 'redux';




const scoreReducer = (state = {}, action) => {
    switch (action.type) {
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
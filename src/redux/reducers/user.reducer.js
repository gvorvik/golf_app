import { combineReducers } from 'redux';
import USER_ACTIONS from '../actions/userActions';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ACTIONS.SET_USER:
            return action.payload;
        case USER_ACTIONS.CLEAR_USER:
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    userReducer,
  });
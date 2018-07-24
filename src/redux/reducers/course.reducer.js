import { combineReducers } from 'redux';
import COURSE_ACTIONS from '../actions/courseActions';

const myCourses = (state = [], action) => {
  switch (action.type) {
    case COURSE_ACTIONS.ADD_MY_COURSES:
      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  myCourses,
});
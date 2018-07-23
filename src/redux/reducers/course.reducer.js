import { combineReducers } from 'redux';
import COURSE_ACTIONS from '../actions/courseActions';

const newCourse = (state = [], action) => {
  switch (action.type) {
    case COURSE_ACTIONS.SET_NEW_COURSE:
        return [...state, action.payload];
    case COURSE_ACTIONS.SET_HOLE_INFO:
        return [...state, action.payload];
    default:
        return state;
  }
}

const myCourses = (state = [], action) => {
  switch (action.type) {
    case COURSE_ACTIONS.ADD_MY_COURSES:
      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  newCourse,
  myCourses
});
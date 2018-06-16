import { combineReducers } from 'redux';
import newCourse from './newCourse.reducer';
import score from './score.reducer';

const store = combineReducers({
    newCourse,
    score
});

export default store;
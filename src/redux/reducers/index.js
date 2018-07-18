import { combineReducers } from 'redux';
import newCourse from './newCourse.reducer';
import score from './score.reducer';
import user from './user.reducer';

const store = combineReducers({
    newCourse,
    score,
    user,
});

export default store;
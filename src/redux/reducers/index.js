import { combineReducers } from 'redux';
import course from './course.reducer';
import score from './score.reducer';
import user from './user.reducer';

const store = combineReducers({
    course,
    score,
    user,
});

export default store;
import { combineReducers } from 'redux';
import score from './score.reducer';
import user from './user.reducer';

const store = combineReducers({
    score,
    user,
});

export default store;
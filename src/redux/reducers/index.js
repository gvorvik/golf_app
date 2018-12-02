import { combineReducers } from 'redux';
import user from './user.reducer';

const store = combineReducers({
    user,
});

export default store;
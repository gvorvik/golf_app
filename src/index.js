import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import createSageMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

const sagaMiddleware = createSageMiddleware();

//SAGAS

//ROOT SAGA
function* rootSaga() {
    yield takeEvery('SUBMIT_SCORE', submitScore);
}

function* submitScore(action) {
    try{
        let scoreCard = action.payload;
        let totalScore = 0;
        for(let thing in action.payload) {
            totalScore=totalScore+action.payload[thing];
        }
        scoreCard = {...scoreCard, totalScore: totalScore};
        console.log(scoreCard);
        let scorePost = yield call(axios.post, '/api/score', scoreCard);
        console.log(scorePost);
    } catch(error) {
        console.log(error);
    }
}


//REDUCERS
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

const store = createStore(
    combineReducers({
        scoreReducer
    }),

    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

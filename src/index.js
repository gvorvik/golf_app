import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import createSageMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

const sagaMiddleware = createSageMiddleware();

//Sagas

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
    } catch(error) {
        console.log(error);
    }
}

//Reducers
const scoreReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RECORD_SCORE':
            return { ...state, ...action.payload };
        // case 'SET_TOTAL_SCORE':
        //     let totalScore = 0;
        //     for(let thing in state) {
        //         totalScore += state[thing];
        //     }
        //     console.log(totalScore);
        //     return state;
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

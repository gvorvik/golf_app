import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import createSageMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

import reducer from './redux/reducers';

const sagaMiddleware = createSageMiddleware();

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


const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

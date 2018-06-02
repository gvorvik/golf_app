import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducers
const scoreReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TOTAL_SCORE':
            return {totalScore: action.payload};
        case 'RECORD_SCORE':
            return {...state, ...action.payload};
        default:
            return state;
    }
  };

const store = createStore(
    combineReducers({ 
        scoreReducer
     }),
  
    applyMiddleware(logger),
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

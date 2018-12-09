import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import createSageMiddleware from 'redux-saga';

import reducer from './redux/reducers';
import rootSaga from './redux/sagas';

const sagaMiddleware = createSageMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);

const client = new ApolloClient({
    uri: "/graphql",
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
<ApolloProvider client={client}>
    <Provider store={store}>
        <App />
    </Provider>
</ApolloProvider>, 
document.getElementById('root'));

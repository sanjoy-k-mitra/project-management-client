/**
 * Created by sanjoy on 1/18/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Map} from 'immutable'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'


import routes from './route'
import reducer from './reducer'


let loggerMiddleware = logger();

let createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore)

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
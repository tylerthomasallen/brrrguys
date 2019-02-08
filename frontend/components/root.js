import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './router';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Router />
            </HashRouter>
        </Provider>
    );
};

export default Root;
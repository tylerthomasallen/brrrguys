import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    );
};

export default Root;
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './homepage';
import NavBar from './navbar';
import Cart from './cart';


const App = () => {
    return (
        <div className="app-body">
            <NavBar count={0}/>
            <Switch>
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/" component={HomePage} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
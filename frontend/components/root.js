import React, {Component} from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './homepage'
import Cart from './cart';
import NavBar from './navbar';


class Root extends Component {

    render() {
        return(
            <HashRouter>
                {/* <NavBar /> */}
                <Switch>
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/" component={HomePage} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter> 
        )
    }

}

export default Root;
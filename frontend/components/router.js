import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './homepage';
import NavBar from './navbar';
import Loading from './loading';
import Cart from './cart';
import ProductShow from './show';

const Router = () => {
  return(
    <div className="app-body">
      <NavBar />
      <Loading />
        <Switch>
          <Route exact path="/cart" component={Cart}  />
          <Route exact path="/beer/:productId" component={ProductShow} />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
    </div>
  )
}

export default Router;
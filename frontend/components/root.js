import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { loadApp } from '../actions';
import Router from './router';

class Root extends Component {
  
  async componentDidMount() {
    await this.props.loadApp()
  }

  render() {
    return(
      <Provider store={this.props.store}>
        <HashRouter>
          <Router  />
        </HashRouter>
      </Provider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadApp: () => dispatch(loadApp())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Root);
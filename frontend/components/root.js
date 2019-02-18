import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { loadApp, isLoading } from '../actions';
import Router from './router';

class Root extends Component {
  
  async componentDidMount() {
    const { isLoading, loadApp } = this.props;
    await isLoading(true)
    await loadApp()
    await isLoading(false)
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
    loadApp: () => dispatch(loadApp()),
    isLoading: (bool) => dispatch(isLoading(bool))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Root); 
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExternalScript } from '../actions';
import Header from './Header'
import ProgressBar from './ProgressBar'
import ControlBar from './ControlBar'
import LoadComponent from './LoadComponent'
import '../_style.scss';

export class App extends Component {
  render(){
      const { todos: { loadProgress, spinnerEnable }, dispatchGetExternalScript } = this.props;
      return (
        <div className="container">      
          {!loadProgress && <Header />}
          {!loadProgress && <LoadComponent /> }
          {spinnerEnable && <span>Loading...</span> }
          {loadProgress && <ProgressBar />}
          {loadProgress && <ControlBar />}
      </div>
      );
  }
 
}

App.prototypes = {
  todos: propTypes.object,
  dispatchGetExternalScript: propTypes.func
}

export const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps,
  { dispatchGetExternalScript: getExternalScript})(App);


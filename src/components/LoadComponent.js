import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExternalScript } from '../actions';

export class LoadComponent extends Component {
    render() {
        const { dispatchGetExternalScript } = this.props;
        return (
            <div class="LoadContainer">
                <button id="LoadButton" onClick={() => dispatchGetExternalScript()}>Click here to Load Progress Bar</button>
            </div>
        );
    }
}

LoadComponent.prototypes = {
   
    dispatchGetExternalScript: propTypes.func
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps,
    { dispatchGetExternalScript: getExternalScript })(LoadComponent);
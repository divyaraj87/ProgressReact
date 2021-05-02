import React, { Component} from 'react';
import propTypes from 'prop-types';
import {connect } from 'react-redux';
import { ProgressComponent } from './ProgressComponent';
import { getExternalScript } from '../actions';

export class ProgressBar extends Component {
    render(){
        const { todos, dispatchGetExternalScript } = this.props;
        return (
            <div class="progressContainer">                
                <span>ProgressBar1</span>
                <ProgressComponent
                    bgcolor={todos.progressBar1.bgcolor}
                    width={todos.progressBar1.width}
                    completed={todos.progressBar1.completed}
                />
                <span>ProgressBar2</span>
                <ProgressComponent
                    bgcolor={todos.progressBar2.bgcolor}
                    width={todos.progressBar2.width}
                    completed={todos.progressBar2.completed}
                />
                {todos.progressBar3.completed && <span>ProgressBar3</span>}
                {todos.progressBar3.completed && <ProgressComponent
                    bgcolor={todos.progressBar3.bgcolor}
                    width={todos.progressBar3.width}
                    completed={todos.progressBar3.completed}
                />}

            </div>
        );
    }
    
}

ProgressBar.prototypes = {
    todos: propTypes.object,
    dispatchGetExternalScript: propTypes.func
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps,
    { dispatchGetExternalScript: getExternalScript})(ProgressBar);
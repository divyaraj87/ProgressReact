import React, { Component} from 'react';
import propTypes from 'prop-types';
import {connect } from 'react-redux';
import { selectChange, progressChange } from '../actions';

export class ControlBar extends Component {
    render(){
        const {todos: { buttons, progressBar3 }, dispatchSelectChange, dispatchProgressChange} = this.props;
        return (
            <div class="controlContainer">        
               <select id="mySelect" onChange={() => dispatchSelectChange()}>
                    <option>progressBar1</option>
                    <option>progressBar2</option>
                    {progressBar3.completed && <option>progressBar3</option>}
               </select>
               <button                
                    onClick={() => dispatchProgressChange(buttons[0])}>+{buttons[0]}</button>
               <button                
                    onClick={() => dispatchProgressChange(buttons[1])}>+{buttons[1]}</button>
               <button                
                    onClick={() => dispatchProgressChange(buttons[2])}>{buttons[2]}</button>
                <button                
                    onClick={() => dispatchProgressChange(buttons[3])}>{buttons[3]}</button>
            </div>
        );
    }
}

ControlBar.prototypes = {
    todos: propTypes.object,
    dispatchSelectChange: propTypes.func,
    dispatchProgressChange: propTypes.func
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, {
    dispatchSelectChange: selectChange,
    dispatchProgressChange: progressChange
})(ControlBar);
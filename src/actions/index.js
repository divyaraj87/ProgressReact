import { UPDATE_PROGRESS, UPDATE_SELECT, FETCH_URL } from '../constants';
import fetch from 'unfetch';

export function selectChange(){
  return(dispatch) => {
    const value = document.getElementById("mySelect").value;
    dispatch(fieldLoad('barSelected', value ));
  }
}

export function progressChange(newValue){
  return(dispatch, getState) =>{
    const { todos } = getState(); 
    const backBgColor = '';
    const selectedV= todos[todos.barSelected];
    const updatedValue = selectedV.completed + newValue;
    if(updatedValue >= 0 && updatedValue <= 100){    
      dispatch({
        type: UPDATE_PROGRESS,
        fieldName: todos.barSelected,
        value: updatedValue,
        width: updatedValue,
        bgcolor: '#0000ff'
      }); 
    }else if(updatedValue >= 0 && updatedValue > 100){
        dispatch({
          type: UPDATE_PROGRESS,
          fieldName: todos.barSelected,
          value: updatedValue,
          width: 100,
          bgcolor: todos.limitColor
        });
    }
  };
}
export function progressLoad(fieldName, value, width, bgcolor){ 
  return(dispatch, getState) =>{    
      dispatch({
        type: UPDATE_PROGRESS,
        fieldName,
        value,
        width,
        bgcolor
      }); 
  };
}

export function fieldLoad(fieldName, value){
  return(dispatch, getState) =>{    
      dispatch({
        type: UPDATE_SELECT,
        fieldName,
        value
      }); 
  };
}

export function responseMap(response){
  return(dispatch, getState) =>{
    const { todos } = getState();
    dispatch(progressLoad('progressBar1', response.bars[0], response.bars[0], todos.progressBar1.bgcolor));
    dispatch(progressLoad('progressBar2', response.bars[1], response.bars[1], todos.progressBar2.bgcolor));
    if(todos.progressBar3.completed)
    dispatch(progressLoad('progressBar3', response.bars[2], response.bars[2], todos.progressBar3.bgcolor));      
  };
}

export function getExternalScript(){
  return(dispatch, getState) =>{
    const { todos } = getState();
    dispatch(fieldLoad('spinnerEnable', true));
    fetch(FETCH_URL).then(res => res.json()).then((response) => {
      dispatch(fieldLoad('apiRsponse', response));      
      dispatch(responseMap(response));
      dispatch(fieldLoad('noOfBars', response.bars.length));
      dispatch(fieldLoad('buttons', response.buttons));
      dispatch(fieldLoad('loadProgress', true));
      dispatch(fieldLoad('spinnerEnable', false));
    })
  };
}


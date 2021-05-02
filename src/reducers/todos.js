import { UPDATE_PROGRESS, UPDATE_SELECT } from '../constants';

export const initialState = {
  progressBar1:{
     completed: '',
     width: '',
     bgcolor: '#0000ff'
  },
  progressBar2:{
    completed: '',
    width: '',
    bgcolor: '#0000ff'
 }, 
 progressBar3:{
  completed: '',
  width: '',
  bgcolor: '#0000ff'
},
buttons:[],
loadProgress: false,
spinnerEnable: false,
barSelected: 'progressBar1',
noOfBars: '',
limitColor: '#f00',
apiRsponse: []
};

export const todos = (state = initialState, action = {}) => {
  switch(action.type){
    case UPDATE_PROGRESS: {    
      return {
        ...state,
        [action.fieldName]:{
          ...state[action.fieldName],
          completed: action.value,
          width: action.width,
          bgcolor: action.bgcolor
        }
      }
    }
    case UPDATE_SELECT: {      
      return {
        ...state,
        [action.fieldName]: action.value
      }
    }
    default: {
      return state;
    }
  }

};

export default todos;
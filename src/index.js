import 'babel-polyfill'
import React from 'react'
import { render, unstable_renderSubtreeIntoContainer } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const middleware = [thunk];
let enhancer;
let initialState ={};
enhancer = applyMiddleware(...middleware);
const store = createStore(todoApp, initialState, enhancer);
const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

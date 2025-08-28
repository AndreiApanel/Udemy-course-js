import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
import {inc, dec, rnd} from './actions';

const store = configureStore({reducer});
const {dispatch, subscribe, getState} = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

subscribe(update);
const bindActions =
  (creator, dispatch) =>
  (...args) => {
    dispatch(creator(...args));
  };

const incDispatch = bindActions(inc, dispatch);
const decDispatch = bindActions(dec, dispatch);
const rndDispatch = bindActions(rnd, dispatch);

document.getElementById('inc').addEventListener('click', () => {
  incDispatch();
});

document.getElementById('dec').addEventListener('click', () => {
  decDispatch();
});

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
});

// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

ReactDOM.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
  document.getElementById('root'),
);

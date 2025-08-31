import React from 'react';
import {createRoot} from 'react-dom/client';
import {configureStore, bindActionCreators} from '@reduxjs/toolkit';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './components/Counter';

const store = configureStore({reducer});
const {dispatch, subscribe, getState} = store;
const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
const root = createRoot(document.getElementById('root'));
const update = () => {
  root.render(
    <React.StrictMode>
      <Counter
        counter={getState().value}
        inc={inc}
        dec={dec}
        rnd={() => {
          const value = Math.floor(Math.random() * 10);
          rnd(value);
        }}
      />
    </React.StrictMode>,
  );
};
//   document.getElementById('counter').textContent = getState().value;
update();

subscribe(update);

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   rnd(value);
// });

// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

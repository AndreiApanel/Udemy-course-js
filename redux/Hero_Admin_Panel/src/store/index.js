import {configureStore, combineReducers, compose} from '@reduxjs/toolkit';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const rootReducer = combineReducers({
  heroes,
  filters,
});

const enhancer =
  createStore =>
  (...args) => {
    const store = createStore(...args);

    const oldDispatch = store.dispatch;
    store.dispatch = action => {
      if (typeof action === 'string') {
        return oldDispatch({type: action});
      }
      return oldDispatch(action);
    };
    return store;
  };

const store = configureStore({
  reducer: rootReducer,
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(enhancer),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
// const rootReducer = combineReducers({
//   heroes,
//   filters,
// });
// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });

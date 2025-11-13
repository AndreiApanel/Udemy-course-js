import {configureStore} from '@reduxjs/toolkit';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const stringMiddleware = store => next => action => {
  if (typeof action === 'string') {
    return next({type: action});
  }
  return next(action);
};

// Compose middlewares and devtools
// const composedEnhancer = compose(
//   middlewareEnhancer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
// );

// const store = createStore(
//   rootReducer,
//   undefined,

//   composedEnhancer,
// );
const store = configureStore({
  reducer: {
    heroes,
    filters,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;

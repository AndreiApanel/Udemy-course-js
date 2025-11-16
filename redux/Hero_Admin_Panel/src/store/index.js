import {configureStore} from '@reduxjs/toolkit';
// import heroes from '../reducers/heroes';

import filters from '../components/heroesFilters/filtersSlice';
import {apiSlice} from '../components/api/apiSlice';

const stringMiddleware = () => next => action => {
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
    filters,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;

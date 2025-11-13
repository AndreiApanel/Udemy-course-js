import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const stringMiddleware = store => next => action => {
  if (typeof action === 'string') {
    return next({type: action});
  }
  return next(action);
};

const rootReducer = combineReducers({
  heroes,
  filters,
});

// Compose middlewares and devtools
const middlewareEnhancer = applyMiddleware(thunk, stringMiddleware);
const composedEnhancer = compose(
  middlewareEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

const store = createStore(
  rootReducer,
  undefined,

  composedEnhancer,
);

export default store;

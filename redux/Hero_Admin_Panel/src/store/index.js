import {configureStore, combineReducers} from '@reduxjs/toolkit';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';
const rootReducer = combineReducers({
  heroes,
  filters,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

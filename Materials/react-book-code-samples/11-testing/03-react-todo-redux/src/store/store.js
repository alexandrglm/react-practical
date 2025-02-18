import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log('RDX> type: ', action.type);
  console.log('RDX> payload: ', action.payload);
  console.log('RDX> currentState: ', store.getState());

  next(action);

  console.log('RDX> next state: ', store.getState());
};

const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

//export const store = createStore(rootReducer, undefined, composedEnhancers);

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    composedEnhancers
  })
}

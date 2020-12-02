import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer, /* preloadedState, */
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ),
);

// then run the saga
sagaMiddleware.run(mySaga)

export default store;

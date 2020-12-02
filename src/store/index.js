import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer, /* preloadedState, */
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga)

export default store;

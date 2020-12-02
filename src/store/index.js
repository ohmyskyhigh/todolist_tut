import {createStore} from 'redux';
import {reducer} from './reducer';


const store = createStore(
  reducer, /* preloadedState, */
);

export default store;

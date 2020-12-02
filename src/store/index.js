import {createStore, applyMiddleware, compose} from 'redux';
import {reducer} from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
));
export default store;

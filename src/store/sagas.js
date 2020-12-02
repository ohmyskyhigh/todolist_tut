import {takeEvery, put} from 'redux-saga/effects'
import {UPDATE_ITEM_INPUT, SUBMIT_ITEM_INPUT, DELETE_ITEM_DATA, GET_TODOS} from './actionlib'
import {getTodos} from './actionCreators'
import axios from 'axios';

function* getTodos_saga(){
  const res = yield axios.get('/todos');
  const action = yield getTodos(res.data.data);
  return put(action);
}

function* mySaga() {
  yield takeEvery(GET_TODOS, getTodos_saga);
}

export default mySaga;

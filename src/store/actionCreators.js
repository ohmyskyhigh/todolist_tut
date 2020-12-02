//import {UPDATE_ITEM_INPUT, SUBMIT_ITEM_DATA, DELETE_ITEM_DATA} from './actionType';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const updateInput = createAction('update_item_input')
export const submitInput = createAction('submit_item_input')
export const deleteItem = createAction('delete_item_data')

export const getTodos = ()=>{
  var mock = new MockAdapter(axios);
  mock.onGet('/todos').reply(200,{
    data:'this is mockup'
  })
  return (dispatch)=>{axios.get('/todos')
          .then(res=>{
            const action = submitInput(res.data.data);
            dispatch(action)
          })
          .catch(()=>{alert('error')});
        }
}

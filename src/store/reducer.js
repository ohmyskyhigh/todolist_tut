import {createReducer} from '@reduxjs/toolkit';
import {updateInput, submitInput, deleteItem} from './actionCreators'

const defaultState = {
  data: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ],
  input: ''
};

//两种动作，change_inputData; submit_data
export const reducer = createReducer(defaultState, (action) => {
  action
    .addCase(updateInput, (state, action) => {
      state.input = action.payload
    })
    .addCase(submitInput, (state, action) => {
      state.data.push(action.payload);
      state.input = ''
    })
    .addCase(deleteItem, (state, action) => {
      state.data.splice(action.payload, 1)
    })
})

//import {UPDATE_ITEM_INPUT, SUBMIT_ITEM_DATA, DELETE_ITEM_DATA} from './actionType';
import { createAction } from '@reduxjs/toolkit';
import {UPDATE_ITEM_INPUT, SUBMIT_ITEM_INPUT, DELETE_ITEM_DATA, GET_TODOS} from './actionlib'


export const updateInput = createAction(UPDATE_ITEM_INPUT)
export const submitInput = createAction(SUBMIT_ITEM_INPUT)
export const deleteItem = createAction(DELETE_ITEM_DATA)
export const getTodos = createAction(GET_TODOS)

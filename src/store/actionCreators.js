//import {UPDATE_ITEM_INPUT, SUBMIT_ITEM_DATA, DELETE_ITEM_DATA} from './actionType';
import { createAction } from '@reduxjs/toolkit';

export const updateInput = createAction('update_item_input')
export const submitInput = createAction('submit_item_input')
export const deleteItem = createAction('delete_item_data')

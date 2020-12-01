import {UPDATE_ITEM_DATA, SUBMIT_ITEM_DATA, DELETE_ITEM_DATA} from './actionType'

export updateItemAction = inputs => {
  return {
  type: UPDATE_ITEM_DATA,
  value: inputs
}}

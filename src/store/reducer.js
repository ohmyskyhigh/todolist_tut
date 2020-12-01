import {UPDATE_ITEM_DATA, SUBMIT_ITEM_DATA, DELETE_ITEM_DATA} from './actionType'

const defaultState = {
  data: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ],
  input: 'whad u say'
};

//两种动作，change_inputData; submit_data
export default (state=defaultState, action) => {
  if(action.type===UPDATE_ITEM_DATA){
    const newState = JSON.parse(JSON.stringify(state));
    newState.input = action.value;
    return newState;
  }
  if(action.type===SUBMIT_ITEM_DATA){
    const newState = JSON.parse(JSON.stringify(state));
    newState.data.push(newState.input);
    newState.input = '';
    return newState;
  }
  if(action.type===DELETE_ITEM_DATA){
    const newState = JSON.parse(JSON.stringify(state));
    newState.data.splice(action.value, 1);
    return newState
  }
  return state;
}

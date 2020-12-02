import react, {Component} from 'react';
import store from './store/';
import {getTodos, updateInput, submitInput, deleteItem} from './store/actionCreators';
import {AppUI} from './UI';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';



class App extends Component{

  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleSubmit.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
  }

  componentDidMount(){
    store.subscribe(this.handlesubscription.bind(this));

    let mock = new MockAdapter(axios);
    mock.onGet('/todos').reply(200,{
      data:'this is mockup'
    });

    const action = getTodos();
    store.dispatch(action);
  }

  handlesubscription = prevState=>{
    this.setState(store.getState())
  }

  render(){
    return (
      <AppUI
        input={this.state.input}
        data={this.state.data}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        listItemClick={this.listItemClick}
      />)
  }

  handleInput = inputValue => {
    const action = updateInput(inputValue.target.value);
    return store.dispatch(action)
  }

  handleSubmit = input => {
    const action = submitInput(input)
    return store.dispatch(action)
  }

  listItemClick = idx=>{
    console.log(idx)
    const action = deleteItem(idx)
    return store.dispatch(action)
  }
}


export default App;

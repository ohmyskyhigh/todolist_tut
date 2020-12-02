import react, {Component} from 'react';
import store from './store/';
import {updateInput, submitInput, deleteItem, getTodos} from './store/actionCreators';
import {AppUI} from './UI';



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
    const action = getTodos();
    return store.dispatch(action);
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

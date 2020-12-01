import react, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/';
import {updateInput, submitInput, deleteItem} from './store/actionCreators';
import AppUI from './UI';


class App extends Component{

  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
  }

  componentDidMount(){
    store.subscribe(this.handlesubscription.bind(this));
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
        handleClick={this.handleClick}
        listItemClick={this.listItemClick}
      />)
  }

  handleInput = inputValue => {
    const action = updateInput(inputValue.target.value);
    return store.dispatch(action)
  }

  handleClick = prevState => {
    const action = submitInput('')
    return store.dispatch(action)
  }

  listItemClick = idx=>{
    console.log(idx)
    const action = deleteItem(idx)
    return store.dispatch(action)
  }
}


export default App;

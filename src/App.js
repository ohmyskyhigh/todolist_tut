import react, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/';
import {UPDATE_ITEM_DATA, SUBMIT_ITEM_DATA, DELETE_ITEM_DATA} from './store/actionType'
import {updateItemAction} from './store/actionCreators'


class App extends Component{

  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    store.subscribe(this.handlesubscription.bind(this));
  }

  handlesubscription = prevState=>{
    this.setState(store.getState())
  }

  render(){
    const data = this.state.data
    const input = this.state.input
    console.log(input)
    return(
      <Fragment>
        <div style={{'marginTop':'10px', 'marginLeft': '10px'}}>
          <Input
            placeholder="Todos"
            size='large'
            style={{'width': '300px'}}
            value = {input}
            onChange = {this.handleInput}
            onPressEnter = {this.handleClick}
          />
          <Button type="primary" style={{'marginLeft':'5px'}} onClick={this.handleClick}>
            提交
          </Button>
        </div>
        <div>
          <List
            size="large"
            style = {{'marginLeft': '10px', 'marginRight': '10px', 'marginTop': '10px', 'width':'300px'}}
            bordered
            dataSource={data}
            renderItem={(item, idx) => <List.Item onClick={this.listItemClick.bind(this, idx)}>{item}</List.Item>}
          />
        </div>
      </Fragment>
    );
  }

  handleInput = inputValue => {
    const action = updateItemAction(inputValue.target.value);
    return store.dispatch(action)
  }

  handleClick = prevState => {
    const action = {
      type: SUBMIT_ITEM_DATA,
      value: ''
    }
    return store.dispatch(action)
  }

  listItemClick = idx=>{
    const action = {
      type: DELETE_ITEM_DATA,
      value: idx
    }
    return store.dispatch(action)
  }
}


export default App;

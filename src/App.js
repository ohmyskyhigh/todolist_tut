import react, {Component} from 'react';
import store from './store/';
import {updateInput, submitInput, deleteItem, getTodos} from './store/actionCreators';
import {AppUI} from './UI';
import {connect} from 'react-redux';

const mapState2Props = (state)=>{
  return {
    input: state.input,
    data: state.data,
  }
}

class App extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const action = getTodos();
    return store.dispatch(action);
  }

  render(){
    return (
      <AppUI
        input={this.props.input}
        data={this.props.data}
        handleInput={this.props.handleInput}
        handleSubmit={this.props.handleSubmit}
        listItemClick={this.props.listItemClick}
      />)
  }
}

const mapDispatch2Props = (dispatch) =>{
  return {
    handleInput: inputValue => {
      const action = updateInput(inputValue.target.value);
      dispatch(action)
    },
    handleSubmit: input => {
      const action = submitInput(input)
      dispatch(action)
    },
    listItemClick: idx => {
      const action = deleteItem(idx)
      dispatch(action)
    }
  }
}

export default connect(mapState2Props,mapDispatch2Props)(App);

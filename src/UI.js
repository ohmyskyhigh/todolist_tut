import react, {Component, Fragment} from 'react';
import App from './App'
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';

const UI = (props) => {
  const {data} = props
  const {input} = props
  return(
    <Fragment>
      <div style={{'marginTop':'10px', 'marginLeft': '10px'}}>
        <Input
          placeholder="Todos"
          size='large'
          style={{'width': '300px'}}
          value = {input}
          onChange = {props.handleInput}
          onPressEnter = {props.handleClick}
        />
        <Button type="primary" style={{'marginLeft':'5px'}} onClick={props.handleClick}>
          提交
        </Button>
      </div>
      <div>
        <List
          size="large"
          style = {{'marginLeft': '10px', 'marginRight': '10px', 'marginTop': '10px', 'width':'300px'}}
          bordered
          dataSource={data}
          renderItem={(item, idx) => <List.Item onClick={()=>{props.listItemClick(idx)}}>{item}</List.Item>}
        />
      </div>
    </Fragment>
  )
}

export default UI;

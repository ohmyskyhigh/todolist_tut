import react, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class App extends Component{

  render(){
    return(
      <Fragment>
        <div style={{'marginTop':'10px', 'marginLeft': '10px'}}>
          <Input placeholder="Todos"  size='large' style={{'width': '300px'}}/>
          <Button type="primary" style={{'marginLeft':'5px'}}>提交</Button>
        </div>
        <List
          size="large"
          style = {{'marginLeft': '10px', 'marginRight': '10px', 'marginTop': '10px', 'width':'300px'}}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Fragment>
    );
  }
}


export default App;

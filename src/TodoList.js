import React, { Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input value={this.state.inputValue} placeholder='todolist' style={{width: 300, marginRight: '10px'}}/>
                    <Button type="primary">submit</Button>
                </div>
                <List
                style={{marginTop: '10px', width: '300px'}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.state.list}
                renderItem={item => (
                    <List.Item>
                    {item}
                    </List.Item>
                )}
                />
            </div>
        )
    }
}

export default TodoList;
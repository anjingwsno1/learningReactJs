import React, { Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder='todolist' 
                        style={{width: 300, marginRight: '10px'}}
                        onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleButtonClick} type="primary">submit</Button>
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


    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleButtonClick() {
        const action = {
            type: 'add_todo_item'
        }
        store.dispatch(action);    }
}
export default TodoList;
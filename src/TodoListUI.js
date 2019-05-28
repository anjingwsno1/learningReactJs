import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return(
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input 
                        value={props.inputValue} 
                        placeholder='todo info' 
                        style={{width: 300, marginRight: '10px'}}
                        onChange={props.handleInputChange}
                    />
                    <Button onClick={props.handleButtonClick} type="primary">submit</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={item => (
                        <List.Item onClick={(index) => {props.handleItemDelete(index)}}>
                        {item}
                        </List.Item>
                    )}
                />
            </div>
    )
}



export default TodoListUI;
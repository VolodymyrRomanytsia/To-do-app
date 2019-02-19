import React, { Component } from 'react';
import Input from './input';

export class AddTodo extends Component {


    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.newTodoText !== ''){
            this.props.addTodo(this.props.newTodoText);
        }
        else {
            return
        }
    }

    onChange = (e) => {
        this.props.newTodo(e.target.value);
    }

    render() {
        const style = {background: 'transparent', 
        border: 'none',
        boxShadow: 'none',
        height: '25px',
        borderRadius: 0,
        color: '#fff'};

        const placeholder = 'New Todo';
        
        return (
            <form  onSubmit={this.onSubmit}>
                <Input placeholder={placeholder} 
                       style={style}
                       value={this.props.newTodoText}
                       onChange={this.onChange} 
                       name="title"/>
            </form>
        )
    }
}

export default AddTodo;
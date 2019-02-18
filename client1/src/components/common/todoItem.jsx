import React, { Component } from 'react';


export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: 'black',
            textDecoration: this.props.todo.resolved ? 'line-through' : 'none',
        }
    };

    resolTodo(_id, resolved) {
        this.props.resolveTodo(_id, resolved)
    }

    delTodo(_id) {
        this.props.deleteTodo(_id)
    }


    render() {
        const { _id, text, resolved} = this.props.todo;
        return (
            <li style={ this.getStyle() } className="list-group-item p-0">
                <input type="checkbox" className="form-check-label" onChange={ () => this.resolTodo(_id, !resolved) } checked={ resolved ? 'checked': '' }/>{' '}
                {text}
                <div onClick={() => this.delTodo(_id)} style={{ float: 'right' }}>
                    <i className="fas fa-trash-alt text-white" aria-hidden="true"></i>
                </div>
            </li>
        )
    }
}


export default TodoItem;

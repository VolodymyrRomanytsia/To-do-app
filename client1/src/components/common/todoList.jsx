import React, { Component } from "react";
import TodoItem from './todoItem';
import * as todoActions from '../../redux/actions/todosAction';
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
      mappedTodoState: state
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      resolveTodo: (_id, resolved) => dispatch(todoActions.resolveTodo(_id, resolved)),
      deleteTodo: (_id) => dispatch(todoActions.deleteTodo(_id))
    }
  }

class TodoList extends Component {

    render() {
        const {todos, resolveTodo, deleteTodo} = this.props 
        
        return todos.map((todo) => (
            <TodoItem key={todo._id} todo = {todo} deleteTodo = {deleteTodo} resolveTodo = { resolveTodo }/>
        ));
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
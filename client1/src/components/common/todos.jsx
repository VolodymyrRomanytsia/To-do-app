import React, { Component } from 'react';
import Counter from './counter';
import AddTodo from './addTodo';
import TodoList from './todoList';
import * as todoActions from '../../redux/actions/todosAction';
import { connect } from "react-redux"


const mapStateToProps = state => {
  return {
    mappedTodoState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(todoActions.fetchTodos()),
    addNewTodo: (text) => dispatch(todoActions.addNewTodo(text)),
    addNewTodoRequest: (text) => dispatch(todoActions.addNewTodoRequest(text))
  }
}

class Todos extends Component {    
  componentDidMount() {
    this.props.fetchTodos();
  }

  addTodo = (text) => {
    this.props.addNewTodo(text);
  }

  newTodo = (text) => {
    this.props.addNewTodoRequest(text);
  }

  
  render() { 
    const {todos, newTodoText} = this.props.mappedTodoState;
    
      return ( 
          <ul className="list-group">
              <li style={{backgroundColor: 'black'}} className="list-group-item"><Counter count={todos.length} className="col-2"/><strong className="col-8">TO DO</strong><i style={{ float: 'right' }} className="fas fa-ellipsis-h text-white"></i></li>
              <li style={{backgroundColor: 'black'}} className="list-group-item p-0"><ul style={{backgroundColor: 'black'}} className="list-group-item"><TodoList todos={todos}/></ul></li>
              <li style={{backgroundColor: 'black'}} className="list-group-item pt-0"><AddTodo addTodo={this.addTodo} newTodo={this.newTodo} newTodoText={newTodoText}/></li>
          </ul>
        );
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
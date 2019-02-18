import todos from "../../services/todosService";
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILED,
  ADD_NEW_TODO_REQUEST,
  ADD_NEW_TODO_REQUEST_FAILED,
  ADD_NEW_TODO_REQUEST_SUCCESS,
  RESOLVE_TODO_REQUEST,
  RESOLVE_TODO_SUCCESS,
  RESOLVE_TODO_FAILED,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED,
  ADD_NEW_MAINGOAL_REQUEST,
  ADD_NEW_MAINGOAL_REQUEST_SUCCESS,
  ADD_NEW_MAINGOAL_REQUEST_FAILED
} from "./constants"

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return todos.getTodos()
      .then(res => {
        dispatch(fetchTodosSuccess(res.data));
        console.log(res.data)
      })
      .catch(error => {
        dispatch(fetchTodosFailed(error));
      })
  }
}

export const fetchTodosRequest = () => {
  return {
    type: FETCH_TODOS_REQUEST
  }
}

export const fetchTodosSuccess = ({todos, maingoal}) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos: todos,
    maingoal: maingoal
  }
}

export const fetchTodosFailed = (error) => {
  return {
    type:FETCH_TODOS_FAILED,
    error
  }
}

export const addNewTodo = (text) => {
  return (dispatch) => {
    dispatch(addNewTodoRequest(text));
    return todos.createTodo({'text': text}) 
      .then(res => {
        dispatch(addNewTodoRequestSuccess(res.data));
      })
      .catch(error => {
        dispatch(addNewTodoRequestFailed(error));
      })
  }
}

export const addNewTodoRequest = (text) => {
  return {
    type: ADD_NEW_TODO_REQUEST,
    text
  }
}

export const addNewTodoRequestSuccess = (todo) => {
  return {
    type: ADD_NEW_TODO_REQUEST_SUCCESS,
    todo:todo
  }
}

export const addNewTodoRequestFailed = (error) => {
  return {
    type: ADD_NEW_TODO_REQUEST_FAILED,
    error
  }
}

export const resolveTodo = (_id, resolved) => {
  return (dispatch) => {
    dispatch(resolveTodoRequest(_id, resolved));
    return todos.resolveTodo(_id, resolved)
      .then(res => {
        dispatch(resolveTodoSuccess(res.data));
      })
      .catch(error => {
        dispatch(resolveTodoFailed(error));
      })
  }
}

export const resolveTodoRequest = (_id, resolved) => {
   return {
     type: RESOLVE_TODO_REQUEST,
     _id, 
     resolved
   }
}

export const resolveTodoSuccess = (todo) => {
  return {
    type: RESOLVE_TODO_SUCCESS,
    todo:todo
  }
}

export const resolveTodoFailed = (error) => {
  return {
    type: RESOLVE_TODO_FAILED,
    error
  }
}

export const deleteTodo = (_id) => {
  return (dispatch) => {
    dispatch(deleteTodoRequest(_id));
    return todos.deleteTodo({"_id": _id})
    .then(res => {
      dispatch(deleteTodoSuccess(res.data));
    })
    .catch(error => {
      dispatch(deleteTodoFailed(error));
    })
  }
}

export const deleteTodoRequest = (_id) => {
   return {
     type: DELETE_TODO_REQUEST,
     _id
   }
}

export const deleteTodoSuccess = (message) => {
  return {
    type: DELETE_TODO_SUCCESS,
    message:message
  }
}

export const deleteTodoFailed = (error) => {
  return {
    type: DELETE_TODO_FAILED,
    error
  }
}

export const addNewMainGoal = (text) => {
  return (dispatch) => {
    dispatch(addNewMainGoalRequest(text));
    return todos.createMainGoal({'text': text}) 
      .then(res => {
        dispatch(addNewMainGoalRequestSuccess(res.data));
      })
      .catch(error => {
        dispatch(addNewMainGoalRequestFailed(error));
      })
  }
}

export const addNewMainGoalRequest = (text) => {
  return {
    type: ADD_NEW_MAINGOAL_REQUEST,
    text
  }
}

export const addNewMainGoalRequestSuccess = (maingoal) => {
  return {
    type: ADD_NEW_MAINGOAL_REQUEST_SUCCESS,
    maingoal:maingoal
  }
}

export const addNewMainGoalRequestFailed = (error) => {
  return {
    type: ADD_NEW_MAINGOAL_REQUEST_FAILED,
    error
  }
}

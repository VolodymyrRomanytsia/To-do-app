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
} from "../actions/constants"

const INITIAL_STATE = {
    todos:[],
    isFetching: false,
    error: null,
    _id: null,
    newTodoText: '',
    mainGoal: null,
    mainGoalText: ''
  }
  
  export  const todoReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
            return {
              ...currentState,
              todos:[],
              isFetching: true,
              error: null,
              _id: null
            }
  
      case FETCH_TODOS_SUCCESS:
            return {
              ...currentState,
              todos:action.todos,
              isFetching: false,
              error: null,
              _id: null,
              mainGoal: action.maingoal
            }
  
      case FETCH_TODOS_FAILED:
            return {
              ...currentState,
              todos:[],
              isFetching: false,
              error: action.error,
              _id: null
            }
  
      case ADD_NEW_TODO_REQUEST:
            return {
              ...currentState,
              todos:currentState.todos,
              isFetching: true,
              error: null,
              _id: null,
              newTodoText: action.text
            }
  
      case ADD_NEW_TODO_REQUEST_FAILED:
            return {
              ...currentState,
              todos:currentState.todos,
              isFetching: true,
              error: action.error,
              _id: null,
              newTodoText: ''
            }
  
      case ADD_NEW_TODO_REQUEST_SUCCESS:
            const nextState =  {
              ...currentState,
              todos:[...currentState.todos, action.todo],
              isFetching: false,
              error: null,
              _id: null,
              newTodoText: ''
            }
          return nextState;
  
      case RESOLVE_TODO_REQUEST:
            return {
              ...currentState,
              todos:currentState.todos,
              isFetching: true,
              error: null,
              _id: null
            }
  
      case RESOLVE_TODO_SUCCESS:
           const updatedTodos = currentState.todos.map((todo) => {
             if(todo._id !== action.todo._id){
               return todo;
             }
             return { ...todo, ...action.todo }
           })
            return {
              ...currentState,
              todos:updatedTodos,
              isFetching: false,
              error: null,
              _id: null
            }
  
    case RESOLVE_TODO_FAILED:
          return {
            ...currentState,
            todos:currentState.todos,
            isFetching: false,
            error: action.error,
            _id: null
          }
  
    case DELETE_TODO_REQUEST:
          return {
            ...currentState,
            todos:currentState.todos,
            isFetching: true,
            error: null,
            _id: action._id
          }
  
    case DELETE_TODO_SUCCESS:
    const filteredTodos = currentState.todos.filter((todo) => todo._id !== currentState._id)
          return {
            ...currentState,
            todos:filteredTodos,
            isFetching: false,
            error: null,
            _id: null
          }
  
  
    case DELETE_TODO_FAILED:
          return {
            ...currentState,
            todos:currentState.todos,
            isFetching: false,
            error: action.error,
            _id: null
          }

    case ADD_NEW_MAINGOAL_REQUEST:
          return {
            ...currentState,
            todos:currentState.todos,
            isFetching: true,
            error: null,
            _id: null,
            mainGoalText: action.text
          }

    case ADD_NEW_MAINGOAL_REQUEST_FAILED:
          return {
            ...currentState,
            todos:currentState.todos,
            isFetching: false,
            error: action.error,
            _id: null,
            mainGoalText: ''
          }

    case ADD_NEW_MAINGOAL_REQUEST_SUCCESS:
          const newState =  {
            ...currentState,
            todos:currentState.todos,
            isFetching: false,
            error: null,
            _id: null,
            mainGoal: action.maingoal,
            mainGoalText: ''
          }
        return newState;
  
      default:
         return currentState;
  
    }
  }

  export default todoReducer
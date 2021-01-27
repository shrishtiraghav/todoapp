import {GET_TODOS_STARTED,GET_TODOS_SUCCESS,GET_TODOS_FAILED,TODOS_ADD,TODOS_ADD_SUCCESS,TODOS_ADD_FAILED,TODO_DELETE,TODO_DELETE_SUCCESS,TODO_DELETE_FAILED,TODO_UPDATE,TODO_UPDATE_SUCCESS,TODO_UPDATE_FAILED} from '../Actions/Actions';
const defaultState = {
    isLoading: false,
    error: null,
    todos: [],
};

const TodoReducers = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TODOS_STARTED:
            return { ...state, isLoading: true};

        case GET_TODOS_SUCCESS:
            return { ...state, isLoading: false, todos: action.payload};

        case GET_TODOS_FAILED:
            return { ...state, isLoading: false, todos: action.payload};

        case TODOS_ADD:
            return { ...state, isLoading: true};

        case TODOS_ADD_SUCCESS:
            return { ...state, isLoading: false, todos: [...state.todos, {todo_completed: false, todo_name:action.payload}]};

        case TODOS_ADD_FAILED:
            return { ...state, isLoading: false};

        case TODO_DELETE:
            return { ...state, isLoading: true};

        case TODO_DELETE_SUCCESS:
            return { ...state, isLoading: false, todos: [...state.todos.filter(todo => todo._id !== action.payload)]};

        case TODO_DELETE_FAILED:
            return { ...state, isLoading: false};

        case TODO_UPDATE:
            return { ...state, isLoading: true};

        case TODO_UPDATE_SUCCESS:
            return { ...state, isLoading: false, todos: [...state.todos.map(todo => todo._id === action.payload ? {...todo, todo_completed: !action.todo_completed} : todo)]};

        case TODO_UPDATE_FAILED:
            return { ...state, isLoading: false};

        default:
            return state
    }
};

export default TodoReducers
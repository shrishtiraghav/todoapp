export const GET_TODOS_STARTED = 'GET_TODOS_STARTED' 
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAILED =  'GET_TODOS_FAILED'
export const TODOS_ADD = 'TODOS_ADD'
export const TODOS_ADD_SUCCESS = 'TODOS_ADD_SUCCESS'
export const TODOS_ADD_FAILED = 'TODOS_ADD_FAILED'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_DELETE_SUCCESS = 'TODO_DELETE_SUCCESS'
export const TODO_DELETE_FAILED = 'TODO_DELETE_FAILED'
export const TODO_UPDATE = 'TODO_UPDATE'
export const TODO_UPDATE_SUCCESS = 'TODO_UPDATE_SUCCESS'
export const TODO_UPDATE_FAILED = 'TODO_UPDATE_FAILED'

const endpoint = 'https://getir-todo-backend.herokuapp.com/todos';
export function getTodos() {
    return async (dispatch) => {
        dispatch({
            type: GET_TODOS_STARTED
        });

        try {
            const res = await fetch(endpoint)
            const data = await res.json()

            dispatch({
                type: GET_TODOS_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_TODOS_FAILED,
                payload: error
            })
        }
    }
}



export function todosAdd(text) {
    return async (dispatch) => {
        dispatch({
            type: TODOS_ADD
        });

        try {
            const res = await fetch(endpoint+'/add' ,{method: 'POST', headers:{"Content-type":"application/json; charset=UTF-8"},  body:JSON.stringify({todo_name: text})} )
            if(res.ok) {
                alert("todo added successfully");
                dispatch({
                    type: TODOS_ADD_SUCCESS,
                    payload: text
                })
            }
        } catch (error) {
            dispatch({
                type: TODOS_ADD_FAILED,
                payload: error
            })
        }
    }
}


export function todoDelete(id) {
    return async (dispatch) => {
        dispatch({
            type: TODO_DELETE
        });

        try {
            // const res = await fetch(endpoint+'/delete/'+id ,{method: 'DELETE', headers:{"Content-type":"application/json; charset=UTF-8"}} )
            // const data = await res.json();
            dispatch({
                type: TODO_DELETE_SUCCESS,
                payload: id
            })

        } catch (error) {
            dispatch({
                type: TODO_DELETE_FAILED,
                payload: error
            })
        }
    }
}

export function todoUpdate(id, todo_completed) {
    return async (dispatch) => {
        dispatch({
            type: TODO_UPDATE
        });

        try {
            // const res = await fetch(endpoint+'/update/'+id ,{method: 'POST', headers:{"Content-type":"application/json; charset=UTF-8"}} )
            // const data = await res.json();
            dispatch({
                type: TODO_UPDATE_SUCCESS,
                payload: id,
                todo_completed: todo_completed
            })

        } catch (error) {
            dispatch({
                type: TODO_UPDATE_FAILED,
                payload: error
            })
        }
    }
}
import reducer from './TodoReducers';
import * as types from '../Actions/Actions'

const initialState = {
    isLoading: false,
    error: null,
    todos: []
};

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles todo start request', () => {
    expect(reducer(initialState, { type: types.GET_TODOS_STARTED })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it('handles todo start request', () => {
    expect(reducer(initialState, { type: types.GET_TODOS_SUCCESS })).toEqual({
      ...initialState,
      isLoading: false,
      todo: undefined
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODOS_ADD })).toEqual({
      ...initialState,
      isLoading: true
    });
  });
  it('handles get todo request fail', () => {
    expect(reducer(initialState, { type: types.GET_TODOS_FAILED })).toEqual({
      ...initialState,
      isLoading: false
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODOS_ADD_SUCCESS })).toEqual({
      ...initialState,
      isLoading: false,
      todos : [
         {
            "todo_completed": false,
            "todo_name": undefined,
           }
           ]
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODOS_ADD_FAILED })).toEqual({
      ...initialState,
      isLoading: false
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODO_DELETE })).toEqual({
      ...initialState,
      isLoading:true
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODO_DELETE_SUCCESS })).toEqual({
      ...initialState,
      isLoading: false
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODO_DELETE_FAILED })).toEqual({
      ...initialState,
      isLoading: false
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODO_UPDATE })).toEqual({
      ...initialState,
      isLoading: true
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODO_UPDATE_SUCCESS })).toEqual({
      ...initialState,
      isLoading: false
    });
  });
  it('handles add todo request', () => {
    expect(reducer(initialState, { type: types.TODO_UPDATE_FAILED })).toEqual({
      ...initialState,
      isLoading: false
    });
  });
})
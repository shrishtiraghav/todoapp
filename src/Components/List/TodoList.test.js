import React from 'react';
import TodoList from "./TodoList";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from "react-redux";
import store from "../../Redux/Store/Store";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useDispatch: () => ({
    })
}));

describe('<TodoList/>' , () => {
    let props;
    let wrapper;
    const todoUpdate = jest.fn();
    const todoDelete = jest.fn();
    Enzyme.configure({ adapter: new Adapter() })

    beforeEach(() => {
        props = {
            todo_name: 'abc',
            todo_completed: true , 
            a_id: 1
        };

        wrapper = mount( <Provider store={store}><TodoList {...props} onClick = {todoUpdate()} onClick={todoDelete()}/> </Provider>)
        console.log(wrapper.debug())
    })
    test("render list box", () => {
        expect(wrapper.find(".list-delete")).toBeTruthy;
    })
    test("render button", () => {
        wrapper.find(".list-text-done").simulate('click');
        expect(todoUpdate).toBeCalled();
    })
    test("render button", () => {
        wrapper.find(".list-delete").simulate('click');
        expect(todoUpdate).toBeCalled();
    })
})
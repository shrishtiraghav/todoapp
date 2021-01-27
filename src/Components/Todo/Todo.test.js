import Todo from "./Todo";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from "react-redux";
import store from "../../Redux/Store/Store";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useDispatch: () => ({
    })
    }));

describe("<Todo/>", () => {
    let wrapper;
    const setText = jest.fn();
    const addTodo = jest.fn();
    Enzyme.configure({ adapter: new Adapter() })
    beforeEach(() => {
        wrapper = mount( <Provider store={store}><Todo onClick = {addTodo()} onChange = {setText()}/> </Provider>)
        // console.log(wrapper.debug())
    })
    test("render text box", () => {
        expect(wrapper.find(".todo-box")).toBeTruthy;
    })
    test("render text area", () => {
        expect(wrapper.find(".todo-area")).toBeTruthy;
    })
    test("render text area", () => {
       wrapper.find(".todo-area").simulate('change', {target: {value: 'dms'}});
       expect(setText).toBeCalled();
    })
    
    test("render button box", () => {
        expect(wrapper.find(".button-area")).toBeTruthy;
    })
    test("render button", () => {
        expect(wrapper.find(".add-button").text()).toContain("ADD");
    })
    test("render button", () => {
        wrapper.find(".add-button").simulate('click');
        expect(addTodo).toBeCalled();
    })
})

import React from 'react';
import List from "./List";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from "react-redux";
import store from "../../Redux/Store/Store";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useDispatch: () => ({
    }),
    useSelector: () => ({
    })
}));

describe('<List/>' , () => {
    let props;
    let wrapper;
    let useEffect;

    const list = [{todo_name: 'abc', todo_completed: true ,  _id: 1}];

    let mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
      };
    
    Enzyme.configure({ adapter: new Adapter() })
    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect");
        props = {
            getTodos: jest.fn().mockResolvedValue(list),
           
        };
        mockUseEffect();

        wrapper = mount( <Provider store={store}><List {...props}/> </Provider>)
        // console.log(wrapper.debug())
    })
    test("render list box", () => {
        expect(wrapper.find(".list-box")).toBeTruthy;
    })
    test("render list area", () => {
        expect(wrapper.find(".list-area")).toBeTruthy;
    })
})

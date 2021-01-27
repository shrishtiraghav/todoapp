// import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from "react-redux";
import store from "./Redux/Store/Store";

describe('<App/>' , () => {
    let wrapper;
    Enzyme.configure({ adapter: new Adapter() })
    beforeEach(() => {
        wrapper = shallow( <Provider store={store}><App/> </Provider>)
    })
    test("test layout renders" , () => {
        expect(wrapper.find("Layout")).toBeTruthy;
    })
})


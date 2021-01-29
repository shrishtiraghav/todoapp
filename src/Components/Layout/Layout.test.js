import Layout from "./Layout";
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('<Layout/>' , () => {
    let wrapper;
    Enzyme.configure({ adapter: new Adapter() })

    beforeEach(() => {
        wrapper = shallow(<Layout />)
    })

    test("render main component", () => {
        expect(wrapper.find(".main")).toBeTruthy;
    })
    test("render todo button", () => {
        expect(wrapper.find(".todo-button")).toBeTruthy;
    })
    test("render list button", () => {
        expect(wrapper.find(".list-button")).toBeTruthy;
    })
})
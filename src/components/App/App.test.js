import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
// import dataCleaner from '../../helper.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
	const wrapper = shallow(<App />);
	expect(wrapper).toMatchSnapshot();
})

it('invokes scrollFilm function on componentDidMount', () => {
	const dataCleaner = jest.fn()
	const wrapper = mount(<App />);
	wrapper.update();
	expect(dataCleaner).toBeCalled()
})

it('displays randomly scrolling film', () => {
	const wrapper = shallow(<App />);

})




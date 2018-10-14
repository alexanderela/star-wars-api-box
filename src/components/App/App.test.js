import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import DataCleaner from '../../helper.js'

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('matches the snapshot', () => {
	const wrapper = shallow(<App />);
	expect(wrapper).toMatchSnapshot();
})

it('invokes showFilm function on componentDidMount', () => {
	const showFilm = jest.fn()
	const wrapper = shallow(<App />);
	wrapper.update();
	expect(showFilm).toHaveBeCalled()
})

it('has the correct default state', () => {
	const mockMath = Object.create(global.Math)
	mockMath.random = () => 0.5;
	global.Math = mockMath

	const wrapper = shallow(<App />);
	const expected = {
		dataCleaner: new DataCleaner(),
    films: {},
    people: [],
    vehicles: [],
    planets: [],
    peopleSelected: false,
    vehiclesSelected: false,
    planetsSelected: false
	}
	expect(wrapper.state()).toEqual(expected)

})




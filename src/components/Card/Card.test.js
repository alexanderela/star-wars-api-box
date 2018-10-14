import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import mockPerson from '../../mockData/mockPerson.js';
import { shallow } from 'enzyme';

describe('Card', () => {
	let wrapper;

	// beforeEach(() => {


	// })

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('renders people cards if people props are present', () => {
		wrapper = shallow(<Card people={mockPerson}/>)
		expect(wrapper.find('h3').length).toEqual(7)
	})

	it('renders vehicle cards if vehicle props are present', () => {
		wrapper = shallow(<Card vehicles={vehicles}/>)
	})

	it('renders planet cards if planet props are present', () => {
		wrapper = shallow(<Card planets={planets}/>)
	})

	it('highlights favorite button on click', () => {
		wrapper = shallow(<Card />)
		wrapper.instance().selectCard('people')
		expect(wrapper.state().isSelected).toBe(true)
	})



})

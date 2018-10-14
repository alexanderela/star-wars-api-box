import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow, mount } from 'enzyme';
import people from '../../mockData/mockPeople.js';

describe('Nav', () => {
	let wrapper;
	let mockFunction;

	beforeEach(() => {
    mockFunction = jest.fn()
		wrapper = shallow(<Nav   
						showPeople={mockFunction}
            showPlanet={mockFunction}
            showVehicle={mockFunction}/>)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('activates People category on click of People button', () => {
		const expectedState = {
      peopleSelected: true,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.find('.people-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	it('deactivates People category on 2nd click of People button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.setState({ peopleSelected: true })
		wrapper.find('.people-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	it('activates Planets category on click of Planets button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: true
		}
		wrapper.find('.planets-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	it('deactivates Planets category on 2nd click of Planets button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.setState({ planetsSelected: true })
		wrapper.find('.planets-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	it('activates Vehicles category on click of Vehicles button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: true,
      planetsSelected: false
		}
		wrapper.find('.vehicles-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	it('deactivates Vehicles category on 2nd click of Vehicles button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.setState({ vehiclesSelected: true })
		wrapper.find('.vehicles-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})
	// it('invokes handleVehicleClick on click of Vehicles button', () => {
	// 	wrapper .find.simulate click
	// 	expect mockfunction to be called
	// })
})
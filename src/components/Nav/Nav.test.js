/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow, mount } from 'enzyme';
import { Route, NavLink } from 'react-router-dom';
import people from '../../mockData/mockPeople.js';

describe('Nav', () => {
	let wrapper;
	let mockFunction;
	let mockEvent;

	beforeEach(() => {
    mockFunction = jest.fn()
    mockEvent = { target: true }
		wrapper = shallow(<Nav   
						showPeople={mockFunction}
            showPlanet={mockFunction}
            showVehicle={mockFunction}
            toggleCategoryState={mockFunction}/>)
	})

	xit('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	xit('activates People category on click of People button', () => {
		const expectedState = {
      peopleSelected: true,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.find('.people-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	xit('deactivates People category on 2nd click of People button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.setState({ peopleSelected: true })
		wrapper.find('.people-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	xit('activates Planets category on click of Planets button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: true
		}
		wrapper.find('.planets-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	xit('deactivates Planets category on 2nd click of Planets button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.setState({ planetsSelected: true })
		wrapper.find('.planets-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	xit('activates Vehicles category on click of Vehicles button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: true,
      planetsSelected: false
		}
		wrapper.find('.vehicles-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	xit('deactivates Vehicles category on 2nd click of Vehicles button', () => {
		const expectedState = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.setState({ vehiclesSelected: true })
		wrapper.find('.vehicles-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

	// it('invokes toggleCategoryState() if vehiclesSelected is false', () => {
	// 	wrapper.setState({ vehiclesSelected: true })
	// 	wrapper.instance().handleVehicleClick(mockEvent)
	// 	expect(toggleCategoryState).toHaveBeenCalled()
	// })

})
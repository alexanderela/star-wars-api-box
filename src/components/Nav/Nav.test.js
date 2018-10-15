import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
	let wrapper;
	let mockFunction;

	beforeEach(() => {
		wrapper = shallow(<Nav   
						showPeople={jest.fn()}
            showPlanet={jest.fn()}
            showVehicle={jest.fn()}/>)
    mockFunction = jest.fn()
	})

	xit('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	xit('activates People category on click of People button', () => {
		const expectedState = {
			people: people,
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
		wrapper.setState({peopleSelected: true })
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
	// it('invokes handleVehicleClick on click of Vehicles button', () => {
	// 	wrapper .find.simulate click
	// 	expect mockfunction to be called
	// })
})
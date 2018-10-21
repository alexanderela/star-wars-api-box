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
            toggleCategoryState={mockFunction}
            handlePeopleClick={mockFunction}/>)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('activates People category on click of People button', () => {
		const expectedState = {
      favoritesSelected: false,
      peopleSelected: true,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.find('.people-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

  it('calls handlePeopleClick when People button is clicked', () => {
    const spy = spyOn(wrapper.instance(), 'handlePeopleClick')
    wrapper.instance().forceUpdate()
    wrapper.find('.people-button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

	it('deactivates People category on 2nd click of People button', () => {
		const expectedState = {
      favoritesSelected: false,
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
      favoritesSelected: false,
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: true
		}
		wrapper.find('.planets-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

  it('calls handlePlanetClick when Planets button is clicked', () => {
    const spy = spyOn(wrapper.instance(), 'handlePlanetClick')
    wrapper.instance().forceUpdate()
    wrapper.find('.planets-button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

	it('deactivates Planets category on 2nd click of Planets button', () => {
		const expectedState = {
      favoritesSelected: false,
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
      favoritesSelected: false,
      peopleSelected: false,
      vehiclesSelected: true,
      planetsSelected: false
		}
		wrapper.find('.vehicles-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})

  it('calls handleVehicleClick when Vehicles button is clicked', () => {
    const spy = spyOn(wrapper.instance(), 'handleVehicleClick')
    wrapper.instance().forceUpdate()
    wrapper.find('.vehicles-button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

	it('deactivates Vehicles category on 2nd click of Vehicles button', () => {
		const expectedState = {
      favoritesSelected: false,
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
		}
		wrapper.setState({ vehiclesSelected: true })
		wrapper.find('.vehicles-button').simulate('click')
		expect(wrapper.state()).toEqual(expectedState)
	})
})

describe('handleFavoritesClick function', () => {
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
            toggleCategoryState={mockFunction}
            handlePeopleClick={mockFunction}
            showFavorites={mockFunction}/>)
  })

  it('should set state if favoritesSelected is true', () => {
    const expectedState = {
      favoritesSelected: false,
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
    }
    wrapper.setState({ favoritesSelected: true })
    wrapper.instance().handleFavoritesClick()
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should set state if favoritesSelected is false', () => {
      const expectedState = {
        favoritesSelected: true,
        peopleSelected: false,
        vehiclesSelected: false,
        planetsSelected: false
      }
      wrapper.setState({ favoritesSelected: false })
      wrapper.instance().handleFavoritesClick()
      expect(wrapper.state()).toEqual(expectedState)
    })

  it('calls showFavorites', () => {
    const spy = spyOn(wrapper.instance(), 'handleFavoritesClick')
    wrapper.instance().forceUpdate()
    wrapper.instance().handleFavoritesClick()
    expect(spy).toHaveBeenCalled()
  })
})








import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
	let wrapper;

	const selectCardFunc = jest.fn()

	it('matches the snapshot', () => {
		const wrapper = shallow(<Card />);
		expect(wrapper).toMatchSnapshot();
	})

	it('renders people cards if people props are present', () => {
			const mockPeople = {
	          "name": "Luke Skywalker",
	          "homeWorld": { 
	            "planetName":"Tatooine",
	            "planetPop": "200000"
	            },
	          "species": {
	              "speciesName": "Human",
	              "language": "Galactic Basic"
	            }
	        }

			wrapper = mount(<Card people={mockPeople} {...mockPeople}/>)
			expect(wrapper.find('h3').length).toEqual(1)
	})

	it('renders vehicle cards if vehicle props are present', () => {
			const mockVehicles = {"class": "wheeled", 
				"model": "Digger Crawler",
				"name": "Sand Crawler", "passengers": "30"}
			
		const wrapper = shallow(<Card vehicles={mockVehicles} />)
		expect(wrapper.find('h3').length).toEqual(1)
	})

	it('renders planet cards if planet props are present', () => {
			const mockPlanets = {"name": "Alderaan", 
				"terrain": "grasslands, mountains", 
				"population": "2000000000", "climate": "temperate", 
			"residents": 
				["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}
		wrapper = shallow(<Card planets={mockPlanets}/>)
		expect(wrapper.find('h3').length).toEqual(1)
	})

	it('highlights people favorite button on click', () => {
			const mockPeople = {
	          "name": "Luke Skywalker",
	          "homeWorld": { 
	            "planetName":"Tatooine",
	            "planetPop": "200000"
	            },
	          "species": {
	              "speciesName": "Human",
	              "language": "Galactic Basic"
	            }
	        }
		wrapper = shallow(<Card people={mockPeople} {...mockPeople}/>)		
		wrapper.find('.people-fav').simulate('click')
		expect(wrapper.state().isSelected).toBe(true)
	})

	// it('invokes selectCard on click of favorite button', () => {
	// 		const mockPeople = {
	//           "name": "Luke Skywalker",
	//           "homeWorld": { 
	//             "planetName":"Tatooine",
	//             "planetPop": "200000"
	//             },
	//           "species": {
	//               "speciesName": "Human",
	//               "language": "Galactic Basic"
	//             }
	//         }
	// 	wrapper = shallow(<Card people={mockPeople} {...mockPeople}/>)		
	// 	wrapper.find('.people-fav').simulate('click')
	// 	expect(wrapper.instance().selectCard).toBeCalled()			
	// })

	it('highlights vehicle favorite button on click', () => {
		const mockVehicles = {"class": "wheeled", 
			"model": "Digger Crawler",
			"name": "Sand Crawler", "passengers": "30"}		
		wrapper = shallow(<Card vehicles={mockVehicles}/>)		
		wrapper.find('.vehicle-fav').simulate('click')
		expect(wrapper.state().isSelected).toBe(true)
	})

	it('highlights planet favorite button on click', () => {
		const mockPlanets = {"name": "Alderaan", 
			"terrain": "grasslands, mountains", 
			"population": "2000000000", "climate": "temperate", 
		"residents": 
			["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}
		wrapper = shallow(<Card planets={mockPlanets}/>)		
		wrapper.find('.planet-fav').simulate('click')
		expect(wrapper.state().isSelected).toBe(true)
	})

	it('prints default entry if data provides no residents', () => {
			const mockPlanets = {"name": "Alderaan", 
				"terrain": "grasslands, mountains", 
				"population": "2000000000", "climate": "temperate", 
			"residents": []}
		wrapper = shallow(<Card planets={mockPlanets}/>)
		expect(wrapper.find('.planet-residents')).toBeDefined()
	})
})

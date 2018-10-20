/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import people from '../../mockData/mockPeople.js';

describe('Card', () => {
	let wrapper;
	let mockFavs

	const selectCardFunc = jest.fn()

	// beforeEach(() => {
	// 	wrapper = shallow(<Card favorites={mockFavs}/>)
	// 	mockFavs = [{"name": "mustang", id: "mustang"}, {"name": "camaro", "id": "camaro"}]
	// })
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
		const mockAdd = jest.fn()
		wrapper = shallow(<Card person={mockPeople} addToFavorites={mockAdd}
			people={people} {...mockPeople}/>)		
		wrapper.find('.people-fav').simulate('click')
		expect(wrapper.state().isSelected).toBe(true)
	})

	it('highlights vehicle favorite button on click', () => {
		const mockVehicles = {
			"class": "wheeled", 
			"model": "Digger Crawler",
			"name": "Sand Crawler", 
			"passengers": "30",
			"id": "Sand Crawler",
			"isFavorite": false,
			"type": "vehicles"
		}	
		const mockAdd = jest.fn()	
		wrapper = shallow(<Card vehicles={mockVehicles} {...mockVehicles}
			addToFavorites={mockAdd}/>)		
		wrapper.find('.vehicle-fav').simulate('click')
		expect(wrapper.state().isSelected).toBe(true)
	})

	it('highlights planet favorite button on click', () => {
		const mockPlanets = {
			"name": "Alderaan", 
			"terrain": "grasslands, mountains", 
			"population": "2000000000", 
			"climate": "temperate", 
			"residents": 
			["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"],
      "id": "Alderaan",
			"isFavorite": false,
			"type": "planets"
		}
		const mockAdd = jest.fn()
		wrapper = shallow(<Card planets={mockPlanets} {...mockPlanets}
			addToFavorites={mockAdd}/>)		
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

	it('adds cards to favorites if card.type is true', () => {
		const mockPeople = {
          "name": "Luke Skywalker",
          "homeWorld": { 
            "planetName":"Tatooine",
            "planetPop": "200000"
            },
          "species": {
              "speciesName": "Human",
              "language": "Galactic Basic"
            },
          "id": "Luke Skywalker",
					"isFavorite": false,
					"type": "people"
        }

		const mockAdd = jest.fn()
		const wrapper = shallow(<Card 
			person={mockPeople} 
			addToFavorites={mockAdd}
			people={people} {...mockPeople}
		 />)
		const mockFavs = [{"name": "mustang", id: "mustang"}, {"name": "camaro", "id": "camaro"}]
		wrapper.state().favorites = mockFavs
		wrapper.instance().selectCard(mockPeople)
		expect(mockAdd).toHaveBeenCalled()		
	})

	it('removes cards from favorites if card.type is false', () => {
		const mockPeople = {
          "name": "Luke Skywalker",
          "homeWorld": { 
            "planetName":"Tatooine",
            "planetPop": "200000"
            },
          "species": {
              "speciesName": "Human",
              "language": "Galactic Basic"
            },
          "id": "Luke Skywalker",
					"isFavorite": true,
					"type": "people"
        }
		const mockRemove = jest.fn()
		const wrapper = shallow(<Card 
			person={mockPeople} 
			removeFromFavorites={mockRemove}
			people={people} {...mockPeople}/>)
		wrapper.instance().selectCard(mockPeople)
		expect(mockRemove).toHaveBeenCalled()		
	})

describe('componentDidMount', () => {
	it('sets isSelected state to true if item is in favorites', () => {
		const wrapper = shallow(<Card favorites={people.results}/>)
		wrapper.instance().componentDidMount()
		expect(wrapper.state().isSelected).toBe(true)
	})

	// it('doesnt change isSelected state if item is already in favorites', () => {
		

	// })

})

	// it('toggles isFavorite property upon calling selectCard', () => {
	// 	const mockPeople = {
 //          "name": "Luke Skywalker",
 //          "homeWorld": { 
 //            "planetName":"Tatooine",
 //            "planetPop": "200000"
 //            },
 //          "species": {
 //              "speciesName": "Human",
 //              "language": "Galactic Basic"
 //            },
 //          "id": "Luke Skywalker",
	// 				"isFavorite": true,
	// 				"type": "people"
 //        }
	// 	const mockRemove = jest.fn()        
	// 	const wrapper = shallow(<Card 
	// 		person={mockPeople} 
	// 		removeFromFavorites={mockRemove}
	// 		people={people} {...mockPeople}/>)
	// 	wrapper.instance().selectCard(mockPeople)
	// 	expect(mockPeople.prop().isFavorite).toBe(false)		
	// })		

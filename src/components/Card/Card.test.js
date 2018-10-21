/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import people from '../../mockData/mockPeople.js';

describe('Card', () => {
	let wrapper;
	let mockFavs;
	let mockEntry;

	const selectCardFunc = jest.fn()
	const mockToggleFavs = jest.fn()
	const mockPerson = {
	          "name": "Luke Skywalker",
	          "id": "Luke Skywalker",
	          "isFavorite": false, 
	          "type":"people",
	          "properties": [
							{"header": 'Homeworld: ', "text": "Tatooine"},
							{"header": 'Species: ', "text": "human"},
							{"header": 'Population: ', "text": "200,000"},
							{"header": 'Language: ', "text": "Galactic Basic"}
						] 
	        }
	const mockVehicle = {
	          "name": "Sand Cralwer",
	          "id": "Sand Cralwer",
	          "isFavorite": false, 
	          "type":"vehicles",
	          "properties": [
							{"header": 'Model: ', "text": "Digger Crawler"},
							{"header": 'Class: ', "text": "wheeled"},
							{"header": 'Passengers: ', "text": "1"}
						] 
	        }
	const mockPlanet = {
	          "name": "Dagobah",
	          "id": "Dagobah",
	          "isFavorite": false, 
	          "type":"planets",
	          "properties": [
							{"header": 'Terrain: ', "text": "swamp, jungle"},
							{"header": 'Population: ', "text": "unknown"},
							{"header": 'Climate: ', "text": "murky"},
							{"header": 'Residents: ', "text": ""}
						] 
	        }
	mockFavs = [{
          name: "Dina Caraballo",
          id: "Dina Caraballo",
          isFavorite: true, 
          type:"people",
          properties: [
						{header: 'Homeworld: ', text: "Earth"},
						{header: 'Species: ', text: "human"},
						{header: 'Population: ', text: "7,000,000,000"},
						{header: 'Language: ', text: "Galactic Basic"}
					] 
        },
        {
          name: "Alex Ela",
          id: "Alex Ela",
          isFavorite: true, 
          type:"people",
          properties: [
						{header: 'Homeworld: ', text: "Earth"},
						{header: 'Species: ', text: "human"},
						{header: 'Population: ', text: "7,000,000,000"},
						{header: 'Language: ', text: "Galactic Basic"}
					] 
        }, 
        {
          "name": "Luke Skywalker",
          "id": "Luke Skywalker",
          "isFavorite": true, 
          "type":"people",
          "properties": [
						{"header": 'Homeworld: ', "text": "Tatooine"},
						{"header": 'Species: ', "text": "human"},
						{"header": 'Population: ', "text": "200,000"},
						{"header": 'Language: ', "text": "Galactic Basic"}
						] 
	        }]

	beforeEach(() => {
		mockEntry = mockPerson
		wrapper = shallow(<Card entry={mockEntry} 
			key={mockEntry.id}
			toggleFavorites={mockToggleFavs} 
			favorites={mockFavs} 
			isFavorite={mockEntry.isFavorite}/>)
	})

	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('renders people cards if people props are present', () => {
			expect(wrapper.find('h3').length).toEqual(1)
	})

	it('renders vehicle cards if vehicle props are present', () => {
		mockEntry = mockVehicle
		expect(wrapper.find('h3').length).toEqual(1)
	})

	it('renders planet cards if planet props are present', () => {
		mockEntry = mockPlanet
		expect(wrapper.find('h3').length).toEqual(1)
	})

	it('invokes toggleFavorites on click', () => {
		wrapper.find('.fav-btn').simulate('click')
		expect(mockToggleFavs).toHaveBeenCalled()
	})

	it('changes fav button class to active on click', () => {
		mockEntry = {
	          "name": "Luke Skywalker",
	          "id": "Luke Skywalker",
	          "isFavorite": true, 
	          "type":"people",
	          "properties": [
							{"header": 'Homeworld: ', "text": "Tatooine"},
							{"header": 'Species: ', "text": "human"},
							{"header": 'Population: ', "text": "200,000"},
							{"header": 'Language: ', "text": "Galactic Basic"}
						] 
	        }
		wrapper.find('button').simulate('click')
		expect(wrapper.find('button').hasClass('fav-btn-inactive')).toBe(true)
	})

	it.only('changes fav button class to active on click', () => {
	mockEntry = {
          "name": "Luke Skywalker",
          "id": "Luke Skywalker",
          "isFavorite": true, 
          "type":"people",
          "properties": [
						{"header": 'Homeworld: ', "text": "Tatooine"},
						{"header": 'Species: ', "text": "human"},
						{"header": 'Population: ', "text": "200,000"},
						{"header": 'Language: ', "text": "Galactic Basic"}
					] 
        }
	wrapper.find('button').simulate('click')
	expect(wrapper.find('button').hasClass('fav-btn-inactive')).toBe(true)
})

	// it('highlights vehicle favorite button on click', () => {
	// 	const mockVehicles = {
	// 		"class": "wheeled", 
	// 		"model": "Digger Crawler",
	// 		"name": "Sand Crawler", 
	// 		"passengers": "30",
	// 		"id": "Sand Crawler",
	// 		"isFavorite": false,
	// 		"type": "vehicles"
	// 	}	
	// 	const mockAdd = jest.fn()	
	// 	wrapper = shallow(<Card vehicles={mockVehicles} {...mockVehicles}
	// 		addToFavorites={mockAdd}/>)		
	// 	wrapper.find('.vehicle-fav').simulate('click')
	// 	expect(wrapper.state().isSelected).toBe(true)
	// })

	// it('highlights planet favorite button on click', () => {
	// 	const mockPlanets = {
	// 		"name": "Alderaan", 
	// 		"terrain": "grasslands, mountains", 
	// 		"population": "2000000000", 
	// 		"climate": "temperate", 
	// 		"residents": 
	// 		["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"],
 //      "id": "Alderaan",
	// 		"isFavorite": false,
	// 		"type": "planets"
	// 	}
	// 	const mockAdd = jest.fn()
	// 	wrapper = shallow(<Card planets={mockPlanets} {...mockPlanets}
	// 		addToFavorites={mockAdd}/>)		
	// 	wrapper.find('.planet-fav').simulate('click')
	// 	expect(wrapper.state().isSelected).toBe(true)
	// })

	// it('prints default entry if data provides no residents', () => {
	// 	mockEntry = mockPlanet
	// 	expect(wrapper.find('.planet-residents')).toBeDefined()
	// })


// })

	// it('adds cards to favorites if card.type is true', () => {
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
	// 				"isFavorite": false,
	// 				"type": "people"
 //        }

	// 	const mockAdd = jest.fn()
	// 	const wrapper = shallow(<Card 
	// 		person={mockPeople} 
	// 		addToFavorites={mockAdd}
	// 		people={people} {...mockPeople}
	// 	 />)
	// 	const mockFavs = [{"name": "mustang", id: "mustang"}, {"name": "camaro", "id": "camaro"}]
	// 	wrapper.state().favorites = mockFavs
	// 	wrapper.instance().selectCard(mockPeople)
	// 	expect(mockAdd).toHaveBeenCalled()		
	// })

	// it('removes cards from favorites if card.type is false', () => {
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
	// 	expect(mockRemove).toHaveBeenCalled()		
	// })

// describe('componentDidMount', () => {
// 	it.only('sets isSelected state to true if item is in favorites', () => {
// 		const wrapper = shallow(<Card favorites={people.results}/>)
// 		wrapper.instance().componentDidMount()
// 		expect(wrapper.state().isSelected).toBe(true)
// 	})

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

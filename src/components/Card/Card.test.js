/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import people from '../../mockData/mockPeople.js';

describe('Card component', () => {
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

	it('changes fav button class to active if isFavorite is true', () => {
		wrapper = shallow(<Card entry={mockEntry} 
			key={mockEntry.id}
			toggleFavorites={mockToggleFavs} 
			favorites={[]} 
			isFavorite={true}/>)
		wrapper.find('button').simulate('click')
		expect(wrapper.find('button').hasClass('fav-btn-active')).toBe(true)
	})

	it('changes fav button class to inactive if card is not in the favorites array in state', () => {
	  wrapper = shallow(<Card entry={mockEntry} 
			key={mockEntry.id}
			toggleFavorites={mockToggleFavs} 
			favorites={[]} 
			isFavorite={false}/>)

		wrapper.find('button').simulate('click')
		expect(wrapper.find('button').hasClass('fav-btn-inactive')).toBe(true)
	});

	it('changes fav button class to active if card is in the favorites array in state', () => {
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

	  wrapper = shallow(<Card entry={mockEntry} 
			key={mockEntry.id}
			toggleFavorites={mockToggleFavs} 
			favorites={mockFavs} 
			isFavorite={true}/>)

		wrapper.find('button').simulate('click')
		expect(wrapper.find('button').hasClass('fav-btn-active')).toBe(true)
	});
})	

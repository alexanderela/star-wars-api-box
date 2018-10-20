/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import Card from '../Card/Card'
import { shallow } from 'enzyme';
import mockPerson from '../../mockData/mockPerson.js';
import people from '../../mockData/mockPeople.js';


it('matches the snapshot', () => {
	const wrapper = shallow(<CardContainer person={people.results}/>);
	expect(wrapper).toMatchSnapshot();
})

it('renders each card', () => {
	const mockVehicles = [
		{"class": "wheeled", "model": "Digger Crawler",
		"name": "Sand Crawler", "passengers": "30"}, 
		{"class": "wheeled", "model": "Digger Crawler",
		"name": "Sand Crawler", "passengers": "30"}
		]
	const wrapper = shallow(<CardContainer vehicles={mockVehicles} />);
	expect(wrapper.find(Card).length).toEqual(2)
})

it('renders people cards if people props are present', () => {
	const mockPeople = [{
	          "name": "Luke Skywalker",
	          "homeworld": { 
	            "planetName":"Tatooine",
	            "planetPop": "200000"
	            },
	          "species": {
	              "speciesName": "Human",
	              "language": "Galactic Basic"
	            }
	        }]

	const wrapper = shallow(<CardContainer people={mockPeople} />)
	expect(wrapper.find(Card).length).toEqual(1)
})

it('renders vehicle cards if vehicle props are present', () => {
	const mockVehicles = [
		{"class": "wheeled", "model": "Digger Crawler",
		"name": "Sand Crawler", "passengers": "30"}, 
		{"class": "wheeled", "model": "Digger Crawler",
		"name": "Sand Crawler", "passengers": "30"}
		]
	const wrapper = shallow(<CardContainer vehicles={mockVehicles} />)
	expect(wrapper.find(Card).length).toEqual(2)
})

it('renders planet cards if planet props are present', () => {
	const mockPlanets = [
	{"name": "Alderaan", "terrain": "grasslands, mountains", 
	"population": "2000000000", "climate": "temperate", 
	"residents": ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}
	]
	const wrapper = shallow(<CardContainer planets={mockPlanets} />)
	expect(wrapper.find(Card).length).toEqual(1)
})



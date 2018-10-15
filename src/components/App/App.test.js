import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import DataCleaner from '../../helper.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Nav from '../Nav/Nav.js';
import films from '../../mockData/mockFilms.js';
import people from '../../mockData/mockPeople.js';
import vehicles from '../../mockData/mockVehicles.js';
import planets from '../../mockData/mockPlanets.js';
import resolvedPeople from '../../mockData/mockResolvedPeople.js';
import mockPerson from '../../mockData/mockPerson.js';
import mockSpecies from '../../mockData/mockSpecies.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let wrapper;
let mockEvent;
let mockLuke;
let mockVehicle;
let mockPlanet;
let mockFilm;

beforeEach(() => {
	wrapper = shallow(<App />);	
	mockEvent = { target: true }
})

it('matches the snapshot', () => {
	expect(wrapper).toMatchSnapshot();
})

it('invokes showFilm function on componentDidMount', () => {
	wrapper.instance().showFilm = jest.fn()
	wrapper.instance().componentDidMount()
	expect(wrapper.instance().showFilm).toHaveBeenCalled()
})

it('has the correct default state for films', () => {
	expect(wrapper.state().films).not.toBe('{}')
})

it('sets film to state', async () => {
	mockFilm = {
		opening_crawl: "Heyy youu guyyyys", 
		episode_id: 7, 
		title: "The Force Awakens"
	}
	wrapper.state().dataCleaner.getMovie = jest.fn().mockImplementation(() => Promise.resolve(
		mockFilm))
	await wrapper.instance().showFilm()
	await expect(wrapper.state().films).toEqual(mockFilm)
})

it('should toggle the state of people if it is already selected', () => {
	wrapper.setState({ peopleSelected: true })
	wrapper.instance().showPeople()
	expect(wrapper.state().peopleSelected).toBe(false)
})

it('sets people to state ', async () => {
		mockLuke = {
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
	wrapper.state().dataCleaner.getPerson = jest.fn().mockImplementation(() => Promise.resolve(
 		mockLuke))
	await wrapper.instance().showPeople()
  await expect(wrapper.state().people).toEqual(mockLuke)
})

it('should toggle the state of vehicles if it is already selected', async () => {
	mockFilm = {
		opening_crawl: "Heyy youu guyyyys", 
		episode_id: 7, 
		title: "The Force Awakens"
	}
	const initialState = { 
    films: mockFilm,
    people: [],
    planets: [],
		vehicles: [mockVehicle],
		peopleSelected: false, 
		vehiclesSelected: true,
		planetsSelected: false, 
	}
	const expectedState = {
    films: {},
    people: [],
    vehicles: [],
    planets: [],
    peopleSelected: false,
    vehiclesSelected: false,
    planetsSelected: false
  }

	const categoryName = 'vehicle'
	jest.fn().mockImplementation(() => Promise.resolve(
 	initialState))
	await wrapper.instance().toggleCategoryState(categoryName)
	await expect(wrapper.state()).toEqual(expectedState)
})

it('sets vehicles to state ', async () => {
		mockVehicle = {
			"class": "wheeled", 
			"model": "Digger Crawler",
			"name": "Sand Crawler", 
			"passengers": "30"
		}		
	wrapper.state().dataCleaner.getVehicle = jest.fn().mockImplementation(() => Promise.resolve(
 		mockVehicle))
	await wrapper.instance().showVehicles()
  await expect(wrapper.state().vehicles).toEqual(mockVehicle)
})

it('should toggle the state of planets if it is already selected', () => {
	// const categoryName = 'planets'
	let planetsSelected = true
	wrapper.instance().toggleCategoryState()
	expect(wrapper.state().planetsSelected).toBe(false)
})

it('sets planets to state ', async () => {
	mockPlanet = {"name": "Alderaan", 
		"terrain": "grasslands, mountains", 
		"population": "2000000000", "climate": "temperate", 
	"residents": 
		["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}
	wrapper.state().dataCleaner.getPlanet = jest.fn().mockImplementation(() => Promise.resolve(
 		mockPlanet))
	await wrapper.instance().showPlanets()
  await expect(wrapper.state().planets).toEqual(mockPlanet)	
})

it('renders a card container displaying people if peopleSelected is true', () => {
	wrapper.setState({ peopleSelected: true })
  const spy = spyOn(wrapper.instance(), 'showPeople');
  wrapper.instance().showPeople()
	expect(spy).toHaveBeenCalled()
})

it('renders a card container displaying vehicles if vehiclesSelected is true', () => {
	wrapper.setState({ vehiclesSelected: true })
	const spy = spyOn(wrapper.instance(), 'showVehicles');
	wrapper.instance().showVehicles()
	expect(spy).toHaveBeenCalled()
})

it('renders a card container displaying planets if planetsSelected is true', () => {
	wrapper.setState({ planetsSelected: true })
	const spy = spyOn(wrapper.instance(), 'showPlanets');
	wrapper.instance().showPlanets()
	expect(spy).toHaveBeenCalled()	
})

it('stringifies and sets data local storage', () => {
	const mockKey = 'test array'
	const mockData = ['luke', 'leia', 'R2-D2']
	wrapper.instance().stringifyAndSetLocalStorage(mockKey, mockData)
	expect(localStorage.setItem(mockKey, mockData)).toHaveBeenCalled()
})

it('gets and parses data from local storage', () => {

})



















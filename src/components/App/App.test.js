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


xit('renders without crashing', () => {
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
let expected;

beforeEach(() => {
	wrapper = shallow(<App />);	
	mockEvent = { target: true }
})

xit('matches the snapshot', () => {
	expect(wrapper).toMatchSnapshot();
})

xit('invokes showFilm function on componentDidMount', () => {
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

it('should toggle the state of people if it is already selected', async () => {
		mockFilm = {
		opening_crawl: "Heyy youu guyyyys", 
		episode_id: 7, 
		title: "The Force Awakens"
	}
	wrapper.setState({ peopleSelected: true, films: mockFilm })
	await wrapper.instance().showPeople()
	await expect(wrapper.state().peopleSelected).toBe(false)
	// expect(wrapper.instance().showPeople).toHaveBeenCalled
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
	const initialState = { 
		dataCleaner: null,
    films: {},
    people: [],
    planets: [],
		vehicles: [],
		peopleSelected: false, 
		vehiclesSelected: false,
		planetsSelected: false,
		favorites: [] 
	}

	const expectedState = {
		dataCleaner: null,
    films: {},
    people: [],
    vehicles: [],
    planets: [],
    peopleSelected: false,
    vehiclesSelected: true,
    planetsSelected: false,
		favorites: []
  }

  wrapper.setState(initialState)
	wrapper.instance().toggleCategoryState('vehicles')
	expect(wrapper.state()).toEqual(expectedState)
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

xit('deselects vehicles state if it is already selected', async () => {
	const initialState = { 
		dataCleaner: null,
    films: {},
    people: [],
    planets: [],
		vehicles: [],
		peopleSelected: false, 
		vehiclesSelected: true,
		planetsSelected: false 
	}

	const expectedState = {
		dataCleaner: null,
    films: {},
    people: [],
    vehicles: [],
    planets: [],
    peopleSelected: false,
    vehiclesSelected: false,
    planetsSelected: false
  }
  wrapper.setState(initialState)	
  wrapper.instance().showVehicles()
  console.log(wrapper.state().vehiclesSelected)
  expect(wrapper.state()).toEqual(expectedState)	
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

it('sets people data to local storage', () => {
	const mockData = [{ "class": "wheeled", "model": "Digger Crawler" }, 
	{"class": "tires", "model": "Mustang"}]
	wrapper.instance().setLocalStorage('mockData', mockData)
	expect(JSON.parse(localStorage.getItem('mockData'))).toEqual(mockData)
})

it('gets and parses data from local storage', () => {
	localStorage.clear()
	const mockData = [{ "class": "wheeled", "model": "Digger Crawler" }, 
	{"class": "tires", "model": "Mustang"}]
	localStorage.setItem('mockData', JSON.stringify(mockData))
	const	getStorage = wrapper.instance().getLocalStorage('mockData')
	expect(getStorage).toEqual(mockData) 
})













	// const mockData = [{ "class": "wheeled", "model": "Digger Crawler" }, 
	// 		{"class": "tires", "model": "Mustang"}]
	// const mockAddition = [{ "class": "unicycle", "model": "n/a" }]
	// expected = [{ "class": "wheeled", "model": "Digger Crawler" }, 
	// 		{"class": "tires", "model": "Mustang"}, { "class": "unicycle", "model": "n/a" }]






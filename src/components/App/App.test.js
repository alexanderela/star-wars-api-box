import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import DataCleaner from '../../helper.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Nav from '../Nav/Nav.js';
import films from '../../mockData/mockFilms.js';
import people from '../../mockData/mockPeople.js';
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

beforeEach(() => {
	wrapper = shallow(<App />);	
})

xit('matches the snapshot', () => {
	expect(wrapper).toMatchSnapshot();
})

xit('invokes showFilm function on componentDidMount', () => {
	wrapper.instance().showFilm = jest.fn()
	wrapper.instance().componentDidMount()
	expect(wrapper.instance().showFilm).toHaveBeenCalled()
})

xit('has the correct default state', () => {
	const mockMath = Object.create(global.Math)
	mockMath.random = () => 0.5;
	global.Math = mockMath

	const expected = {
		dataCleaner: new DataCleaner(),
    films: mockMath,
    people: [],
    vehicles: [],
    planets: [],
    peopleSelected: false,
    vehiclesSelected: false,
    planetsSelected: false
	}
	expect(wrapper.state()).toBe(expected)

})

xit('sets planets to state', async () => {
	// const mockPlanets = {"name": "Alderaan", 
	// 	"terrain": "grasslands, mountains", 
	// 	"population": "2000000000", "climate": "temperate", 
	// "residents": 
	// 	["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}
	const expected = "https://swapi.co/api/planets/"
	const mockFunc = jest.fn(() => [])
	window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
		ok: true,
		json: () => Promse.resolve(planets)
	}))
	await wrapper.showPlanets
	expect(wrapper.state().planets).toEqual(planets)

})

xit('renders a card container displaying people if peopleSelected is true', () => {
	wrapper.setState({ peopleSelected: true })
  const spy = spyOn(wrapper.instance(), 'showPeople');
  wrapper.instance().showPeople()
	expect(spy).toHaveBeenCalled()
})

xit('renders a card container displaying vehicles if vehiclesSelected is true', () => {
	wrapper.setState({ vehiclesSelected: true })
	const spy = spyOn(wrapper.instance(), 'showVehicles');
	wrapper.instance().showVehicles()
	expect(spy).toHaveBeenCalled()
})

xit('renders a card container displaying planets if planetsSelected is true', () => {
	wrapper.setState({ planetsSelected: true })
	const spy = spyOn(wrapper.instance(), 'showPlanets');
	wrapper.instance().showPlanets()
	expect(spy).toHaveBeenCalled()	
})


	// wrapper = mount(<App />);	
	// const people = [{"luke": "human"}, {"leia": "human"}]
	// const mockShowPeople = jest.fn()
 //  const spy = spyOn(wrapper.instance(), 'showPeople');
 //  const nav = mount(<Nav showPeople={mockShowPeople} />)
 //  nav.find('.people-button').simulate('click')
 //  expect(spy).toHaveBeenCalled()

    

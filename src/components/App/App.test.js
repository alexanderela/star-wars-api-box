import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import DataCleaner from '../../helper.js';
import CardContainer from '../CardContainer/CardContainer.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let wrapper;

beforeEach(() => {
	wrapper = shallow(<App />);	
})

it('matches the snapshot', () => {
	expect(wrapper).toMatchSnapshot();
})

it('invokes showFilm function on componentDidMount', () => {
	wrapper.instance().showFilm = jest.fn()
	wrapper.instance().componentDidMount()
	expect(wrapper.instance().showFilm).toHaveBeenCalled()
})

it('has the correct default state', () => {
	const mockMath = Object.create(global.Math)
	mockMath.random = () => 0.5;
	global.Math = mockMath

	const expected = {
		dataCleaner: new DataCleaner(),
    films: {},
    people: [],
    vehicles: [],
    planets: [],
    peopleSelected: false,
    vehiclesSelected: false,
    planetsSelected: false
	}
	expect(wrapper.state()).toBe(expected)

})

it('sets planets to state', async () => {
	const mockPlanets = {"name": "Alderaan", 
		"terrain": "grasslands, mountains", 
		"population": "2000000000", "climate": "temperate", 
	"residents": 
		["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}

	await mockFetch
	wrapper.instance().showPlanets
	expect(wrapper.state().planets).toEqual(mockPlanets)

})

it('renders a card container displaying people if peopleSelected is true', () => {
	const people = [{"luke": "human"}, {"leia": "human"}]
	wrapper = mount(<App />);	
	wrapper.setState({ peopleSelected: true })
	expect(wrapper.find('Card-Container-people')).toHaveLength(2)
})

it('renders a card container displaying vehicles if vehiclesSelected is true', () => {
	
})

it('renders a card container displaying planets if planetsSelected is true', () => {
	
})


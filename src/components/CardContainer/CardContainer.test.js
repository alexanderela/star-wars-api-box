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
	const mockData = [{"luke skywalker": {}}, {"C3P0": {}}, {"leia organa": {}}]
	const wrapper = shallow(<CardContainer person={people.results}w />);
	expect(wrapper.find(Card).length).toEqual(3)
})
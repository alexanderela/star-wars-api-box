import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import Card from '../Card/Card'
import { shallow } from 'enzyme';


xit('matches the snapshot', () => {
	const wrapper = shallow(<CardContainer />);
	expect(wrapper).toMatchSnapshot();
})

xit('renders each card', () => {
	const mockData = [{"luke skywalker": {}}, {"C3P0": {}}, {"leia organa": {}}]
	const wrapper = shallow(<CardContainer people={mockData} key={Date.now()} />);
	expect(wrapper.find(Card).length).toEqual(3)
})
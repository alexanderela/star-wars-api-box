/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import Card from '../Card/Card'
import { shallow } from 'enzyme';
import people from '../../mockData/mockPeople.js';

const mockVehicle = [{
          "name": "Sand Cralwer",
          "id": "Sand Cralwer",
          "isFavorite": false, 
          "type":"vehicles",
          "properties": [
						{"header": 'Model: ', "text": "Digger Crawler"},
						{"header": 'Class: ', "text": "wheeled"},
						{"header": 'Passengers: ', "text": "1"}
					] 
        }]

describe('CardContainer component', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(<CardContainer entries={mockVehicle}/>);
		expect(wrapper).toMatchSnapshot();
	})

	it('renders each card', () => {
		const wrapper = shallow(<CardContainer entries={mockVehicle} />);
		expect(wrapper.find(Card).length).toEqual(1)
	})
})


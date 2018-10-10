import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

it('matches the snapshot', () => {
	const wrapper = shallow(<CardContainer />);
	expect(wrapper).toMatchSnapshot();
})
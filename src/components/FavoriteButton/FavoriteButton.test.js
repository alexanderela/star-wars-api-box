import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteButton from './FavoriteButton';
import { shallow } from 'enzyme';

describe('FavoriteButton', () => {
	xit('matches the snapshot', () => {
		const wrapper = shallow(<FavoriteButton />);
		expect(wrapper).toMatchSnapshot();
	})

})
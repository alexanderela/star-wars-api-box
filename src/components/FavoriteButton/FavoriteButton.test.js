import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteButton from './FavoriteButton';
import { shallow, mount } from 'enzyme';

describe('FavoriteButton', () => {
	
	it('matches the snapshot', () => {
		let mockFavoriteCount = []
		let wrapper = shallow(<FavoriteButton favoritesCount={[mockFavoriteCount]}/>);
		expect(wrapper).toMatchSnapshot();
	})
})

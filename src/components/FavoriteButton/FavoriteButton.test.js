import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteButton from './FavoriteButton';
import { shallow } from 'enzyme';

describe('FavoriteButton', () => {

	beforeEach(() => {
		const mockFavoriteCount = jest.fn()
		const wrapper = shallow(<FavoriteButton favoritesCount={mockFavoriteCount}/>);
	})
	
	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('displays 0 favorites count if there are no favorites in state', () => {
		

	})
})